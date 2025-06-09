
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('arbiboard-cache-v1').then(cache => {
      return cache.addAll([
        '/offline.html',
        '/fallback-odds.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      if (event.request.destination === 'document') {
        return caches.match('/offline.html');
      }
      if (event.request.url.includes('/odds')) {
        return caches.match('/fallback-odds.json');
      }
    })
  );
});
