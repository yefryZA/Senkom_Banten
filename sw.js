const CACHE_NAME = 'senkom-banten-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan seluruh trafik data selalu real-time dari jaringan
  event.respondWith(fetch(event.request));
});
