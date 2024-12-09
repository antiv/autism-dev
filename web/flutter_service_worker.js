'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4922cef7d6faaee03b567b39eaec2f0e",
"version.json": "f6d7ed72ff85c44f69fff629faf2b689",
"index.html": "45e8700f84d68b4b1d010e72d9c65f93",
"/": "45e8700f84d68b4b1d010e72d9c65f93",
"main.dart.js": "5539eff00d8370f0349d6d5175813921",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "b513084c63a7e0a2f68b3478fd0aa5b6",
"icons/Icon-192.png": "37542ac0deff3823771d4aeb719cda81",
"icons/Icon-maskable-192.png": "37542ac0deff3823771d4aeb719cda81",
"icons/Icon-maskable-512.png": "ad82a2399fa03c67eb382f7ee23abe62",
"icons/Icon-512.png": "ad82a2399fa03c67eb382f7ee23abe62",
"manifest.json": "3b718c81ceee8a7466cf39b015d2693f",
"assets/AssetManifest.json": "eb6c5f7bf766185fbbbafc6c8e2bd928",
"assets/NOTICES": "2a4c5d93ba72fc3c80951dc31f994ce2",
"assets/env": "738f4d98be797f7065031d7ec0975500",
"assets/FontManifest.json": "b6d9995bf57d4397084a208d292773c7",
"assets/AssetManifest.bin.json": "4f9e1af878e78723aa7cb1f8c09f5ba9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b53bcaeab100be5dd92df1b33488d120",
"assets/fonts/MaterialIcons-Regular.otf": "e2d94867e16fbad09bbb9a592a39e837",
"assets/assets/images/music.svg": "9196c7894c091dc886500071f35405a7",
"assets/assets/images/logo-m.svg": "b78dffae37fb2cdc77db3248fe139e45",
"assets/assets/images/sleep.svg": "e0ead91fc752ac83112b6592576ff43a",
"assets/assets/images/sad.svg": "6f89cb95af1bea40cf277c526f0f31cf",
"assets/assets/images/happy.svg": "0f87185846ec222dd252893c6d89d489",
"assets/assets/images/background.png": "511498efc7746eb451e2dae135d9eebc",
"assets/assets/images/people.svg": "e58d41c96b07473ce74e109eccf08453",
"assets/assets/images/bad.svg": "45004c6bce5d7bd151a5c5fac29c3f7b",
"assets/assets/images/needs.svg": "573a1d524c2e36a68299126fdc1fae5d",
"assets/assets/images/calm.svg": "c707eff47d83452afe9f5acf4a8c0524",
"assets/assets/images/eat.svg": "8198f4c91db93d4320e9e54ca413f70f",
"assets/assets/images/activities.svg": "15ef13f89bf096e24ec7dfec5666d944",
"assets/assets/images/logo.svg": "6657cee99fe087cdae771a2cb79717aa",
"assets/assets/images/fear.svg": "7d260812ff007bf0199fea204abfe75e",
"assets/assets/images/clean.svg": "aef9609df673872663558bb8d4243518",
"assets/assets/images/anger.svg": "8bf73ae57a97da1fcdf6da5936d2d67c",
"assets/assets/disclaimer_de.md": "c3eb274e15a720f720a7b63b3c99e01e",
"assets/assets/icons/cal.svg": "d578c87ab5a2ac8b5a7754b7f3407735",
"assets/assets/icons/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/assets/disclaimer.md": "fedf3d8e8cd989807de259404508e8b0",
"assets/assets/fonts/noto-color-emoji.ttf": "37e77bbb309de679a835cf8759b84cfc",
"assets/assets/fonts/ChalkboardSE-Light-01_0.ttf": "fccdec2b83c05832279fab276eedcdd6",
"assets/assets/fonts/chalkboardse.otf": "d59fb3d9e0f01f447cdf2a45aeaeac61",
"assets/assets/fonts/ChalkboardSE-Bold-03_0.ttf": "9ad9af29ece787cbb8201069960f43ac",
"assets/assets/fonts/ChalkboardSE-Regular-02_0.ttf": "654c8fa62d08c89490681b66c8ae944c",
"assets/assets/translations/de-DE.json": "ba12042a090fd836934aded34b26ca96",
"assets/assets/translations/en-US.json": "a38d5c8b406de24725b642c9a2e23ac4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
