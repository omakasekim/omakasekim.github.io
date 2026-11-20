let wasmInstance = null;
let memoryBuffer = null;

const FORMATS = ["RAW / UNKNOWN", "ELF (Linux)", "Mach-O (macOS)", "PE / COFF (Windows)"];

async function init() {
  const statusEl = document.getElementById("wasm-status");
  try {
    const res = await fetch("spinel.wasm");
    const bytes = await res.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {
      env: {}
    });
    wasmInstance = instance;
    memoryBuffer = new Uint8Array(wasmInstance.exports.memory.buffer);

    statusEl.textContent = "WASM Live (Shannon SIMD)";
    statusEl.className = "status-pill good";

    loadSample("mixed");
  } catch (err) {
    statusEl.textContent = "WASM Failed: " + err.message;
    statusEl.className = "status-pill bad";
  }
}

function analyzeBuffer(u8arr) {
  if (!wasmInstance) return;

  // Allocate memory inside WASM linear memory
  // Place input at offset 1024
  const inOffset = 1024;
  const inLen = u8arr.length;

  // Ensure wasm memory capacity
  const mem = new Uint8Array(wasmInstance.exports.memory.buffer);
  mem.set(u8arr, inOffset);

  // 1. Overall Entropy
  const overallEntropy = wasmInstance.exports.spinel_calc_entropy(inOffset, inLen);
  document.getElementById("val-entropy").textContent = overallEntropy.toFixed(3) + " / 8.000";

  // 2. Format Detection
  const fmtCode = wasmInstance.exports.spinel_detect_format(inOffset, inLen);
  document.getElementById("val-format").textContent = FORMATS[fmtCode] || "RAW";

  // 3. Signature
  const sigEl = document.getElementById("val-signature");
  if (overallEntropy > 7.2) {
    sigEl.textContent = "HIGH (Packed / Encrypted)";
    sigEl.style.color = "var(--bad)";
  } else if (overallEntropy > 5.5) {
    sigEl.textContent = "MODERATE (Native Code)";
    sigEl.style.color = "var(--accent)";
  } else {
    sigEl.textContent = "LOW (Sparse / Plaintext)";
    sigEl.style.color = "var(--good)";
  }

  // 4. Sliding Window Entropy Calculation
  const winSize = Math.max(16, Math.floor(inLen / 50));
  const step = Math.max(4, Math.floor(winSize / 4));
  const outCap = 512;
  const outOffset = inOffset + inLen + 64;

  const count = wasmInstance.exports.spinel_sliding_window(
    inOffset, inLen, winSize, step, outOffset, outCap
  );

  const f64View = new Float64Array(wasmInstance.exports.memory.buffer, outOffset, count);
  drawGraph(Array.from(f64View));
}

function drawGraph(points) {
  const canvas = document.getElementById("entropy-canvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Draw background grid lines
  ctx.strokeStyle = "#16202e";
  ctx.lineWidth = 1;
  for (let y = 0; y <= 8; y += 2) {
    const py = h - (y / 8.0) * (h - 20) - 10;
    ctx.beginPath();
    ctx.moveTo(0, py);
    ctx.lineTo(w, py);
    ctx.stroke();

    ctx.fillStyle = "#526072";
    ctx.font = "10px monospace";
    ctx.fillText(`${y}.0`, 10, py - 4);
  }

  // Draw threshold line at 7.2
  const threshY = h - (7.2 / 8.0) * (h - 20) - 10;
  ctx.strokeStyle = "rgba(248, 81, 73, 0.4)";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(0, threshY);
  ctx.lineTo(w, threshY);
  ctx.stroke();
  ctx.setLineDash([]);

  if (points.length < 2) return;

  // Draw entropy plot
  ctx.strokeStyle = "#58a6ff";
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let i = 0; i < points.length; i++) {
    const x = (i / (points.length - 1)) * (w - 40) + 20;
    const y = h - (points[i] / 8.0) * (h - 20) - 10;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Gradient fill under plot
  ctx.lineTo((w - 40) + 20, h);
  ctx.lineTo(20, h);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "rgba(88, 166, 255, 0.2)");
  grad.addColorStop(1, "rgba(88, 166, 255, 0.0)");
  ctx.fillStyle = grad;
  ctx.fill();
}

function loadSample(key) {
  let buf;
  if (key === "elf") {
    // 0x7F 'E' 'L' 'F' followed by code
    buf = new Uint8Array(512);
    buf.set([0x7f, 0x45, 0x4c, 0x46, 0x02, 0x01, 0x01, 0x00]);
    for (let i = 8; i < 512; i++) buf[i] = (i * 37) % 256;
  } else if (key === "packed") {
    // High entropy pseudorandom data
    buf = new Uint8Array(1024);
    for (let i = 0; i < 1024; i++) buf[i] = Math.floor(Math.random() * 256);
  } else if (key === "text") {
    // Plain English string repeated
    const str = "Aether Systems & Research Lab: High-assurance zero-dependency developer toolchains. ";
    const enc = new TextEncoder().encode(str.repeat(10));
    buf = enc;
  } else {
    // Mixed binary: text header, code section, encrypted payload
    buf = new Uint8Array(1200);
    // Low entropy header
    buf.fill(0x20, 0, 300);
    // Medium entropy native code
    for (let i = 300; i < 800; i++) buf[i] = (i * 17) % 128;
    // High entropy encrypted blob
    for (let i = 800; i < 1200; i++) buf[i] = Math.floor(Math.random() * 256);
  }
  analyzeBuffer(buf);
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    analyzeBuffer(new Uint8Array(evt.target.result));
  };
  reader.readAsArrayBuffer(file);
}

window.addEventListener("DOMContentLoaded", init);

// Bind controls here: the page CSP (script-src 'self') blocks inline event handlers.
document.querySelectorAll("[data-call]").forEach((el) => {
  el.addEventListener(el.dataset.event || "click", (e) => {
    const fn = window[el.dataset.call];
    if (typeof fn !== "function") return;
    const args = JSON.parse(el.dataset.args || "[]").map((a) => (a === "$event" ? e : a));
    fn(...args);
  });
});
