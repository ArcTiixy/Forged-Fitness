// Remove stale cached app versions so the browser requests current files.
self.addEventListener('install',function(e){e.waitUntil(self.skipWaiting())});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(e.request.method==='GET')e.respondWith(fetch(e.request))});
