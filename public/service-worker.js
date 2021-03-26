
const filesToCache = [
    '/',
    './index.html',
    './build/bundle.js',
    './build/bundle.css'
  ];
  

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open('cache-v1')
            .then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open('cache-v1')
            .then(cache => cache.match(event.request))
            .then(response => response ?? fetch(event.request))
    );
});