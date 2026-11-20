(async function() {
  'use strict';

  let wasmInstance = null;
  let wasmMemory = null;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function initWasm() {
    try {
      const response = await fetch('alexandrite.wasm');
      const bytes = await response.arrayBuffer();
      const results = await WebAssembly.instantiate(bytes, {
        env: {}
      });
      wasmInstance = results.instance;
      wasmMemory = wasmInstance.exports.memory;
      document.getElementById('wasm-status').textContent = 'WebAssembly Ready (< 70 KB freestanding)';
      document.getElementById('wasm-status').className = 'status-pill good';
      runCompile();
    } catch (err) {
      document.getElementById('wasm-status').textContent = 'WASM Load Failed: ' + err.message;
      document.getElementById('wasm-status').className = 'status-pill bad';
    }
  }

  function writeStringToBuffer(str) {
    const encoded = encoder.encode(str);
    const bufPtr = wasmInstance.exports.alexandrite_get_buffer();
    const memView = new Uint8Array(wasmMemory.buffer, bufPtr, encoded.length);
    memView.set(encoded);
    return encoded.length;
  }

  function runCompile() {
    if (!wasmInstance) return;
    const pattern = document.getElementById('pattern-input').value;
    const len = writeStringToBuffer(pattern);

    const t0 = performance.now();
    const stateCount = wasmInstance.exports.alexandrite_compile(len);
    const compileTime = (performance.now() - t0).toFixed(3);

    document.getElementById('metric-states').textContent = stateCount;
    document.getElementById('metric-compile-time').textContent = compileTime + ' ms';
    document.getElementById('metric-backtracking').textContent = '0 (Guaranteed O(n))';

    renderTransitions(stateCount);
    runMatch();
  }

  function runMatch() {
    if (!wasmInstance) return;
    const input = document.getElementById('sample-input').value;
    const len = writeStringToBuffer(input);

    const t0 = performance.now();
    const isMatch = wasmInstance.exports.alexandrite_matches(len) === 1;
    const matchTime = (performance.now() - t0).toFixed(3);

    const startSpan = wasmInstance.exports.alexandrite_find_start(len);
    const endSpan = wasmInstance.exports.alexandrite_find_end(len);

    const matchBadge = document.getElementById('match-result');
    if (isMatch) {
      matchBadge.textContent = 'EXACT MATCH';
      matchBadge.className = 'status-pill good';
    } else {
      matchBadge.textContent = 'NO EXACT MATCH';
      matchBadge.className = 'status-pill bad';
    }

    const previewDiv = document.getElementById('span-preview');
    if (startSpan >= 0 && endSpan > startSpan && startSpan < input.length) {
      document.getElementById('metric-span').textContent = `[${startSpan}..${endSpan}]`;
      const before = escapeHtml(input.slice(0, startSpan));
      const match = escapeHtml(input.slice(startSpan, endSpan));
      const after = escapeHtml(input.slice(endSpan));
      previewDiv.innerHTML = `${before}<span class="highlighted-match">${match}</span>${after}`;
    } else {
      document.getElementById('metric-span').textContent = 'None';
      previewDiv.textContent = input || '(empty)';
    }

    document.getElementById('metric-match-time').textContent = matchTime + ' ms';
  }

  function renderTransitions(stateCount) {
    const tableBody = document.getElementById('transition-table-body');
    tableBody.innerHTML = '';

    const maxShownStates = Math.min(stateCount, 16);
    let transitionCount = 0;

    for (let s = 1; s < maxShownStates; s++) {
      const isAccept = wasmInstance.exports.alexandrite_is_accepting(s) === 1;
      // Sample key ASCII transitions: digits, letters, symbols
      const sampleBytes = [
        48, 49, 57, // '0', '1', '9'
        65, 90,     // 'A', 'Z'
        97, 98, 122,// 'a', 'b', 'z'
        45, 46, 58  // '-', '.', ':'
      ];

      for (const b of sampleBytes) {
        const nextState = wasmInstance.exports.alexandrite_get_transition(s, b);
        if (nextState !== 0) { // Non-dead transition
          transitionCount++;
          if (transitionCount <= 12) {
            const charStr = String.fromCharCode(b);
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${s} ${isAccept ? '(Accept)' : ''}</td><td>'${charStr}' (0x${b.toString(16)})</td><td>State ${nextState}</td>`;
            tableBody.appendChild(tr);
          }
        }
      }
    }

    if (transitionCount === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = '<td colspan="3" style="color: var(--dim)">No active transitions for sample set</td>';
      tableBody.appendChild(tr);
    }
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  window.setPreset = function(pat, sample) {
    document.getElementById('pattern-input').value = pat;
    document.getElementById('sample-input').value = sample;
    runCompile();
  };

  document.getElementById('pattern-input').addEventListener('input', runCompile);
  document.getElementById('sample-input').addEventListener('input', runMatch);

  initWasm();
})();

// Bind controls here: the page CSP (script-src 'self') blocks inline event handlers.
document.querySelectorAll("[data-call]").forEach((el) => {
  el.addEventListener(el.dataset.event || "click", (e) => {
    const fn = window[el.dataset.call];
    if (typeof fn !== "function") return;
    const args = JSON.parse(el.dataset.args || "[]").map((a) => (a === "$event" ? e : a));
    fn(...args);
  });
});
