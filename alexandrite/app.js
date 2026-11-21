(async function() {
  'use strict';

  let wasmInstance = null;
  let wasmMemory = null;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const ERROR_NAMES = {
    0: 'None',
    1: 'BufferOverflow',
    2: 'UnclosedGroup',
    3: 'UnmatchedClosingParen',
    4: 'UnclosedCharClass',
    5: 'InvalidCharRange',
    6: 'TrailingBackslash',
    7: 'InvalidHexEscape',
    8: 'InvalidQuantifier',
    9: 'InvalidRepetitionBounds',
    10: 'RepetitionBoundTooLarge',
    11: 'NestingTooDeep',
    12: 'UnsupportedAnchor',
    13: 'InvalidInlineFlag',
    14: 'NfaStateLimitExceeded',
    15: 'DfaStateLimitExceeded'
  };

  async function initWasm() {
    try {
      const response = await fetch('alexandrite.wasm');
      const bytes = await response.arrayBuffer();
      const results = await WebAssembly.instantiate(bytes, {
        env: {}
      });
      wasmInstance = results.instance;
      wasmMemory = wasmInstance.exports.memory;
      document.getElementById('wasm-status').textContent = 'WebAssembly Ready (16 KB freestanding v0.2.0)';
      document.getElementById('wasm-status').className = 'status-pill good';
      runCompile();
    } catch (err) {
      document.getElementById('wasm-status').textContent = 'WASM Load Failed: ' + err.message;
      document.getElementById('wasm-status').className = 'status-pill bad';
    }
  }

  function writeBytesToBuffer(bytes) {
    const bufPtr = wasmInstance.exports.alexandrite_get_buffer();
    const cap = wasmInstance.exports.alexandrite_get_buffer_capacity
      ? wasmInstance.exports.alexandrite_get_buffer_capacity()
      : 65536;
    const len = Math.min(bytes.length, cap);
    const memView = new Uint8Array(wasmMemory.buffer, bufPtr, len);
    memView.set(bytes.subarray(0, len));
    return len;
  }

  function getCompileFlags() {
    let flags = 0;
    const ci = document.getElementById('flag-ci');
    const dotall = document.getElementById('flag-dotall');
    const min = document.getElementById('flag-minimize');
    if (ci && ci.checked) flags |= 0x1;
    if (dotall && dotall.checked) flags |= 0x2;
    if (min && !min.checked) flags |= 0x4; // bit 2 disables minimization
    return flags;
  }

  function runCompile() {
    if (!wasmInstance) return;
    const pattern = document.getElementById('pattern-input').value;
    const len = writeBytesToBuffer(encoder.encode(pattern));
    const flags = getCompileFlags();

    const t0 = performance.now();
    const stateCount = wasmInstance.exports.alexandrite_compile_flags
      ? wasmInstance.exports.alexandrite_compile_flags(len, flags)
      : wasmInstance.exports.alexandrite_compile(len);
    const compileTime = (performance.now() - t0).toFixed(3);

    const errCode = wasmInstance.exports.alexandrite_get_last_error
      ? wasmInstance.exports.alexandrite_get_last_error()
      : 0;

    if (stateCount === 0 && errCode !== 0) {
      document.getElementById('metric-states').textContent = 'Error: ' + (ERROR_NAMES[errCode] || errCode);
      document.getElementById('metric-equiv').textContent = '-';
      document.getElementById('metric-language').textContent = 'Invalid Pattern';
      document.getElementById('metric-compile-time').textContent = compileTime + ' ms';
      renderTransitions(0);
      return;
    }

    const equivCount = wasmInstance.exports.alexandrite_get_equiv_classes
      ? wasmInstance.exports.alexandrite_get_equiv_classes()
      : '-';
    const isEmpty = wasmInstance.exports.alexandrite_is_empty_language
      ? wasmInstance.exports.alexandrite_is_empty_language() === 1
      : false;
    const isFinite = wasmInstance.exports.alexandrite_is_finite_language
      ? wasmInstance.exports.alexandrite_is_finite_language() === 1
      : false;

    document.getElementById('metric-states').textContent = stateCount;
    document.getElementById('metric-equiv').textContent = equivCount + ' / 256 bytes';
    document.getElementById('metric-language').textContent = isEmpty ? 'Empty' : (isFinite ? 'Finite' : 'Infinite (Kleene)');
    document.getElementById('metric-compile-time').textContent = compileTime + ' ms';
    document.getElementById('metric-backtracking').textContent = '0 (Guaranteed O(n))';

    renderTransitions(stateCount);
    runMatch();
  }

  function runMatch() {
    if (!wasmInstance) return;
    const input = document.getElementById('sample-input').value;
    const inputBytes = encoder.encode(input);
    const len = writeBytesToBuffer(inputBytes);

    const t0 = performance.now();
    const isMatch = wasmInstance.exports.alexandrite_matches(len) === 1;
    const startSpan = wasmInstance.exports.alexandrite_find_start(len);
    const endSpan = wasmInstance.exports.alexandrite_find_end(len);
    const scanCount = wasmInstance.exports.alexandrite_scan_count
      ? wasmInstance.exports.alexandrite_scan_count(len)
      : (startSpan >= 0 ? 1 : 0);

    // Collect non-overlapping spans via alexandrite_find_from + alexandrite_last_match_end
    const spans = [];
    if (wasmInstance.exports.alexandrite_find_from && wasmInstance.exports.alexandrite_last_match_end) {
      let offset = 0;
      while (offset <= len && spans.length < 64) {
        const s = wasmInstance.exports.alexandrite_find_from(len, offset);
        const e = wasmInstance.exports.alexandrite_last_match_end();
        if (s < 0 || e < s) break;
        spans.push([s, e]);
        offset = e > s ? e : s + 1;
      }
    } else if (startSpan >= 0 && endSpan > startSpan) {
      spans.push([startSpan, endSpan]);
    }
    const matchTime = (performance.now() - t0).toFixed(3);

    const matchBadge = document.getElementById('match-result');
    if (isMatch) {
      matchBadge.textContent = 'EXACT FULL MATCH';
      matchBadge.className = 'status-pill good';
    } else if (spans.length > 0) {
      matchBadge.textContent = `${spans.length} SUBSTRING MATCH${spans.length > 1 ? 'ES' : ''}`;
      matchBadge.className = 'status-pill good';
    } else {
      matchBadge.textContent = 'NO MATCH';
      matchBadge.className = 'status-pill bad';
    }

    const scanCountEl = document.getElementById('metric-scan-count');
    if (scanCountEl) scanCountEl.textContent = String(scanCount);

    const previewDiv = document.getElementById('span-preview');
    if (spans.length > 0) {
      document.getElementById('metric-span').textContent = `[${spans[0][0]}..${spans[0][1]}]`;
      let html = '';
      let cursor = 0;
      for (const [s, e] of spans) {
        if (s > cursor) {
          html += escapeHtml(decoder.decode(inputBytes.subarray(cursor, s)));
        }
        html += `<span class="highlighted-match">${escapeHtml(decoder.decode(inputBytes.subarray(s, e)))}</span>`;
        cursor = e;
      }
      if (cursor < len) {
        html += escapeHtml(decoder.decode(inputBytes.subarray(cursor, len)));
      }
      previewDiv.innerHTML = html;
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
      const sampleBytes = [
        48, 49, 57, // '0', '1', '9'
        65, 71, 80, 90, // 'A', 'G', 'P', 'Z'
        97, 98, 120, 122, // 'a', 'b', 'x', 'z'
        45, 46, 58, 95 // '-', '.', ':', '_'
      ];

      for (const b of sampleBytes) {
        const nextState = wasmInstance.exports.alexandrite_get_transition(s, b);
        if (nextState !== 0) {
          transitionCount++;
          if (transitionCount <= 14) {
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
  ['flag-ci', 'flag-dotall', 'flag-minimize'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', runCompile);
  });

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
