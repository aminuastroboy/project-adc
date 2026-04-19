self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mt-sub-static-v1").then((cache) =>
      cache.addAll([
        "/",
        "/login",
        "/register",
        "/icons/icon-192.png",
        "/icons/icon-512.png"
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
