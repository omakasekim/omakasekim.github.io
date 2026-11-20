const ABI_NAMES = [
  "zero", "ra", "sp", "gp", "tp", "t0", "t1", "t2",
  "s0/fp", "s1", "a0", "a1", "a2", "a3", "a4", "a5",
  "a6", "a7", "s2", "s3", "s4", "s5", "s6", "s7",
  "s8", "s9", "s10", "s11", "t3", "t4", "t5", "t6"
];

let wasmInstance = null;
let isRunning = false;
let runInterval = null;
let prevRegs = new Array(32).fill(0);

// Sample compiled RV32I programs
const PROGRAMS = {
  // Sum numbers 1..10 into x2 (result: 55 = 0x37)
  sum: [
    0x93, 0x00, 0xa0, 0x00, // addi x1, x0, 10
    0x13, 0x01, 0x00, 0x00, // addi x2, x0, 0
    0x33, 0x81, 0x11, 0x00, // add  x2, x2, x1
    0x93, 0x80, 0xf0, 0xff, // addi x1, x1, -1
    0xe3, 0x9c, 0x00, 0xfe, // bne  x1, x0, -8
    0x73, 0x00, 0x10, 0x00  // ebreak
  ],
  // Fibonacci sequence
  fib: [
    0x93, 0x00, 0x80, 0x00, // addi x1, x0, 8 (compute 8 iterations)
    0x13, 0x01, 0x00, 0x00, // addi x2, x0, 0 (fib 0)
    0x93, 0x01, 0x10, 0x00, // addi x3, x0, 1 (fib 1)
    0x33, 0x85, 0x31, 0x00, // add  x10, x3, x2
    0x13, 0x01, 0x01, 0x00, // addi x2, x3, 0
    0x13, 0x01, 0x05, 0x00, // addi x3, x10, 0
    0x93, 0x80, 0xf0, 0xff, // addi x1, x1, -1
    0xe3, 0x9c, 0x00, 0xfe, // bne  x1, x0, -16
    0x73, 0x00, 0x10, 0x00  // ebreak
  ],
  // Memory store and reload
  mem: [
    0x93, 0x00, 0x40, 0x06, // addi x1, x0, 100
    0x13, 0x01, 0xa0, 0x02, // addi x2, x0, 42
    0x23, 0x20, 0x20, 0x00, // sw   x2, 0(x1)
    0x83, 0x21, 0x00, 0x00, // lw   x3, 0(x1)
    0x73, 0x00, 0x10, 0x00  // ebreak
  ]
};

async function init() {
  const statusEl = document.getElementById("wasm-status");
  try {
    const res = await fetch("zircon.wasm");
    const bytes = await res.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {
      env: {}
    });
    wasmInstance = instance;
    wasmInstance.exports.zircon_init();

    statusEl.textContent = "WASM Live (RV32I)";
    statusEl.className = "status-pill good";

    renderRegGrid();
    loadProgram("sum");
  } catch (err) {
    statusEl.textContent = "WASM Failed: " + err.message;
    statusEl.className = "status-pill bad";
  }
}

function renderRegGrid() {
  const grid = document.getElementById("reg-grid");
  grid.innerHTML = "";
  for (let i = 0; i < 32; i++) {
    const cell = document.createElement("div");
    cell.className = "reg-cell";
    cell.id = `reg-cell-${i}`;
    cell.innerHTML = `
      <span class="reg-name">x${i} (${ABI_NAMES[i]})</span>
      <span class="reg-val" id="reg-val-${i}">0x00000000</span>
    `;
    grid.appendChild(cell);
  }
}

function updateUI() {
  if (!wasmInstance) return;
  const pc = wasmInstance.exports.zircon_get_pc();
  const inst = wasmInstance.exports.zircon_get_inst_count();
  const cycles = wasmInstance.exports.zircon_get_cycles();
  const halted = wasmInstance.exports.zircon_is_halted();

  document.getElementById("val-pc").textContent = "0x" + pc.toString(16).padStart(8, "0");
  document.getElementById("val-inst").textContent = inst.toString();
  document.getElementById("val-cycles").textContent = cycles.toString();

  for (let i = 0; i < 32; i++) {
    const val = wasmInstance.exports.zircon_get_reg(i) >>> 0;
    const valEl = document.getElementById(`reg-val-${i}`);
    const cellEl = document.getElementById(`reg-cell-${i}`);
    valEl.textContent = "0x" + val.toString(16).padStart(8, "0");

    if (val !== prevRegs[i]) {
      cellEl.classList.add("reg-changed");
    } else {
      cellEl.classList.remove("reg-changed");
    }
    prevRegs[i] = val;
  }

  if (halted && isRunning) {
    toggleRun();
  }
}

function loadProgram(key) {
  if (!wasmInstance) return;
  wasmInstance.exports.zircon_reset();
  const prog = PROGRAMS[key] || PROGRAMS.sum;
  for (let i = 0; i < prog.length; i++) {
    wasmInstance.exports.zircon_load_byte(i, prog[i]);
  }
  prevRegs.fill(0);
  updateUI();
}

function stepForward() {
  if (!wasmInstance) return;
  wasmInstance.exports.zircon_step();
  updateUI();
}

function stepBack() {
  if (!wasmInstance) return;
  wasmInstance.exports.zircon_step_back();
  updateUI();
}

function resetCPU() {
  if (!wasmInstance) return;
  if (isRunning) toggleRun();
  wasmInstance.exports.zircon_reset();
  prevRegs.fill(0);
  updateUI();
}

function toggleRun() {
  const btn = document.getElementById("btn-run");
  if (isRunning) {
    clearInterval(runInterval);
    isRunning = false;
    btn.textContent = "Auto Run";
    btn.classList.add("btn-outline");
  } else {
    isRunning = true;
    btn.textContent = "Pause";
    btn.classList.remove("btn-outline");
    runInterval = setInterval(() => {
      if (!wasmInstance || wasmInstance.exports.zircon_is_halted()) {
        toggleRun();
        return;
      }
      wasmInstance.exports.zircon_step();
      updateUI();
    }, 120);
  }
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
