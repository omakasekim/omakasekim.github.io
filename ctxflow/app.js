// The app. All decisions come from kernel.wasm; this file draws them and performs calls.
import { loadKernel, runCouncil, estimateCouncil, makeTransport, makeScrubber } from './engine/index.mjs';

const $ = (id) => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem('ctxflow.' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('ctxflow.' + k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem('ctxflow.' + k); } catch {} }
};

const CHECKS = ['Logic check', 'Alternatives', 'Failure modes', 'Feasibility'];
const BROWSER_PROFILES = {
  local: { about: 'No key. Local models only.', seats: ['ollama:auto', 'ollama:auto', 'ollama:auto'], chair: 'ollama:auto', fallbacks: [] },
  free: { about: 'Gemini free tier, plus a local model if you have one.', seats: ['gemini:gemini-3.5-flash-lite', 'gemini:gemini-3-flash-preview', 'gemini:gemini-3.5-flash', 'ollama:auto'], chair: 'gemini:gemini-3.5-flash', fallbacks: ['gemini:gemini-3.1-flash-lite'] },
  openrouter: { about: 'One OpenRouter key, several vendors.', seats: ['openrouter:google/gemini-3.5-flash', 'openrouter:anthropic/claude-haiku-5.5', 'openrouter:deepseek/deepseek-v4.1-flash', 'openrouter:qwen/qwen3.8-flash'], chair: 'openrouter:anthropic/claude-sonnet-5.5', fallbacks: [] }
};
const MODEL_HINTS = ['ollama:auto', 'gemini:gemini-3.5-flash-lite', 'gemini:gemini-3-flash-preview', 'gemini:gemini-3.5-flash', 'gemini:gemini-3.8-flash', 'claude:haiku', 'claude:sonnet', 'claude:opus', 'anthropic:claude-haiku-5-5', 'anthropic:claude-sonnet-5-5', 'anthropic:claude-opus-5-5', 'mlx:', 'lmstudio:', 'openrouter:', 'openai:', 'groq:', 'deepseek:'];
const KEYS = [['GEMINI_API_KEY', 'Gemini'], ['OPENROUTER_API_KEY', 'OpenRouter'], ['OPENAI_API_KEY', 'OpenAI'], ['GROQ_API_KEY', 'Groq'], ['DEEPSEEK_API_KEY', 'DeepSeek']];
const MODE_HINT = {
  fast: 'Answers only. Takes the most confident one, without cross-checking.',
  auto: 'Spends more only when the answers disagree.',
  thorough: 'Always scores the answers and always runs the final step.'
};
const OUTCOME = {
  agreed: 'The models agreed, so scoring was skipped.',
  ranked: 'Scoring produced a clear winner, so no final step was needed.',
  resolved: 'The answers disagreed. The final model resolved it.',
  fast: 'Fast mode.',
  budget: 'Stopped at your token limit.',
  single: 'Only one model answered.',
  chair_failed: 'The final model failed.',
  failed: 'No model answered.'
};

// The start-up link carries a one-time token. It is traded for a session token on first load,
// so a copy of the link left in scrollback or a screen share opens nothing afterwards.
const params = new URLSearchParams(location.search);
const startToken = params.get('t') || '';
if (startToken) history.replaceState(null, '', location.pathname);
let token = '';
try { token = sessionStorage.getItem('ctxflow.session') || ''; } catch {}
let linkProblem = '';
async function openSession() {
  if (!startToken) return;
  try {
    const res = await fetch('/api/session', { method: 'POST', headers: { 'X-Ctxflow-Token': startToken } });
    const data = await res.json();
    if (res.ok && data.session) {
      token = data.session;
      try { sessionStorage.setItem('ctxflow.session', token); } catch {}
    } else if (!token) {
      linkProblem = data.error || 'This link no longer works.';
    }
  } catch {}
}

let kernel, companion = null, running = null, mode = store.get('mode', 'auto'), lastDecision = '';
const keys = store.get('keys', {});
let limits = store.get('limits', { max_tokens: 20000, confirm_over: 15000, daily_tokens: 200000 });

// ── safe rendering: model text only ever becomes text nodes ───────────────────
function inline(parent, text) {
  for (const part of text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)) {
    if (!part) continue;
    if (part.startsWith('**')) { const b = document.createElement('strong'); b.textContent = part.slice(2, -2); parent.append(b); }
    else if (part.startsWith('`')) { const c = document.createElement('code'); c.textContent = part.slice(1, -1); parent.append(c); }
    else parent.append(part);
  }
}
function renderMd(el, text) {
  el.replaceChildren();
  let list = null;
  for (const raw of String(text).split('\n')) {
    const line = raw.trim();
    if (!line) { list = null; continue; }
    if (/^[-*] /.test(line)) {
      if (!list) { list = document.createElement('ul'); el.append(list); }
      const li = document.createElement('li'); inline(li, line.slice(2)); list.append(li);
      continue;
    }
    list = null;
    const p = document.createElement('p');
    const note = /^_(.*)_$/.exec(line);
    if (note) { p.className = 'muted'; inline(p, note[1]); } else inline(p, line);
    el.append(p);
  }
}

