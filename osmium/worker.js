import init, { compress, decompress } from './osmium.js';

const ready = init({ module_or_path: new URL('./osmium_bg.wasm', import.meta.url) });

self.onmessage = async ({ data }) => {
  try {
    await ready;
    const input = new Uint8Array(data.bytes);
    const t0 = performance.now();
    if (data.op === 'compress') {
      const out = compress(input);
      const t1 = performance.now();
      const back = decompress(out); // verify the round trip before offering the file
      const t2 = performance.now();
      const same = back.length === input.length && back.every((b, i) => b === input[i]);
      self.postMessage({ ok: true, op: 'compress', out, same, ms: t1 - t0, msBack: t2 - t1 }, [out.buffer]);
    } else {
      const out = decompress(input);
      self.postMessage({ ok: true, op: 'decompress', out, ms: performance.now() - t0 }, [out.buffer]);
    }
  } catch (e) {
    self.postMessage({ ok: false, error: e && e.message ? e.message : String(e) });
  }
};
