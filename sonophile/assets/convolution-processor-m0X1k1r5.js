// Sonophile — uniform partitioned (FFT) stereo convolution AudioWorklet.
// Dual-mono stereo: outL = inL ⊛ irL, outR = inR ⊛ irR, with overlap-add FDL,
// click-free A/B snapshot crossfade, pre-delay, damping trim and stereo width.
//
// Plain JS (no imports) so it can be loaded directly by `addModule(new URL(...))`.

'use strict';

// ---------------- FFT (radix-2, iterative, in-place on real/imag arrays) ------
function fft(re, im) {
  const n = re.length;
  if (n <= 1 || (n & (n - 1)) !== 0) return;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = (-2 * Math.PI) / len;
    const wRe = Math.cos(ang), wIm = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let curRe = 1, curIm = 0;
      for (let k = 0; k < len / 2; k++) {
        const a = i + k, b = i + k + len / 2;
        const vr = re[b] * curRe - im[b] * curIm;
        const vi = re[b] * curIm + im[b] * curRe;
        re[b] = re[a] - vr; im[b] = im[a] - vi;
        re[a] += vr; im[a] += vi;
        const nRe = curRe * wRe - curIm * wIm;
        curIm = curRe * wIm + curIm * wRe;
        curRe = nRe;
      }
    }
  }
}

function ifft(re, im) {
  for (let i = 0; i < im.length; i++) im[i] = -im[i];
  fft(re, im);
  const n = re.length;
  for (let i = 0; i < n; i++) { re[i] /= n; im[i] = -im[i] / n; }
}

// ---------------- one convolution engine (one stereo IR) ----------------------
class ConvEngine {
  constructor(blockSize) {
    this.blockSize = blockSize;
    this.fftSize = blockSize * 2;
    this.partitions = 0;
    this.irSpecL = []; // arrays of {re, im} per partition
    this.irSpecR = [];
    this.fdlL = null;  // flat ring of re/im spectra
    this.fdlR = null;
    this.fdlPos = 0;
  }

  setIR(irL, irR) {
    const B = this.blockSize, N = this.fftSize;
    const P = Math.max(1, Math.ceil(irL.length / B));
    this.partitions = P;
    this.irSpecL = new Array(P);
    this.irSpecR = new Array(P);
    for (let p = 0; p < P; p++) {
      this.irSpecL[p] = this.partitionSpectrum(irL, p);
      this.irSpecR[p] = this.partitionSpectrum(irR, p);
    }
    // FDL ring: P spectra × N complex (flat, interleaved re/im).
    this.fdlL = new Float32Array(P * N * 2);
    this.fdlR = new Float32Array(P * N * 2);
    this.fdlPos = 0;
  }

  partitionSpectrum(ir, p) {
    const B = this.blockSize, N = this.fftSize;
    const re = new Float32Array(N), im = new Float32Array(N);
    const start = p * B;
    for (let i = 0; i < B; i++) {
      const s = start + i;
      re[i] = s < ir.length ? ir[s] : 0;
    }
    fft(re, im);
    return { re, im };
  }

  // Convolve one block of B samples. Returns {l, r} Float32Array of B samples.
  process(inputL, inputR) {
    const B = this.blockSize, N = this.fftSize, P = this.partitions;
    // FFT the input block (zero-padded).
    const xL = new Float32Array(N), xIL = new Float32Array(N);
    const xR = new Float32Array(N), xIR = new Float32Array(N);
    for (let i = 0; i < B; i++) { xL[i] = inputL[i]; xR[i] = inputR[i]; }
    fft(xL, xIL);
    fft(xR, xIR);

    // Store into FDL ring.
    const base = this.fdlPos * N * 2;
    for (let i = 0; i < N; i++) {
      this.fdlL[base + 2 * i] = xL[i];
      this.fdlL[base + 2 * i + 1] = xIL[i];
      this.fdlR[base + 2 * i] = xR[i];
      this.fdlR[base + 2 * i + 1] = xIR[i];
    }

    // Accumulate Y = Σ FDL[pos-k] ⊙ spec[k].
    const accL = new Float32Array(N), accIL = new Float32Array(N);
    const accR = new Float32Array(N), accIR = new Float32Array(N);
    for (let k = 0; k < P; k++) {
      const idx = (this.fdlPos - k + P) % P;
      const fbase = idx * N * 2;
      const sL = this.irSpecL[k], sR = this.irSpecR[k];
      for (let i = 0; i < N; i++) {
        const a = this.fdlL[fbase + 2 * i], b = this.fdlL[fbase + 2 * i + 1];
        const c = sL.re[i], d = sL.im[i];
        accL[i] += a * c - b * d;
        accIL[i] += a * d + b * c;
        const e = this.fdlR[fbase + 2 * i], f = this.fdlR[fbase + 2 * i + 1];
        const g = sR.re[i], h = sR.im[i];
        accR[i] += e * g - f * h;
        accIR[i] += e * h + f * g;
      }
    }
    this.fdlPos = (this.fdlPos + 1) % P;

    ifft(accL, accIL);
    ifft(accR, accIR);
    // Overlap-add: keep all N samples but the tail overlaps the next block; the
    // caller applies overlap-add buffering.
    const outL = accL, outR = accR;
    return { l: outL, r: outR };
  }
}

