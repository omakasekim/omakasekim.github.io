// Linear mixed Boolean-arithmetic (MBA) simplifier over 64-bit integers.
//
// A linear MBA is a sum of integer multiples of bitwise functions of the variables. Bitwise functions
// act on every bit position independently, so such an expression is fixed by the per-bit function
// g: {0,1}^n -> Z/2^64. We read g off by evaluating the input with every variable set to 0 or to -1
// (all bits equal), write g in the basis of conjunctions {1, x, y, x&y, ...} with a Moebius
// transform, and print the result. The answer is then checked on random 64-bit inputs; if the input
// is not a linear MBA (for example x*y), the check fails and we say so instead of printing a result.

const MASK = (1n << 64n) - 1n;
const wrap = (v) => v & MASK;
const MAX_VARS = 8;
const MAX_LEN = 4000;

function tokenize(src) {
  const out = [];
  const re = /\s*(?:(0x[0-9a-fA-F]+|\d+)|([A-Za-z_][A-Za-z0-9_]*)|(\S))/y;
  let m;
  while (re.lastIndex < src.length && (m = re.exec(src))) {
    if (m[1] !== undefined) out.push({ t: 'num', v: wrap(BigInt(m[1])) });
    else if (m[2] !== undefined) out.push({ t: 'var', v: m[2] });
    else if ('+-*&|^~()'.includes(m[3])) out.push({ t: m[3] });
    else throw new Error(`unexpected character ${JSON.stringify(m[3])} (allowed: + - * & | ^ ~ and parentheses)`);
  }
  if (re.lastIndex < src.trimEnd().length) throw new Error('could not read the expression');
  return out;
}

// C precedence: unary ~ -, then *, then + -, then &, then ^, then |.
function parse(src) {
  if (src.length > MAX_LEN) throw new Error(`expression longer than ${MAX_LEN} characters`);
  const toks = tokenize(src);
  let i = 0, depth = 0;
  const peek = () => toks[i]?.t;
  const bin = (next, ops) => () => {
    let l = next();
    while (ops.includes(peek())) { const op = toks[i++].t; l = { op, l, r: next() }; }
    return l;
  };
  const unary = () => {
    const t = peek();
    if (t === '~' || t === '-') { i++; if (++depth > 200) throw new Error('too deeply nested'); const a = unary(); depth--; return { op: t === '~' ? 'not' : 'neg', a }; }
    if (t === '+') { i++; return unary(); }
    if (t === 'num' || t === 'var') return toks[i++];
    if (t === '(') {
      i++; if (++depth > 200) throw new Error('too deeply nested');
      const e = or(); depth--;
      if (peek() !== ')') throw new Error('missing )');
      i++; return e;
    }
    throw new Error(t === undefined ? 'expression ends too early' : `unexpected ${t}`);
  };
  const mul = bin(unary, ['*']);
  const add = bin(mul, ['+', '-']);
  const and = bin(add, ['&']);
  const xor = bin(and, ['^']);
  const or = bin(xor, ['|']);
  if (!toks.length) throw new Error('empty expression');
  const e = or();
  if (i !== toks.length) throw new Error(`unexpected ${toks[i].t} after the end of the expression`);
  return e;
}

function evaluate(e, env) {
  switch (e.t ?? e.op) {
    case 'num': return e.v;
    case 'var': return env[e.v];
    case 'not': return wrap(~evaluate(e.a, env));
    case 'neg': return wrap(-evaluate(e.a, env));
    case '+': return wrap(evaluate(e.l, env) + evaluate(e.r, env));
    case '-': return wrap(evaluate(e.l, env) - evaluate(e.r, env));
    case '*': return wrap(evaluate(e.l, env) * evaluate(e.r, env));
    case '&': return evaluate(e.l, env) & evaluate(e.r, env);
    case '|': return evaluate(e.l, env) | evaluate(e.r, env);
    case '^': return evaluate(e.l, env) ^ evaluate(e.r, env);
  }
  throw new Error('bad node');
}

function variables(e, acc = new Set()) {
  if (e.t === 'var') acc.add(e.v);
  for (const k of ['a', 'l', 'r']) if (e[k]) variables(e[k], acc);
  return acc;
}

const signed = (v) => (v >= 1n << 63n ? v - (1n << 64n) : v);
const hexOrDec = (v) => { const s = signed(v); const a = s < 0n ? -s : s; return a > 0xffffn ? '0x' + a.toString(16) : a.toString(); };

