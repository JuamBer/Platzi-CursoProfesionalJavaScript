const VERSION = "v1"
self.addEventListener('install', event =>{
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
    const request = event.request;
    //get
    if(request.method !== "GET"){
        return;
    }
    //buscar en cache
    event.respondWith(cachedResponse(request));

    //actualizar cache
    event.waitUntil(updateCache(request));
});
async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);

    return cache.put(request, response);
}
async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);

    return response || fetch(request);
}
async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        //'/index.html',
        //'/assets/icon.ico',
        //'/js/index.js',
        //'/js/MediaPlayer.js',
        //'/js/plugins/AutoPlay.js',
        //'/js/plugins/AutoPause.js',
        //'/assets/index.css',
        //'/assets/BigBuckBunny.mp4'
    ]);
}