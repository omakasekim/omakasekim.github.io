// Service worker that injects cross-origin isolation headers on ALL same-origin
// responses (document, module workers, AudioWorklet scripts, and WASM) so
// Chromium's COEP check allows `new Worker(..., { type: 'module' })` and
// `audioWorklet.addModule(...)` cleanly under crossOriginIsolated.

'use strict';

const COOP = 'Cross-Origin-Opener-Policy';
const COEP = 'Cross-Origin-Embedder-Policy';
const CORP = 'Cross-Origin-Resource-Policy';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then((resp) => {
      if (resp.status === 0) return resp;
      const headers = new Headers(resp.headers);
      headers.set(COOP, 'same-origin');
      headers.set(COEP, 'require-corp');
      headers.set(CORP, 'same-origin');
      return new Response(resp.body, {
        status: resp.status,
        statusText: resp.statusText,
        headers,
      });
    })
  );
});
