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

// Sample programs, assembled in the browser by the WASM assembler
const PROGRAMS = {
  "sum": "# Sum 10 + 9 + ... + 1 into a0 (55)\n        li   t0, 10\n        li   a0, 0\nloop:   add  a0, a0, t0\n        addi t0, t0, -1\n        bnez t0, loop\n        ebreak\n",
  "fib": "# Fibonacci: a0 = fib(10) = 55\n        li   t0, 10\n        li   a1, 0\n        li   a2, 1\nloop:   add  a3, a1, a2\n        mv   a1, a2\n        mv   a2, a3\n        addi t0, t0, -1\n        bnez t0, loop\n        mv   a0, a1\n        ebreak\n",
  "mem": "# Store, reload, then use the loaded value at once (load-use stall)\n        li   t0, 0x200\n        li   t1, 42\n        sw   t1, 0(t0)\n        lw   a0, 0(t0)\n        addi a0, a0, 1\n        ebreak\n",
  "sort": "# Bubble sort of twelve signed words, then sum them with a multiply-accumulate.\n# Exercises loads, stores, branches, RV32M and the cycle counter.\n\n        la   s0, data\n        li   s1, 12              # element count\nouter:  addi s1, s1, -1\n        blez s1, sum\n        mv   t0, s0\n        mv   t1, s1\ninner:  lw   t2, 0(t0)\n        lw   t3, 4(t0)           # load-use stall on the next line\n        ble  t2, t3, noswap\n        sw   t3, 0(t0)\n        sw   t2, 4(t0)\nnoswap: addi t0, t0, 4\n        addi t1, t1, -1\n        bnez t1, inner\n        j    outer\n\nsum:    mv   t0, s0\n        li   t1, 12\n        li   a0, 0\n        li   t4, 3\nacc:    lw   t2, 0(t0)\n        mul  t2, t2, t4          # a0 += 3 * data[i]\n        add  a0, a0, t2\n        addi t0, t0, 4\n        addi t1, t1, -1\n        bnez t1, acc\n        rdcycle a1               # cycles spent so far\n        ecall\n\n        .align 2\ndata:   .word 9, -3, 7, 0, 12, 5, -8, 1, 4, 4, 100, -100\n"
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

    const v = wasmInstance.exports.zircon_get_version();
    statusEl.textContent = `WASM Live (RV32IM v${v >> 16}.${(v >> 8) & 255}.${v & 255})`;
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

  const ex = wasmInstance.exports;
  document.getElementById("val-next").textContent = halted ? "-" : nextInstruction(pc);
  const trap = ex.zircon_get_trap_code();
  document.getElementById("val-trap").textContent = trap ? (TRAPS[trap] || "trap " + trap) + " at 0x" + (ex.zircon_get_trap_value() >>> 0).toString(16) : (halted ? "halted" : "running");
  document.getElementById("val-stalls").textContent = ex.zircon_get_stat(0);
  document.getElementById("val-flush").textContent = ex.zircon_get_stat(1);
  document.getElementById("val-fwd").textContent = ex.zircon_get_stat(2);
  document.getElementById("val-cpi").textContent = inst ? (cycles / inst).toFixed(2) : "-";

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
  const src = PROGRAMS[key] || PROGRAMS.sum;
  document.getElementById("asm-src").value = src;
  assembleSource();
}

const TRAPS = { 1: "PC out of bounds", 2: "illegal instruction", 3: "load/store access fault", 4: "misaligned instruction fetch", 0x73: "ecall", 0x74: "ebreak" };

function assembleSource() {
  if (!wasmInstance) return;
  const ex = wasmInstance.exports;
  if (isRunning) toggleRun();
  const bytes = new TextEncoder().encode(document.getElementById("asm-src").value);
  const out = document.getElementById("asm-status");
  if (bytes.length > ex.zircon_get_text_capacity()) {
    out.textContent = "Source is larger than the 16 KiB text buffer";
    out.style.color = "var(--bad)";
    return;
  }
  ex.zircon_reset();
  new Uint8Array(ex.memory.buffer, ex.zircon_get_text_ptr(), bytes.length).set(bytes);
  const rc = ex.zircon_assemble(bytes.length, 0);
  if (rc < 0) {
    out.textContent = readText(-rc);
    out.style.color = "var(--bad)";
  } else {
    out.textContent = `Assembled ${rc} bytes at 0x00000000`;
    out.style.color = "var(--good)";
  }
  prevRegs.fill(0);
  updateUI();
}

function readText(len) {
  const ex = wasmInstance.exports;
  return new TextDecoder().decode(new Uint8Array(ex.memory.buffer, ex.zircon_get_text_ptr(), len));
}

function nextInstruction(pc) {
  const ex = wasmInstance.exports;
  if (pc + 4 > ex.zircon_get_ram_size()) return "-";
  const word = new DataView(ex.memory.buffer, ex.zircon_get_ram_ptr() + pc, 4).getUint32(0, true);
  return readText(ex.zircon_disasm(word, pc));
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
  assembleSource();
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
