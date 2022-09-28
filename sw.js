self.addEventListener('install', (event) => {
    const promiseCache = caches.open('cache-v1.1').then(cache => {
        return cache.addAll(
            [
                './index.html',
                './pages/page1.html',
                './pages/page2.html',
                './pages/page3.html',
                './pages/page4.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
            ]

        )
    });
    //realiza la espera de la ejecución de la promesa
    event.waitUntil(promiseCache);
});


//only cache

self.addEventListener('fetch', (event) => {
    console.log(event);
    const respCache = caches.match(event.request)
    event.respondWith(respCache)
});