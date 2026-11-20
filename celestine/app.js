let wasmInstance = null;
let audioCtx = null;
let scriptNode = null;
let isAudioEnabled = false;

const NOTES = [
  { name: "C4", midi: 60, black: false },
  { name: "C#4", midi: 61, black: true, left: "9%" },
  { name: "D4", midi: 62, black: false },
  { name: "D#4", midi: 63, black: true, left: "23%" },
  { name: "E4", midi: 64, black: false },
  { name: "F4", midi: 65, black: false },
  { name: "F#4", midi: 66, black: true, left: "51.5%" },
  { name: "G4", midi: 67, black: false },
  { name: "G#4", midi: 68, black: true, left: "65.5%" },
  { name: "A4", midi: 69, black: false },
  { name: "A#4", midi: 70, black: true, left: "79.5%" },
  { name: "B4", midi: 71, black: false },
  { name: "C5", midi: 72, black: false }
];

async function init() {
  const statusEl = document.getElementById("wasm-status");
  try {
    const res = await fetch("celestine.wasm");
    const bytes = await res.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {
      env: {}
    });
    wasmInstance = instance;
    wasmInstance.exports.celestine_init(44100.0);

    statusEl.textContent = "WASM Live (PolyBLEP DSP)";
    statusEl.className = "status-pill good";

    renderPiano();
    renderScope();
  } catch (err) {
    statusEl.textContent = "WASM Failed: " + err.message;
    statusEl.className = "status-pill bad";
  }
}

function renderPiano() {
  const container = document.getElementById("piano");
  container.innerHTML = "";

  NOTES.forEach((note) => {
    const key = document.createElement("div");
    if (note.black) {
      key.className = "key-black";
      key.style.left = note.left;
    } else {
      key.className = "key-white";
    }
    key.textContent = note.name;

    const startNote = (e) => {
      e.preventDefault();
      playNote(note.midi, note.name);
      key.classList.add("active");
    };
    const endNote = (e) => {
      e.preventDefault();
      stopNote();
      key.classList.remove("active");
    };

    key.addEventListener("mousedown", startNote);
    key.addEventListener("mouseup", endNote);
    key.addEventListener("touchstart", startNote, { passive: false });
    key.addEventListener("touchend", endNote, { passive: false });

    container.appendChild(key);
  });
}

function playNote(midi, name) {
  if (!wasmInstance) return;
  if (!isAudioEnabled) toggleAudio();
  wasmInstance.exports.celestine_note_on(midi, 0.85);
  document.getElementById("val-note").textContent = `${name} (MIDI ${midi})`;
}

function stopNote() {
  if (!wasmInstance) return;
  wasmInstance.exports.celestine_note_off();
  document.getElementById("val-note").textContent = "None";
}

function updateParam(id, val) {
  if (!wasmInstance) return;
  wasmInstance.exports.celestine_set_param(id, parseFloat(val));
}

function setPreset(name) {
  if (name === "lead") {
    // Sawtooth + Sawtooth + high cutoff
    updateParam(1, 2); // Saw
    updateParam(2, 2); // Saw
    updateParam(3, 0.2); // FM
    updateParam(4, 2500); // Cutoff
    updateParam(5, 3.2); // Q
    document.getElementById("param-cutoff").value = 2500;
    document.getElementById("txt-cutoff").textContent = "2500 Hz";
  } else if (name === "bass") {
    // Square + Saw + low cutoff
    updateParam(1, 3); // Square
    updateParam(2, 2); // Saw
    updateParam(3, 0.6); // FM
    updateParam(4, 600); // Cutoff
    updateParam(5, 5.0); // Q
    document.getElementById("param-cutoff").value = 600;
    document.getElementById("txt-cutoff").textContent = "600 Hz";
  } else if (name === "bell") {
    // Sine + Sine + high FM
    updateParam(1, 0); // Sine
    updateParam(2, 0); // Sine
    updateParam(3, 1.4); // FM
    updateParam(4, 4000); // Cutoff
    updateParam(5, 1.2); // Q
    document.getElementById("param-cutoff").value = 4000;
    document.getElementById("txt-cutoff").textContent = "4000 Hz";
  }
}

function toggleAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 44100 });
    const bufferSize = 1024;
    scriptNode = audioCtx.createScriptProcessor(bufferSize, 0, 1);

    scriptNode.onaudioprocess = (e) => {
      if (!wasmInstance) return;
      const output = e.outputBuffer.getChannelData(0);
      const ptr = wasmInstance.exports.celestine_render(bufferSize);
      const wasmFloats = new Float32Array(wasmInstance.exports.memory.buffer, ptr, bufferSize);
      output.set(wasmFloats);
    };

    scriptNode.connect(audioCtx.destination);
    isAudioEnabled = true;

    const btn = document.getElementById("btn-audio");
    btn.textContent = "Audio Active (WebAudio 44.1kHz)";
    btn.classList.add("btn-outline");
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function renderScope() {
  const canvas = document.getElementById("scope-canvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw center line
    ctx.strokeStyle = "#16202e";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    if (wasmInstance) {
      // 1. Draw Time-Domain Waveform
      const bufPtr = wasmInstance.exports.celestine_get_buffer_ptr();
      const bufSize = wasmInstance.exports.celestine_get_buffer_size();
      const wave = new Float32Array(wasmInstance.exports.memory.buffer, bufPtr, Math.min(512, bufSize));

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < wave.length; i++) {
        const x = (i / wave.length) * w;
        const y = h / 2 - wave[i] * (h / 2.5);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 2. Draw FFT Spectrum
      const specPtr = wasmInstance.exports.celestine_get_spectrum();
      const specSize = wasmInstance.exports.celestine_get_spectrum_size();
      const spec = new Float32Array(wasmInstance.exports.memory.buffer, specPtr, Math.min(128, specSize));

      ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
      const barW = w / spec.length;
      for (let i = 0; i < spec.length; i++) {
        const barH = spec[i] * (h - 20);
        ctx.fillRect(i * barW, h - barH, barW - 1, barH);
      }
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
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
document.querySelectorAll("input[data-param]").forEach((el) => {
  el.addEventListener("input", () => {
    updateParam(Number(el.dataset.param), el.value);
    const label = document.getElementById(el.dataset.label);
    if (!label) return;
    const fmt = el.dataset.fmt;
    label.textContent = fmt === "pct" ? Math.round(el.value * 100) + "%" : fmt === "hz" ? el.value + " Hz" : el.value;
  });
});
