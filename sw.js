const CACHE_KEY = 'luoyefe';
const CACHE_VERSION = '2.0.0';

self.addEventListener('install', function(event) {
	// 强制缓存
	// let forceCacheUrls = [
	// 	'/'
	// ];
	// forceCacheUrls = forceCacheUrls.map(url => new Request(url, { credentials: 'include' }));
	event.waitUntil(
		caches
		.open(CACHE_KEY + '-v' + CACHE_VERSION)
		// .then(cache => cache.addAll(forceCacheUrls))
	);
});

self.addEventListener('fetch', function(event) {
	const request = event.request;
	const urlObj = new URL(event.request.url);

	// console.log(urlObj);

	// sw blog 不缓存
	if (/sw\.js/.test(urlObj.pathname) || urlObj.pathname === '/blog/' || urlObj.pathname === '/blog') return fetch(request);

	// 策略一 缓存优先（静态资源）
	// 策略二 网络优先 （接口、HTML等）
	if (/\.js|css|png|jpe?g|gif|webp|svg|ico|woff2?|eot|ttf|otf$/i.test(urlObj.pathname)) {
		event.respondWith(
			caches
			.match(request)
			.then(response => {
				if (response) return response;
				return fetch(request)
					.then(response => {
						// 加入到缓存中
						return caches
							.open(CACHE_KEY + '-v' + CACHE_VERSION)
							.then(cache => {
								cache.put(request, response.clone());
								return response;
							});
					}).catch(function(error) {
						return new Response('not found');
					});
			})
		);
	} else {
		event.respondWith(
			fetch(request)
				.then(response => {
					return caches
						.open(CACHE_KEY + '-v' + CACHE_VERSION)
						.then(cache => {
							cache.put(request, response.clone());
							return response;
						});
				})
				.catch((e) => {
					return caches
							.match(request)
							.then(response => {
								if (response) return response;
								return new Response('not network');
							})
				})
		);
	}
});

// self.addEventListener('activate', function(event) {
// 	// 删除缓存
// 	const currentCache = CACHE_KEY + '-v' + CACHE_VERSION;
// 	caches
// 		.keys()
// 		.then(function(cacheNames) {
// 			return Promise.all(
// 				cacheNames.map(function(cacheName) {
// 					if (cacheName.indexOf(CACHE_KEY) == -1) {
// 						return;
// 					}

// 					if (cacheName != currentCache) {
// 						return caches.delete(cacheName);
// 					}
// 				})
// 			);
// 		});
// });
