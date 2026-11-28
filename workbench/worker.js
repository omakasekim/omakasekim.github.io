// Runs the WebAssembly module off the main thread, so a long proof never freezes the page.
"use strict";

let exports_ = null;

async function instance() {
  if (exports_) return exports_;
  const response = await fetch("zkhypervm.wasm");
  let memory = null;
  // The prover's blinding factors: 32 bytes of browser entropy keys its random generator.
  const imports = {
    env: {
      zkhv_random_fill(pointer, length) {
        try {
          crypto.getRandomValues(new Uint8Array(memory.buffer, pointer, length));
          return 0;
        } catch {
          return 1;
        }
      },
    },
  };
  const { instance } = await WebAssembly.instantiate(await response.arrayBuffer(), imports);
  memory = instance.exports.memory;
  exports_ = instance.exports;
  return exports_;
}

function copyIn(ex, bytes) {
  const pointer = ex.zkhv_alloc(bytes.length);
  new Uint8Array(ex.memory.buffer, pointer, bytes.length).set(bytes);
  return pointer;
}

function readJson(ex, packed) {
  const value = BigInt.asUintN(64, packed);
  const pointer = Number(value >> 32n);
  const length = Number(value & 0xffffffffn);
  const text = new TextDecoder().decode(new Uint8Array(ex.memory.buffer, pointer, length));
  ex.zkhv_free(pointer, length);
  return JSON.parse(text);
}

self.onmessage = async ({ data }) => {
  try {
    const ex = await instance();
    let result;
    if (data.kind === "inspect") {
      const p = copyIn(ex, data.bytes);
      result = readJson(ex, ex.zkhv_inspect(p, data.bytes.length, data.architecture, 50000));
      ex.zkhv_free(p, data.bytes.length);
    } else if (data.kind === "prove") {
      const source = new TextEncoder().encode(data.source);
      const p = copyIn(ex, source);
      result = readJson(ex, ex.zkhv_prove(p, source.length, data.iterations));
      ex.zkhv_free(p, source.length);
    } else if (data.kind === "prove_trace") {
      const source = new TextEncoder().encode(data.source);
      const p = copyIn(ex, source);
      result = readJson(ex, ex.zkhv_prove_trace(p, source.length, data.iterations));
      ex.zkhv_free(p, source.length);
    } else if (data.kind === "verify_trace") {
      const payload = new TextEncoder().encode(
        typeof data.trace === "string" ? data.trace : JSON.stringify(data.trace)
      );
      const p = copyIn(ex, payload);
      result = readJson(ex, ex.zkhv_verify_trace(p, payload.length));
      ex.zkhv_free(p, payload.length);
    } else if (data.kind === "attest_trace") {
      const payload = new TextEncoder().encode(
        typeof data.trace === "string" ? data.trace : JSON.stringify(data.trace)
      );
      const p = copyIn(ex, payload);
      result = readJson(ex, ex.zkhv_attest_trace(p, payload.length));
      ex.zkhv_free(p, payload.length);
    } else if (data.kind === "audit") {
      result = readJson(ex, ex.zkhv_audit_invariants());
    } else if (data.kind === "audit_sarif") {
      result = readJson(ex, ex.zkhv_audit_sarif());
    } else if (data.kind === "version") {
      result = readJson(ex, ex.zkhv_version());
    } else if (data.kind === "circom") {
      const a = copyIn(ex, data.r1cs);
      const b = copyIn(ex, data.witness);
      result = readJson(ex, ex.zkhv_check_circom(a, data.r1cs.length, b, data.witness.length));
      ex.zkhv_free(a, data.r1cs.length);
      ex.zkhv_free(b, data.witness.length);
    } else if (data.kind === "circom_prove") {
      const a = copyIn(ex, data.r1cs);
      const b = copyIn(ex, data.witness);
      result = readJson(ex, ex.zkhv_prove_circom(a, data.r1cs.length, b, data.witness.length));
      ex.zkhv_free(a, data.r1cs.length);
      ex.zkhv_free(b, data.witness.length);
    } else if (data.kind === "circom_verify") {
      const proof = new TextEncoder().encode(
        typeof data.proof === "string" ? data.proof : JSON.stringify(data.proof)
      );
      const a = copyIn(ex, data.r1cs);
      const b = copyIn(ex, proof);
      result = readJson(ex, ex.zkhv_verify_circom(a, data.r1cs.length, b, proof.length));
      ex.zkhv_free(a, data.r1cs.length);
      ex.zkhv_free(b, proof.length);
    } else {
      result = { error: `unknown worker request kind: ${data.kind}` };
    }
    self.postMessage({ id: data.id, result });
  } catch (e) {
    // A trap leaves the instance unusable, so the next request starts a fresh one.
    exports_ = null;
    self.postMessage({ id: data.id, result: { error: `the analysis stopped: ${e.message}` } });
  }
};