// ── models and connection ─────────────────────────────────────────────────────
function profiles() { return companion ? companion.profiles : BROWSER_PROFILES; }
function seatInputs() { return [...document.querySelectorAll('#seats input')]; }
function chosen() {
  const v = seatInputs().map((i) => i.value.trim());
  return { seats: v.slice(0, 4).filter(Boolean), chair: v[4] || v[0] };
}
function applyProfile(name) {
  const p = profiles()[name];
  if (!p) return;
  const inputs = seatInputs();
  inputs.forEach((inp, i) => { inp.value = i < 4 ? (p.seats[i] || '') : p.chair; });
  store.set('profile', name);
  store.set('fallbacks', p.fallbacks || []);
  for (const b of $('profiles').children) b.setAttribute('aria-pressed', String(b.dataset.name === name));
  saveSeats();
}
function saveSeats() { store.set('seats', seatInputs().map((i) => i.value)); refreshHint(); }
function buildModels() {
  const seats = $('seats');
  [...CHECKS, 'Final decision'].forEach((label, i) => {
    const row = document.createElement('div'); row.className = 'seat';
    const l = document.createElement('label'); l.textContent = label; l.htmlFor = 'seat' + i;
    const inp = document.createElement('input'); inp.id = 'seat' + i; inp.setAttribute('list', 'modelList');
    inp.autocomplete = 'off'; inp.spellcheck = false;
    inp.placeholder = i < 4 ? 'Leave empty to skip this check' : 'backend:model';
    inp.addEventListener('change', saveSeats);
    row.append(l, inp); seats.append(row);
  });
  for (const m of MODEL_HINTS) { const o = document.createElement('option'); o.value = m; $('modelList').append(o); }
  const box = $('profiles');
  for (const [name, p] of Object.entries(profiles())) {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = name; b.dataset.name = name; b.title = p.about || '';
    b.addEventListener('click', () => applyProfile(name));
    box.append(b);
  }
  const saved = store.get('seats', null);
  if (saved) { seatInputs().forEach((inp, i) => { inp.value = saved[i] || ''; }); }
  else applyProfile(suggestProfile());
}
function suggestProfile() {
  const d = companion?.detect;
  if (d) {
    if (d.gemini && d.claude && d.local) return 'balanced';
    if (d.gemini) return 'free';
    if (d.claude) return 'claude';
    return 'local';
  }
  return keys.GEMINI_API_KEY ? 'free' : keys.OPENROUTER_API_KEY ? 'openrouter' : 'local';
}
function buildKeys() {
  if (companion) {
    const d = companion.detect;
    $('keysNote').textContent = 'Keys come from this machine’s environment and never reach the page. Found: ' +
      (Object.entries(d).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none');
    $('rememberKeys').parentElement.hidden = true;
    return;
  }
  $('keysNote').textContent = 'Keys stay in this browser and go only to the provider you use. Local models need none. Claude needs `ctxflow serve`.';
  $('rememberKeys').checked = store.get('rememberKeys', false);
  for (const [env, label] of KEYS) {
    const row = document.createElement('div'); row.className = 'seat';
    const l = document.createElement('label'); l.textContent = label; l.htmlFor = 'key' + env;
    const inp = document.createElement('input'); inp.id = 'key' + env; inp.type = 'password'; inp.autocomplete = 'off'; inp.value = keys[env] || '';
    inp.addEventListener('change', () => { keys[env] = inp.value.trim(); persistKeys(); refreshStatus(); });
    row.append(l, inp); $('keyFields').append(row);
  }
  $('rememberKeys').addEventListener('change', persistKeys);
}
function persistKeys() {
  const on = $('rememberKeys').checked;
  store.set('rememberKeys', on);
  if (on) store.set('keys', keys); else store.del('keys');
}
function buildLimits() {
  const fields = [['limRun', 'max_tokens'], ['limAsk', 'confirm_over'], ['limDay', 'daily_tokens']];
  for (const [id, k] of fields) {
    $(id).value = limits[k];
    $(id).addEventListener('change', () => { limits[k] = Math.max(0, Number($(id).value) || 0); store.set('limits', limits); refreshHint(); refreshStatus(); });
  }
}

// ── spending ──────────────────────────────────────────────────────────────────
function todayKey() { return 'used.' + new Date().toDateString(); }
function usedToday() { return companion ? companion.today : store.get(todayKey(), 0); }
function addUsage(model, input, output) {
  if (isLocal(model)) return;
  if (companion) { companion.today += input + output; return; }
  store.set(todayKey(), usedToday() + input + output);
}
function isLocal(model) { return /^(ollama|mlx|lmstudio):/.test(model); }
function worstCase() {
  const q = $('question').value.trim();
  const { seats } = chosen();
  return kernel ? estimateCouncil(kernel, q, seats.length || 2) : 0;
}
function allLocal() { const c = chosen(); return [...c.seats, c.chair].every(isLocal); }
function refreshHint() {
  const c = chosen();
  const lines = [MODE_HINT[mode]];
  if ($('question').value.trim()) {
    lines.push(allLocal() ? 'Free: local models only.' : 'At most about ' + worstCase().toLocaleString() + ' tokens.');
  }
  if (new Set(c.seats).size < 2) lines.push('One model only, so this is not independent agreement.');
  $('hint').textContent = lines.join(' ');
}
function refreshStatus() {
  const today = usedToday();
  const pct = limits.daily_tokens ? Math.round(today * 100 / limits.daily_tokens) + '% of today’s limit' : today.toLocaleString() + ' tokens today';
  const where = companion ? 'this machine' : 'browser only';
  $('statusLine').textContent = where + ' · ' + mode + ' · ' + pct;
}
function setMode(m) {
  mode = m; store.set('mode', m);
  for (const b of document.querySelectorAll('.dial button')) b.setAttribute('aria-checked', String(b.dataset.mode === m));
  refreshHint(); refreshStatus();
}

// ── transport ─────────────────────────────────────────────────────────────────
function makeCompanionTransport() {
  return async (model, call, signal) => {
    let res;
    try {
      res = await fetch('/api/llm', { method: 'POST', signal, headers: { 'Content-Type': 'application/json', 'X-Ctxflow-Token': token },
        body: JSON.stringify({ model, system: call.system, prompt: call.prompt, max_tokens: call.max_tokens, kind: call.kind }) });
    } catch (e) { throw new Error('ctxflow serve is not responding: ' + e.message); }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
    if (data.removed) noteRemoved(data.removed);
    return { text: data.text, input: data.input, output: data.output, local: data.local };
  };
}
let removedCount = 0;
function noteRemoved(n) { removedCount += n; }

// ── run ───────────────────────────────────────────────────────────────────────
const answerEls = {};
function resetResults(seats) {
  $('results').hidden = false; $('decision').hidden = true; $('matrixWrap').hidden = true;
  $('notices').replaceChildren(); $('answers').replaceChildren();
  removedCount = 0;
  for (const li of $('stages').children) li.className = '';
  seats.forEach((s, i) => {
    const d = document.createElement('details'); d.className = 'answer';
    const sum = document.createElement('summary');
    const name = document.createElement('span'); name.textContent = CHECKS[i] + ' · ' + s;
    const st = document.createElement('span'); st.className = 'state'; st.textContent = 'waiting';
    sum.append(name, st);
    const body = document.createElement('div');
    d.append(sum, body); $('answers').append(d);
    answerEls[i + 1] = { d, st, body, name };
  });
}
function notice(text) { const n = document.createElement('p'); n.className = 'notice'; n.textContent = text; $('notices').append(n); }
function onEvent(ev) {
  if (ev.type === 'stage') {
    for (const li of $('stages').children) {
      const n = Number(li.dataset.stage);
      li.className = n < ev.stage ? 'done' : n === ev.stage ? 'active' : '';
    }
  } else if (ev.type === 'seat_end' && answerEls[ev.seat]) {
    const a = answerEls[ev.seat];
    a.st.textContent = 'answered'; a.name.textContent = CHECKS[ev.seat - 1] + ' · ' + ev.model;
    renderMd(a.body, ev.opinion);
  } else if (ev.type === 'seat_error' && answerEls[ev.seat]) {
    const a = answerEls[ev.seat];
    a.d.classList.add('failed'); a.st.textContent = 'failed'; a.body.textContent = ev.error;
  } else if (ev.type === 'fallback') {
    notice(ev.from + ' failed, so ' + ev.to + ' took over. ' + ev.reason);
  }
}
function drawMatrix(rows) {
  if (!rows?.length) return;
  const t = $('matrix'); t.replaceChildren();
  const head = t.insertRow();
  for (const h of ['Answer', 'Evidence', 'Risks', 'Feasible', 'Rank', 'Flaws']) { const th = document.createElement('th'); th.textContent = h; th.scope = 'col'; head.append(th); }
  for (const r of rows) {
    const tr = t.insertRow();
    tr.insertCell().textContent = r.answer;
    for (const k of ['evidence', 'risk', 'feasibility']) tr.insertCell().textContent = r[k] === null ? '-' : r[k].toFixed(1);
    tr.insertCell().textContent = r.borda === null ? '-' : r.borda.toFixed(2);
    const f = tr.insertCell(); f.textContent = r.fatal.length;
    if (r.fatal.length) f.title = r.fatal.join('\n');
  }
  $('matrixWrap').hidden = false;
}
function setBusy(busy) {
  $('run').hidden = busy; $('cancel').hidden = !busy; $('question').disabled = busy;
}
async function start() {
  const question = $('question').value.trim();
  if (!question) { $('question').focus(); return; }
  const c = chosen();
  if (c.seats.length < 2) { $('models').open = true; notice2('Choose at least two models.'); return; }
  const wc = worstCase();
  if (!allLocal() && limits.confirm_over && wc > limits.confirm_over) {
    $('confirmText').textContent = 'This run could use up to about ' + wc.toLocaleString() + ' tokens. It stops at ' + limits.max_tokens.toLocaleString() + '.';
    $('confirm').hidden = false;
    return;
  }
  execute(question, c);
}
function notice2(text) { $('hint').textContent = text; }
async function execute(question, c) {
  $('confirm').hidden = true;
  let limit = limits.max_tokens;
  if (limits.daily_tokens && !allLocal()) {
    const left = limits.daily_tokens - usedToday();
    if (left <= 0) { notice2('Today’s limit is used up. Use local models or raise the limit.'); $('limits').open = true; return; }
    limit = Math.min(limit, left);
  }
  resetResults(c.seats);
  setBusy(true);
  const controller = new AbortController();
  running = controller;
  const scrub = makeScrubber(kernel);
  const transport = companion ? makeCompanionTransport() : makeTransport({ env: keys, scrub, onScrub: noteRemoved });
  const fallbacks = store.get('fallbacks', []);
  try {
    const r = await runCouncil(kernel, transport, {
      question,
      seats: c.seats.map((model, i) => ({ model, title: CHECKS[i], fallbacks: isLocal(model) ? [] : fallbacks })),
      chair: { model: c.chair, fallbacks: isLocal(c.chair) ? [] : fallbacks },
      limits: { max_tokens: limit, mode },
      signal: controller.signal,
      onEvent,
      onUsage: addUsage
    });
    lastDecision = r.final;
    for (const li of $('stages').children) li.className = 'done';
    renderMd($('decisionBody'), r.final);
    const total = Math.round(r.used.in + r.used.out);
    const bits = [OUTCOME[r.mode] || r.mode, r.calls + ' calls', total.toLocaleString() + ' tokens'];
    if (typeof r.agreement === 'number') bits.push('agreement ' + Math.round(r.agreement * 100) + '%');
    if (r.condorcet_winner?.model) bits.push('pairwise winner: ' + r.condorcet_winner.model);
    if (r.independent_models < 2) bits.push('one model only, so this is not independent agreement');
    if (removedCount) bits.push(removedCount + ' sensitive item(s) removed before sending');
    $('decisionMeta').textContent = bits.join(' · ');
    $('decision').hidden = false;
    drawMatrix(r.matrix);
    for (const a of Object.values(answerEls)) if (a.st.textContent === 'waiting') { a.st.textContent = 'failed'; a.d.classList.add('failed'); }
  } catch (e) {
    notice(controller.signal.aborted ? 'Cancelled.' : 'Stopped: ' + e.message);
  } finally {
    running = null; setBusy(false); refreshStatus();
  }
}

// ── start-up ──────────────────────────────────────────────────────────────────
async function boot() {
  const wasm = await fetch('engine/kernel.wasm');
  kernel = await loadKernel(await wasm.arrayBuffer());
  await openSession();
  if (token) {
    try {
      const res = await fetch('/api/status', { headers: { 'X-Ctxflow-Token': token } });
      if (res.ok) {
        companion = await res.json();
        if (!store.get('limits', null)) limits = companion.limits;
      }
    } catch {}
  }
  buildModels(); buildKeys(); buildLimits();
  for (const b of document.querySelectorAll('.dial button')) b.addEventListener('click', () => setMode(b.dataset.mode));
  $('question').addEventListener('input', refreshHint);
  $('question').addEventListener('keydown', (e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && !running) start(); });
  $('run').addEventListener('click', start);
  $('cancel').addEventListener('click', () => running?.abort());
  $('confirmGo').addEventListener('click', () => execute($('question').value.trim(), chosen()));
  $('confirmNo').addEventListener('click', () => { $('confirm').hidden = true; });
  $('copy').addEventListener('click', () => navigator.clipboard?.writeText(lastDecision));
  setMode(mode);
  if (linkProblem && !companion) $('statusLine').textContent = 'browser only · ' + linkProblem;
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
}
boot().catch((e) => { $('statusLine').textContent = 'Could not start: ' + e.message; });
