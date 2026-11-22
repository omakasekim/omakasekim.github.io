const $ = (id) => document.getElementById(id);
const out = $('out');
const MAX = 8 * 1024 * 1024;
let worker = null, lastUrl = null;

function show(lines, cls) { out.textContent = lines.filter(Boolean).join('\n'); out.className = cls || ''; }
function busy(on) { for (const id of ['go', 'file', 'osm', 'sample']) $(id).disabled = on; }
function fmt(n) { return n.toLocaleString(); }

function offer(bytes, name) {
  if (lastUrl) URL.revokeObjectURL(lastUrl);
  lastUrl = URL.createObjectURL(new Blob([bytes]));
  const a = $('dl');
  a.href = lastUrl; a.download = name; a.textContent = 'Download ' + name + ' (' + fmt(bytes.length) + ' bytes)';
  a.hidden = false;
}

function run(op, bytes, name) {
  if (bytes.length > MAX) { show(['That is ' + (bytes.length / 1048576).toFixed(1) + ' MB; the page takes up to 8 MB. Use the command-line tool for larger files.'], 'bad'); return; }
  if (!worker) worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
  busy(true); $('dl').hidden = true;
  show([(op === 'compress' ? 'Compressing ' : 'Decompressing ') + fmt(bytes.length) + ' bytes...']);
  worker.onmessage = ({ data }) => {
    busy(false);
    if (!data.ok) { show(['Failed: ' + data.error], 'bad'); return; }
    if (data.op === 'compress') {
      const n = bytes.length, m = data.out.length;
      show([
        fmt(n) + ' -> ' + fmt(m) + ' bytes: ' + (n ? (m * 8 / n).toFixed(3) : '0') + ' bits per byte, ' + (n / Math.max(m, 1)).toFixed(2) + 'x smaller.',
        'Compressed in ' + (data.ms / 1000).toFixed(2) + ' s, decompressed again in ' + (data.msBack / 1000).toFixed(2) + ' s on this device.',
        data.same ? 'Round trip verified: the decompressed bytes are identical to the input.' : 'ROUND TRIP MISMATCH (please report this).'
      ], data.same ? 'ok' : 'bad');
      offer(data.out, name + '.osm');
    } else {
      show(['Decompressed ' + fmt(bytes.length) + ' -> ' + fmt(data.out.length) + ' bytes in ' + (data.ms / 1000).toFixed(2) + ' s.'], 'ok');
      offer(data.out, name.replace(/\.osm$/, '') || 'output');
    }
  };
  const copy = bytes.slice();
  worker.postMessage({ op, bytes: copy.buffer }, [copy.buffer]);
}

$('go').onclick = () => run('compress', new TextEncoder().encode($('text').value), 'text.txt');
$('sample').onclick = async () => {
  try {
    const r = await fetch('./enwik-sample.txt');
    $('text').value = await r.text();
    run('compress', new TextEncoder().encode($('text').value), 'enwik-sample.txt');
  } catch (e) { show(['Could not load the sample: ' + e.message], 'bad'); }
};
$('file').onchange = async (ev) => {
  const f = ev.target.files[0]; ev.target.value = '';
  if (f) run('compress', new Uint8Array(await f.arrayBuffer()), f.name);
};
$('osm').onchange = async (ev) => {
  const f = ev.target.files[0]; ev.target.value = '';
  if (f) run('decompress', new Uint8Array(await f.arrayBuffer()), f.name);
};
busy(false);
show(['Ready. Everything runs in this page; nothing is uploaded.']);
