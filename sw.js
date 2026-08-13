// AGUATERO - Service Worker AUTOMATICO - Actualiza index.html siempre
const CACHE_NOMBRE = 'aguatero-cache-auto-v2';

self.addEventListener('install', function(evento){
  self.skipWaiting();
  evento.waitUntil(
    caches.open(CACHE_NOMBRE).then(function(cache){
      return cache.addAll([
        './',
        './styles.css',
        './app.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('activate', function(evento){
  evento.waitUntil(
    caches.keys().then(function(nombres){
      return Promise.all(
        nombres.filter(function(n){ return n !== CACHE_NOMBRE; }).map(function(n){ return caches.delete(n); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

// FIX CLAVE: index.html y / SIEMPRE de internet primero, nunca del cache viejo
self.addEventListener('fetch', function(evento){
  if (evento.request.method !== 'GET') return;
  
  // Si pide index.html o la raiz, va a internet primero
  if (evento.request.url.includes('index.html') || evento.request.url.endsWith('/') || evento.request.url.endsWith('/Aguatero') || evento.request.url.endsWith('/Aguatero/')) {
    evento.respondWith(
      fetch(evento.request, {cache: 'no-store'})
        .then(function(res){
          return res;
        })
        .catch(function(){
          return caches.match(evento.request);
        })
    );
    return;
  }
  
  // Para todo lo demas (css, js, iconos): cache primero, si no hay va a internet
  evento.respondWith(
    caches.match(evento.request).then(function(respuesta){
      return respuesta || fetch(evento.request).then(function(resFetch){
        // Guarda en cache lo nuevo para offline
        return caches.open(CACHE_NOMBRE).then(function(cache){
          cache.put(evento.request, resFetch.clone());
          return resFetch;
        });
      });
    })
  );
});
