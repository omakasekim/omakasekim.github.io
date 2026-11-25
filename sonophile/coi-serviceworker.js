// Service worker that injects cross-origin isolation headers on the top-level
// document response (the `coi-serviceworker` pattern). Because the worker only
// controls the page after its first activation, the client reloads exactly once
// (guarded in `coi.ts`) so headers apply on the second load without a loop.

'use strict';

const COOP = 'Cross-Origin-Opener-Policy';
const COEP = 'Cross-Origin-Embedder-Policy';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Only rewrite navigations / document requests; subresources pass through.
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req).then((resp) => {
        const headers = new Headers(resp.headers);
        headers.set(COOP, 'same-origin');
        headers.set(COEP, 'require-corp');
        // Mark cross-origin subresources explicitly: everything we load is
        // self-hosted, so this is safe and unblocks `require-corp`.
        return new Response(resp.body, {
          status: resp.status,
          statusText: resp.statusText,
          headers,
        });
      })
    );
  }
  // Non-document requests are served normally (they are all same-origin here).
});
