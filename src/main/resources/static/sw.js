if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log("Service Worker registration successful: ", registration)
        }, (err) => {
            console.log("Registration failed", err)
        })
    })
}

let cache_name = 'site-v1'

let urls_to_cache = [
    '/',
    '/app.js',
    '/Task.js',
    '/TasksRepository.js'
]

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(cache_name).then((cache) => {
        return cache.addAll(urls_to_cache)
    }) )
})

self.addEventListener('fetch', (e) => {
    console.log(e.request)
    e.respondWith(caches.match(e.request).then((response) => {
        if(response){
            console.log(response.url, response.headers.get("Cache-Control"))
            return response
        }

        else
            return fetch(e.request)
    }) )
})