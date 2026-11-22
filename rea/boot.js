import init from './rea-web.js';
init({ module_or_path: new URL('./rea-web_bg.wasm', import.meta.url) }).catch((err) => {
  const el = document.getElementById('rea_loading');
  if (el) el.textContent = 'REA could not start in this browser: ' + (err && err.message ? err.message : String(err));
});
