let wasmInstance = null;
let isPaused = false;
let stepCount = 0;
let lastFpsTime = performance.now();
let frameCount = 0;
let isDrawing = false;

const WIDTH = 160;
const HEIGHT = 80;

async function init() {
  const statusEl = document.getElementById("wasm-status");
  try {
    const res = await fetch("halite.wasm");
    const bytes = await res.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {
      env: {}
    });
    wasmInstance = instance;
    wasmInstance.exports.halite_init();

    statusEl.textContent = "WASM Live (D2Q9 LBM)";
    statusEl.className = "status-pill good";

    setupCanvasEvents();
    loadPreset("cylinder");
    requestAnimationFrame(renderLoop);
  } catch (err) {
    statusEl.textContent = "WASM Failed: " + err.message;
    statusEl.className = "status-pill bad";
  }
}

function renderLoop(now) {
  if (wasmInstance && !isPaused) {
    // Run 2 LBM collision-streaming steps per visual frame for smooth fluid dynamics
    wasmInstance.exports.halite_step();
    wasmInstance.exports.halite_step();
    stepCount += 2;
    wasmInstance.exports.halite_render();

    // Copy RGBA from WASM linear memory
    const rgbaPtr = wasmInstance.exports.halite_get_rgba_ptr();
    const rgbaBytes = new Uint8ClampedArray(wasmInstance.exports.memory.buffer, rgbaPtr, WIDTH * HEIGHT * 4);

    const canvas = document.getElementById("fluid-canvas");
    const ctx = canvas.getContext("2d");
    const imgData = new ImageData(rgbaBytes, WIDTH, HEIGHT);
    ctx.putImageData(imgData, 0, 0);

    // FPS update
    frameCount++;
    if (now - lastFpsTime >= 1000) {
      document.getElementById("val-fps").textContent = `${frameCount} FPS`;
      document.getElementById("val-steps").textContent = stepCount.toLocaleString();
      frameCount = 0;
      lastFpsTime = now;
    }
  }
  requestAnimationFrame(renderLoop);
}

function togglePause() {
  isPaused = !isPaused;
  const btn = document.getElementById("btn-pause");
  btn.textContent = isPaused ? "Resume Simulation" : "Pause Simulation";
  if (isPaused) {
    btn.classList.add("btn-outline");
  } else {
    btn.classList.remove("btn-outline");
  }
}

function resetFluid() {
  if (!wasmInstance) return;
  wasmInstance.exports.halite_reset();
  stepCount = 0;
  document.getElementById("val-steps").textContent = "0";
}

function clearObstacles() {
  if (!wasmInstance) return;
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      wasmInstance.exports.halite_set_obstacle(x, y, 0);
    }
  }
}

function loadPreset(key) {
  if (!wasmInstance) return;
  clearObstacles();
  if (key === "cylinder") {
    // Cylinder obstacle at x=35, y=40, radius=8
    const cx = 35, cy = 40, r = 8;
    for (let y = cy - r; y <= cy + r; y++) {
      for (let x = cx - r; x <= cx + r; x++) {
        if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r) {
          wasmInstance.exports.halite_set_obstacle(x, y, 1);
        }
      }
    }
  } else if (key === "airfoil") {
    // Wedge / inclined plate
    for (let i = 0; i < 20; i++) {
      wasmInstance.exports.halite_set_obstacle(30 + i, 35 + Math.floor(i / 3), 1);
      wasmInstance.exports.halite_set_obstacle(30 + i, 36 + Math.floor(i / 3), 1);
    }
  } else if (key === "slits") {
    // Double slit barrier at x=40
    for (let y = 0; y < HEIGHT; y++) {
      if ((y >= 0 && y < 25) || (y >= 35 && y < 45) || (y >= 55 && y < HEIGHT)) {
        wasmInstance.exports.halite_set_obstacle(40, y, 1);
        wasmInstance.exports.halite_set_obstacle(41, y, 1);
      }
    }
  }
}

function setupCanvasEvents() {
  const canvas = document.getElementById("fluid-canvas");
  function paint(e) {
    if (!wasmInstance) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = WIDTH / rect.width;
    const scaleY = HEIGHT / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
      // Paint 3x3 circle
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < WIDTH && ny >= 0 && ny < HEIGHT) {
            wasmInstance.exports.halite_set_obstacle(nx, ny, 1);
          }
        }
      }
    }
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    paint(e);
  });
  window.addEventListener("mousemove", (e) => {
    if (isDrawing) paint(e);
  });
  window.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

window.addEventListener("DOMContentLoaded", init);

// Bind controls here: the page CSP (script-src 'self') blocks inline onclick handlers.
document.querySelectorAll("[data-action]").forEach((el) => {
  const fn = { togglePause, resetFluid, clearObstacles }[el.dataset.action];
  if (fn) el.addEventListener("click", fn);
});
document.querySelectorAll("[data-preset]").forEach((el) => {
  el.addEventListener("click", () => loadPreset(el.dataset.preset));
});