// ---------------- processor ---------------------------------------------------
class ConvolutionProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.blockSize = 512;
    this.fftSize = 1024;
    this.engA = new ConvEngine(this.blockSize);
    this.engB = new ConvEngine(this.blockSize);
    this.active = this.engA;
    this.inactive = this.engB;
    this.hasIR = false;
    this.fade = null; // { from, to, remaining }
    this.fadeSamples = Math.round(sampleRate * 0.05); // 50 ms

    // Block buffering (128-sample render quantum → 512-sample blocks).
    this.inBufL = new Float32Array(this.blockSize);
    this.inBufR = new Float32Array(this.blockSize);
    this.inPos = 0;
    this.outL = new Float32Array(this.blockSize);
    this.outR = new Float32Array(this.blockSize);
    this.outPos = this.blockSize; // force compute on first block
    this.overlapL = new Float32Array(this.blockSize);
    this.overlapR = new Float32Array(this.blockSize);

    this.dry = 0.5;
    this.wet = 0.5;
    this.predelay = 0;
    this.damping = 0.5;
    this.width = 1.0;
    this.delayL = new Float32Array(Math.round(sampleRate * 0.2) + this.blockSize);
    this.delayR = new Float32Array(this.delayL.length);
    this.delayPos = 0;
    this.lpL = 0; this.lpR = 0; // one-pole damping state

    this.port.onmessage = (e) => this.onMessage(e.data);
  }

  onMessage(msg) {
    if (msg.type === 'set-ir') {
      this.swapIR(msg.left, msg.right);
    } else if (msg.type === 'param') {
      if (msg.dry !== undefined) this.dry = msg.dry;
      if (msg.wet !== undefined) this.wet = msg.wet;
      if (msg.predelay !== undefined) this.predelay = Math.round(msg.predelay * sampleRate / 1000);
      if (msg.damping !== undefined) this.damping = msg.damping;
      if (msg.width !== undefined) this.width = msg.width;
    }
  }

  swapIR(left, right) {
    if (!this.hasIR) {
      this.active.setIR(left, right);
      this.hasIR = true;
    } else {
      this.inactive.setIR(left, right);
      this.fade = { from: this.active, to: this.inactive, remaining: this.fadeSamples };
      // swap roles
      const t = this.active; this.active = this.inactive; this.inactive = t;
    }
  }

  process(inputs, outputs) {
    const input = inputs[0];
    const output = outputs[0];
    const ch = Math.min(input.length, output.length);
    const inL = input[0] || new Float32Array(128);
    const inR = input[1] || inL;
    const outLch = output[0];
    const outRch = output[1] || outLch;
    const n = output[0].length; // 128

    for (let i = 0; i < n; i++) {
      this.inBufL[this.inPos] = inL[i];
      this.inBufR[this.inPos] = inR[i];
      this.inPos++;
      if (this.inPos === this.blockSize) {
        this.computeBlock();
        this.inPos = 0;
      }
      const idx = this.outPos;
      let wl = this.outL[idx];
      let wr = this.outR[idx];

      // Damping (one-pole low-pass on wet).
      const lp = 1 - this.damping * 0.5; // damping → more low-pass
      this.lpL += lp * (wl - this.lpL);
      this.lpR += lp * (wr - this.lpR);
      wl = this.lpL; wr = this.lpR;

      // Pre-delay (wet only).
      const dpos = this.delayPos;
      this.delayL[dpos] = wl; this.delayR[dpos] = wr;
      const dIdx = (dpos - this.predelay + this.delayL.length) % this.delayL.length;
      const dwl = this.delayL[dIdx], dwr = this.delayR[dIdx];

      // Stereo width (mid/side).
      const mid = (dwl + dwr) * 0.5, side = (dwl - dwr) * 0.5;
      const wetL = mid + this.width * side;
      const wetR = mid - this.width * side;

      outLch[i] = this.dry * inL[i] + this.wet * wetL;
      if (outRch !== outLch) outRch[i] = this.dry * inR[i] + this.wet * wetR;
      else outLch[i] = 0.5 * (this.dry * inL[i] + this.wet * wetL) + 0.5 * (this.dry * inR[i] + this.wet * wetR);

      this.delayPos = (this.delayPos + 1) % this.delayL.length;
      this.outPos++;
    }
    return true;
  }

  computeBlock() {
    // Convolve the current block on both engines (if IR present).
    let l = new Float32Array(this.blockSize);
    let r = new Float32Array(this.blockSize);
    if (!this.hasIR) { l.fill(0); r.fill(0); }
    else {
      const a = this.active.process(this.inBufL, this.inBufR);
      l = a.l; r = a.r;
      if (this.fade) {
        const b = this.fade.to.process(this.inBufL, this.inBufR);
        const steps = this.fade.remaining;
        if (steps <= 0) { this.fade = null; }
        else {
          // Crossfade over the whole block.
          for (let i = 0; i < this.blockSize; i++) {
            const t = Math.min(1, i / steps);
            l[i] = a.l[i] * (1 - t) + b.l[i] * t;
            r[i] = a.r[i] * (1 - t) + b.r[i] * t;
          }
          this.fade.remaining = Math.max(0, steps - this.blockSize);
          if (this.fade.remaining === 0) this.fade = null;
        }
      }
    }
    // Overlap-add the N-length convolution into B-length output.
    for (let i = 0; i < this.blockSize; i++) {
      this.outL[i] = l[i] + this.overlapL[i];
      this.outR[i] = r[i] + this.overlapR[i];
      this.overlapL[i] = l[i + this.blockSize];
      this.overlapR[i] = r[i + this.blockSize];
    }
    this.outPos = 0;
  }
}

registerProcessor('sonophile-convolution', ConvolutionProcessor);
