self.addEventListener('install', (event) => {
    console.log("SW INSTALL");
    const promiseCache = caches.open('cache-v1.1').then(cache => {
        return cache.addAll(
            [
                '/',
                '/index.html',
                '/pages/page1.html',
                '/pages/page2.html',
                '/pages/page3.html',
                '/pages/page4.html'
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