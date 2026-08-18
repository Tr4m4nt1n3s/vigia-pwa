/* Service Worker de Vigía.
   Sube este archivo a GitHub en la MISMA carpeta que vigia-analisis-amenazas.html,
   manifest.json y los iconos.

   IMPORTANTE al publicar una versión nueva del .html: sube también este archivo
   con CACHE_VERSION incrementado (v2 -> v3 -> ...). Si no lo cambias, los
   usuarios que ya instalaron Vigía pueden quedarse atrapados en una versión
   antigua indefinidamente, porque el navegador solo vuelve a comprobar el
   contenido de la caché cuando cambia el nombre de la caché. */
const CACHE_VERSION = 'vigia-shell-v23';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names
          .filter(name => name.startsWith('vigia-shell-') && name !== CACHE_VERSION)
          .map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return; // no cachear peticiones a servicios externos

  // Documento HTML principal (navegación): network-first. Así, si hay conexión,
  // el usuario siempre ve la última versión publicada; la caché solo actúa de
  // respaldo cuando no hay red. Evita quedarse "congelado" en una versión vieja.
  if(e.request.mode === 'navigate'){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if(res.ok) caches.open(CACHE_VERSION).then(cache => cache.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(e.request).then(cached => cached || caches.match('./')))
    );
    return;
  }

  // Resto de recursos propios (manifest, iconos): cache-first con actualización
  // en segundo plano, para que abrir la app sea instantáneo una vez instalada.
  e.respondWith(
    caches.open(CACHE_VERSION).then(async cache => {
      const cached = await cache.match(e.request);
      const network = fetch(e.request).then(res => {
        if(res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await network) || Response.error();
    })
  );
});
