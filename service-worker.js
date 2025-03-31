self.addEventListener("install", event => {
    console.log("Service Worker installé");
    event.waitUntil(
        caches.open("mouse-app").then(cache => {
            return cache.addAll([
                "index.html",
                "style.css",
                "script.js",
                "src/mouse.svg",
                "src/icon-192.png",
                "src/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
