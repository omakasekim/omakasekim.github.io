import init, { check } from './rigor.js';

const ready = init({ module_or_path: new URL('./rigor_bg.wasm', import.meta.url) });

self.onmessage = async ({ data }) => {
  try {
    await ready;
    const t0 = performance.now();
    const result = JSON.parse(check(data.text));
    self.postMessage({ id: data.id, result, ms: performance.now() - t0 });
  } catch (e) {
    self.postMessage({ id: data.id, result: { ok: false, error: 'the checker stopped: ' + (e && e.message ? e.message : e) } });
  }
};
