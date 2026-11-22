const $ = (id) => document.getElementById(id);
const out = $('out');
const MAX_FILE = 300 * 1024 * 1024;
let worker = null, seq = 0, prelude = null;

function show(text, cls) {
  out.textContent = text;
  out.className = cls || '';
}

function busy(on) {
  for (const id of ['run', 'tamper']) $(id).disabled = on;
  $('file').disabled = on;
}

function runCheck(text, label) {
  if (!worker) worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
  const id = ++seq;
  busy(true);
  show('Checking ' + label + ' (' + (text.length / 1048576).toFixed(1) + ' MB)...');
  return new Promise((resolve) => {
    worker.onmessage = ({ data }) => {
      if (data.id !== id) return;
      busy(false);
      resolve(data);
    };
    worker.postMessage({ id, text });
  });
}

async function gunzip(buf) {
  const stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'));
  return await new Response(stream).text();
}

async function loadPrelude() {
  if (prelude) return prelude;
  const r = await fetch('./Init.Prelude.ndjson.gz');
  if (!r.ok) throw new Error('could not download the sample (' + r.status + ')');
  prelude = await gunzip(await r.arrayBuffer());
  return prelude;
}

function report(label, data, extra) {
  const r = data.result;
  if (r.ok) {
    show([
      'ACCEPTED: every declaration in ' + label + ' type-checks.',
      r.decls.toLocaleString() + ' declarations checked (' + r.theorems + ' theorems, ' + r.defs + ' definitions, ' + r.inductives + ' inductive types, ' + r.axioms + ' axioms), ' + r.env_decls.toLocaleString() + ' constants in the environment including generated constructors and recursors.',
      r.lines.toLocaleString() + ' export lines in ' + (data.ms / 1000).toFixed(2) + ' s on one thread of this device.',
      extra || ''
    ].filter(Boolean).join('\n'), 'ok');
  } else {
    show(['REJECTED: ' + label + ' does not check.', r.error, extra || ''].filter(Boolean).join('\n'), 'bad');
  }
}

// Names from the export's name table ({"in":id,"str":{"pre":p,"str":s}} / "num").
function nameTable(lines) {
  const names = new Map([[0, '']]);
  for (const l of lines) {
    if (!l.startsWith('{"in"')) continue;
    const d = JSON.parse(l);
    const p = d.str || d.num;
    if (!p) continue;
    const pre = names.get(p.pre) || '';
    names.set(d.in, (pre ? pre + '.' : '') + (d.str ? p.str : String(p.i)));
  }
  return names;
}

$('run').onclick = async () => {
  try {
    const text = await loadPrelude();
    report('Init.Prelude', await runCheck(text, 'Init.Prelude'));
  } catch (e) { busy(false); show('Could not run: ' + e.message, 'bad'); }
};

$('tamper').onclick = async () => {
  try {
    const text = await loadPrelude();
    const lines = text.split('\n');
    const thms = [];
    lines.forEach((l, i) => { if (l.startsWith('{"thm":')) thms.push(i); });
    // Give a randomly chosen theorem the proof of an earlier theorem.
    const k = 1 + Math.floor(Math.random() * (thms.length - 1));
    const victim = thms[k], donor = thms[Math.floor(Math.random() * k)];
    const v = JSON.parse(lines[victim]), d = JSON.parse(lines[donor]);
    const names = nameTable(lines.slice(0, victim));
    v.thm.value = d.thm.value;
    lines[victim] = JSON.stringify(v);
    const note = 'Tampered: theorem ' + (names.get(v.thm.name) || '#' + v.thm.name) + ' (line ' + (victim + 1) + ') was given the proof of ' + (names.get(d.thm.name) || '#' + d.thm.name) + '.';
    const res = await runCheck(lines.join('\n'), 'the tampered file');
    report('the tampered Init.Prelude', res, note + (res.result.ok ? ' Both theorems state the same proposition, so the borrowed proof is valid. Try again for another pair.' : ''));
  } catch (e) { busy(false); show('Could not run: ' + e.message, 'bad'); }
};

$('file').onchange = async (ev) => {
  const f = ev.target.files[0];
  ev.target.value = '';
  if (!f) return;
  if (f.size > MAX_FILE) { show('That file is ' + (f.size / 1048576).toFixed(0) + ' MB; the browser build takes up to 300 MB. Use the native rigor-bench for full libraries.', 'bad'); return; }
  try {
    const buf = await f.arrayBuffer();
    const text = f.name.endsWith('.gz') ? await gunzip(buf) : new TextDecoder().decode(buf);
    report(f.name, await runCheck(text, f.name));
  } catch (e) { busy(false); show('Could not read ' + f.name + ': ' + e.message, 'bad'); }
};

busy(false);
show('Ready. The kernel is ' + '300 KB of WebAssembly; nothing leaves this page.');
