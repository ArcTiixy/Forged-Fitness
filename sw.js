// ForgedFitness deliberately does not cache HTML. This prevents a broken or outdated app
// shell from trapping the browser on an old screen. Existing worker claims clients only;
// navigation and app assets are fetched fresh from GitHub Pages.
self.addEventListener('install',function(event){event.waitUntil(self.skipWaiting())});
self.addEventListener('activate',function(event){event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.map(function(key){return caches.delete(key)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(event){if(event.request.method==='GET')event.respondWith(fetch(event.request))});