// Short names for every bitwise function of two variables (truth table bit v = x + 2y).
function twoVarNames(x, y) {
  return { 0: null, 1: `~(${x} | ${y})`, 2: `${x} & ~${y}`, 3: `~${y}`, 4: `~${x} & ${y}`, 5: `~${x}`, 6: `${x} ^ ${y}`, 7: `~(${x} & ${y})`,
    8: `${x} & ${y}`, 9: `~(${x} ^ ${y})`, 10: x, 11: `${x} | ~${y}`, 12: y, 13: `~${x} | ${y}`, 14: `${x} | ${y}`, 15: '-1' };
}

function render(coef, vars) {
  // coef[S] for subsets S (bitmask), basis AND_S with AND_{} = -1 (all ones).
  const terms = [];
  for (let S = 1; S < coef.length; S++) {
    const c = signed(coef[S]);
    if (c === 0n) continue;
    const names = vars.filter((_, j) => S & (1 << j));
    const atom = names.length === 1 ? names[0] : `(${names.join(' & ')})`;
    terms.push({ c, atom });
  }
  const k = signed(wrap(-coef[0]));
  let s = '';
  for (const { c, atom } of terms) {
    const a = c < 0n ? -c : c;
    const body = a === 1n ? atom : `${hexOrDec(a)}*${atom}`;
    s += s ? (c < 0n ? ` - ${body}` : ` + ${body}`) : (c < 0n ? `-${body}` : body);
  }
  if (k !== 0n || !s) s += s ? (k < 0n ? ` - ${hexOrDec(-k)}` : ` + ${hexOrDec(k)}`) : hexOrDec(wrap(k));
  return s;
}

export function simplify(src, rng = defaultRng) {
  const e = parse(src);
  const vars = [...variables(e)].sort();
  if (vars.length > MAX_VARS) throw new Error(`at most ${MAX_VARS} variables`);
  const n = vars.length, N = 1 << n;
  // g(v) = -e(X_v), X_v[j] = v_j ? -1 : 0
  const g = [];
  for (let v = 0; v < N; v++) {
    const env = {};
    vars.forEach((name, j) => { env[name] = (v >> j) & 1 ? MASK : 0n; });
    g.push(wrap(-evaluate(e, env)));
  }
  // Moebius transform: g(v) = sum over S subset of v of c_S.
  const coef = g.slice();
  for (let j = 0; j < n; j++) for (let v = 0; v < N; v++) if (v & (1 << j)) coef[v] = wrap(coef[v] - coef[v ^ (1 << j)]);
  let result = render(coef, vars);
  // A single bitwise function times a constant often reads better (e.g. x ^ y).
  if (n === 2) {
    const nonzero = [...new Set(g.filter((x) => x !== 0n))];
    if (nonzero.length === 1) {
      let tt = 0; g.forEach((x, v) => { if (x !== 0n) tt |= 1 << v; });
      const name = twoVarNames(vars[0], vars[1])[tt];
      const c = signed(nonzero[0]);
      const alt = name === null ? '0' : c === 1n ? name : c === -1n ? `-(${name})` : `${hexOrDec(nonzero[0])}*(${name})`;
      if (alt.length < result.length) result = alt;
    }
  }
  const simplified = parse(result);
  const checks = 256;
  for (let t = 0; t < checks; t++) {
    const env = {};
    for (const name of vars) env[name] = rng();
    const a = evaluate(e, env), b = evaluate(simplified, env);
    if (a !== b) {
      return { ok: false, vars, counterexample: { env, original: a, candidate: b }, candidate: result };
    }
  }
  return { ok: true, vars, result, checks, constant: n === 0 || coef.slice(1).every((c) => c === 0n) };
}

function defaultRng() {
  const b = new BigUint64Array(1);
  globalThis.crypto.getRandomValues(b);
  return b[0];
}

export function report(src) {
  const t0 = performance.now();
  const r = simplify(src);
  const ms = (performance.now() - t0).toFixed(1);
  const hex = (v) => '0x' + v.toString(16);
  if (!r.ok) {
    return [
      'NOT A LINEAR MBA: the linear method does not apply to this expression.',
      `Best linear candidate: ${r.candidate}`,
      'Counterexample: ' + Object.entries(r.counterexample.env).map(([k, v]) => `${k} = ${hex(v)}`).join(', '),
      `  input gives ${hex(r.counterexample.original)}, candidate gives ${hex(r.counterexample.candidate)}`,
      'Products of variables (x*y) and similar terms need the full VMP_DEVIRT toolchain.'
    ].join('\n');
  }
  return [
    `Simplified: ${r.result}`,
    r.constant ? `The expression is constant for every input: an opaque value${r.result === '0' || r.result === '-1' ? ' (typical of opaque predicates)' : ''}.` : '',
    `Variables: ${r.vars.join(', ') || 'none'} · ${1 << r.vars.length} truth-table evaluations · checked equal on ${r.checks} random 64-bit inputs · ${ms} ms`
  ].filter(Boolean).join('\n');
}
