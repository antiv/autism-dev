'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "11e187e10ec994d1140a3a41502ac8cb",
"version.json": "bac3b463eaf5f7753f737ab31fea58fa",
"index.html": "9d7d7f7afb83bac9c91547e9625f4fbb",
"/": "9d7d7f7afb83bac9c91547e9625f4fbb",
"main.dart.js": "7dc327099177140fd37896b324934804",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "b513084c63a7e0a2f68b3478fd0aa5b6",
"icons/Icon-192.png": "37542ac0deff3823771d4aeb719cda81",
"icons/Icon-maskable-192.png": "37542ac0deff3823771d4aeb719cda81",
"icons/Icon-maskable-512.png": "ad82a2399fa03c67eb382f7ee23abe62",
"icons/Icon-512.png": "ad82a2399fa03c67eb382f7ee23abe62",
"manifest.json": "3b718c81ceee8a7466cf39b015d2693f",
"assets/AssetManifest.json": "61497505377198a49c67c98bfa8d5745",
"assets/NOTICES": "f1c53331dde5dc0ed5ce820e9922ca0e",
"assets/env": "738f4d98be797f7065031d7ec0975500",
"assets/FontManifest.json": "b6d9995bf57d4397084a208d292773c7",
"assets/AssetManifest.bin.json": "83c77dbaf7b4d8c0ccebe8126238831b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82dff324b2c77ff146eea520ceb78325",
"assets/fonts/MaterialIcons-Regular.otf": "bcb36eeca3a90eb28d9c41ad4abc3fc3",
"assets/assets/images/music-o.svg": "9196c7894c091dc886500071f35405a7",
"assets/assets/images/happy_m.svg": "f2594a79505e34809564fb3474f33485",
"assets/assets/images/clean-o.svg": "aef9609df673872663558bb8d4243518",
"assets/assets/images/anger_m.svg": "a5797d6d9d41a96dd9ebea2b53b9e26a",
"assets/assets/images/music.svg": "241f237a38511206eb37f697d612b378",
"assets/assets/images/logo-m.svg": "b78dffae37fb2cdc77db3248fe139e45",
"assets/assets/images/needs_m.svg": "50543b3606cfd6e5ee60a09673b5d2c7",
"assets/assets/images/sleep.svg": "745ca7fff9156d8cbc910a2c1d742e72",
"assets/assets/images/fear_m.svg": "f83935aab6ea913bcf261a2c428cf315",
"assets/assets/images/sad.svg": "6f89cb95af1bea40cf277c526f0f31cf",
"assets/assets/images/sad_m.svg": "8a5e7c094fd76ce257e9c55aa8543926",
"assets/assets/images/happy.svg": "0f87185846ec222dd252893c6d89d489",
"assets/assets/images/background.png": "511498efc7746eb451e2dae135d9eebc",
"assets/assets/images/people.svg": "eff1bb7a7fe5961ac4e61c1f374f33bc",
"assets/assets/images/subemotion/Pain_m.svg": "2eb4e11460a10f504d363c042e32fa97",
"assets/assets/images/subemotion/Nervous.svg": "fc716e005c19ee1081d50581cdeeb900",
"assets/assets/images/subemotion/Anxious.svg": "e39fea33f6a32f601e5fbca25b95895c",
"assets/assets/images/subemotion/Energetic.svg": "695fd7bc7377a76599341b421a59976a",
"assets/assets/images/subemotion/Annoyed.svg": "4a5b7bf6b826cada273221302d1afc91",
"assets/assets/images/subemotion/Well-being.svg": "8b38786738e101aa03d408af18f4fc1f",
"assets/assets/images/subemotion/Proud.svg": "ae1666e10db402c13a373e471dd71a77",
"assets/assets/images/subemotion/Jealous.svg": "91d6b9d7c7a14fdfc72cb9db76b3f06a",
"assets/assets/images/subemotion/Hurt.svg": "11963d717ba9b1b9611aeb02a3566094",
"assets/assets/images/subemotion/Relaxed.svg": "8d2d699610a9b5766a7e208de295b410",
"assets/assets/images/subemotion/Balance_m.svg": "7f2ff59c789b0f5da264ac1fc1731c62",
"assets/assets/images/subemotion/Annoyed_m.svg": "c034213e51890a8a2f9ebfd58b24cf1e",
"assets/assets/images/subemotion/Shy.svg": "3c0ff155328b4efe9b25b21e4ca777ed",
"assets/assets/images/subemotion/Unmotivated.svg": "67d240c78e0ba1928dfef3d05dadf2d9",
"assets/assets/images/subemotion/Anxious_m.svg": "966f0282b556c6e05d824d5ae2974453",
"assets/assets/images/subemotion/Cheerful.svg": "f19e0ec5f1f6c17b367a10d94a5578a4",
"assets/assets/images/subemotion/Fun.svg": "e778bf4ce6c11704dc235240a6fdeb3c",
"assets/assets/images/subemotion/Nauseous_m.svg": "e53d2e4d12b393147dbcc3e02ba7bb93",
"assets/assets/images/subemotion/Disgusted_m.svg": "a0db79823bee9f5f6b219b0719a939a1",
"assets/assets/images/subemotion/Care_m.svg": "4adc0e8e1c0b478bb8c34af5f4b9a148",
"assets/assets/images/subemotion/Dizzy.svg": "569252463b540eb19bbac31b0d613af3",
"assets/assets/images/subemotion/Loved_m.svg": "7fe531971f11809d191cc2b6fb6a3f68",
"assets/assets/images/subemotion/Well-being_m.svg": "aed26c7e5ba7638bb9c1aa42058fffac",
"assets/assets/images/subemotion/Care.svg": "47d052068deb3a73040328334874fe2d",
"assets/assets/images/subemotion/Loved.svg": "1ae02bc6f146ff9313588a98e91cd0c5",
"assets/assets/images/subemotion/Frustrated.svg": "eae3de8e8cdc1072a0c3d4858daef2f1",
"assets/assets/images/subemotion/Irritated_m.svg": "b0fcef8b8c807f8c2ddc28baaf943fb2",
"assets/assets/images/subemotion/Fun_m.svg": "6bbc1c1b5189dbe7dd23754cc17ea883",
"assets/assets/images/subemotion/Shy_m.svg": "f7b3dba21e9a3130dc86840a9fd511b8",
"assets/assets/images/subemotion/Nervous_m.svg": "dbea13961084b29b99ad1d1003235e06",
"assets/assets/images/subemotion/Desperate.svg": "7d993346fdaf22b8cd059da9ee96dbab",
"assets/assets/images/subemotion/Hurt_m.svg": "5f663352f6615b3cf9acd1d331aaea85",
"assets/assets/images/subemotion/Disgusted.svg": "9cddf271ffc3fe3f316d3cdccb0f3969",
"assets/assets/images/subemotion/Lonely_m.svg": "cf55d6f0f9899e75fe6ac9ab7d5163f4",
"assets/assets/images/subemotion/Unmotivated_m.svg": "b8f4dbdcc3b65f79fe245cee582d415e",
"assets/assets/images/subemotion/Weak_m.svg": "7eba6615fcdd1f1bab0ea84c2e125498",
"assets/assets/images/subemotion/Sleepy_m.svg": "bfe761c76d1bc7a7fbdff3e7279bfdf8",
"assets/assets/images/subemotion/Pain.svg": "c1ca4f9fe5e27a4c580850a579417536",
"assets/assets/images/subemotion/Relaxed_m.svg": "50b1134561e753223a100a7289c433e5",
"assets/assets/images/subemotion/Cheerful_m.svg": "1fb698defb6e1c558c860e67600a374e",
"assets/assets/images/subemotion/Shocked.svg": "b332bf17f0b2e69fb5a3adf465e82184",
"assets/assets/images/subemotion/Nauseous.svg": "20f144a1d0d246b469d3c1fae948088b",
"assets/assets/images/subemotion/Tired.svg": "e725a5dfa29844f87473a5db1c33c5ed",
"assets/assets/images/subemotion/Desperate_m.svg": "f3631662c95a240aad5f1027d0a14319",
"assets/assets/images/subemotion/Shocked_m.svg": "1411c44e54e612b1475c847c739af9e8",
"assets/assets/images/subemotion/Jealous_m.svg": "9f0e10e40bbf453404a9a5ba1570e2f7",
"assets/assets/images/subemotion/Proud_m.svg": "d2dc8712b5df756d0261c193e4ee65b8",
"assets/assets/images/subemotion/Tired_m.svg": "8322123fe0870c2c5f4128a34ccac5a8",
"assets/assets/images/subemotion/Balance.svg": "3632f29213243a01958458f8cd96e1a1",
"assets/assets/images/subemotion/Energetic_m.svg": "1908cdc12ab30a73ae5fbc66e69eda88",
"assets/assets/images/subemotion/Frustrated_m.svg": "524971b36189ad2bf033e9f6094cb9ef",
"assets/assets/images/subemotion/Irritated.svg": "956de75f370d4080fedabdac9fc3542f",
"assets/assets/images/subemotion/Lonely.svg": "40954be9f445d3c61a0d471b46c10935",
"assets/assets/images/subemotion/Weak.svg": "80de31e387edab230311ab28f5151247",
"assets/assets/images/subemotion/Sleepy.svg": "657799979f128b851c3a3c67affdee1c",
"assets/assets/images/subemotion/Dizzy_m.svg": "d30838b7942104683b61119050bd8ca5",
"assets/assets/images/bad_m.svg": "cc0d5e7b61298585d9c6b7b462b06f3b",
"assets/assets/images/bad.svg": "45004c6bce5d7bd151a5c5fac29c3f7b",
"assets/assets/images/people-o.svg": "e58d41c96b07473ce74e109eccf08453",
"assets/assets/images/needs.svg": "573a1d524c2e36a68299126fdc1fae5d",
"assets/assets/images/calm.svg": "c707eff47d83452afe9f5acf4a8c0524",
"assets/assets/images/eat.svg": "8198f4c91db93d4320e9e54ca413f70f",
"assets/assets/images/clean-1.svg": "d22143941b17e765345646a13be4183b",
"assets/assets/images/activities.svg": "15ef13f89bf096e24ec7dfec5666d944",
"assets/assets/images/logo.svg": "6657cee99fe087cdae771a2cb79717aa",
"assets/assets/images/fear.svg": "7d260812ff007bf0199fea204abfe75e",
"assets/assets/images/clean.svg": "862e0a0961bf7f62783fecaa2db537eb",
"assets/assets/images/anger.svg": "8bf73ae57a97da1fcdf6da5936d2d67c",
"assets/assets/images/calm_m.svg": "f1cf011a42604ad23f61b578b7435902",
"assets/assets/images/sleep-o.svg": "e0ead91fc752ac83112b6592576ff43a",
"assets/assets/disclaimer_de.md": "c3eb274e15a720f720a7b63b3c99e01e",
"assets/assets/icons/cal.svg": "d578c87ab5a2ac8b5a7754b7f3407735",
"assets/assets/icons/tasks/painting.svg": "7150101a676626f465399a675c7222bb",
"assets/assets/icons/tasks/buildingWithBlocks.svg": "a6e034191342edeca2878572463cb8e8",
"assets/assets/icons/tasks/readingABook.svg": "7b98334be80895ba31e6e0df11377b94",
"assets/assets/icons/tasks/puzzle.svg": "56a3402e3d8d1ebc8cbcf8f49d62fb7f",
"assets/assets/icons/tasks/resting.svg": "2abd29f6c9d2a294441aeba9c4760c69",
"assets/assets/icons/tasks/exploringTheGarden.svg": "e683141233c3cc060ddce66a2e330665",
"assets/assets/icons/tasks/goingToSchool.svg": "b26a5b91ffb6397c311d17893aece775",
"assets/assets/icons/tasks/washingHands.svg": "2a5a6b34f541a1a7d1146cc2fb6a4190",
"assets/assets/icons/tasks/feedingAPet.svg": "3a1f4df9dce3bf3e04e35a0da401e635",
"assets/assets/icons/tasks/eatingBreakfast.svg": "d7802f1a99345fe4fa2e700d0cecf613",
"assets/assets/icons/tasks/sleeping.svg": "745ca7fff9156d8cbc910a2c1d742e72",
"assets/assets/icons/tasks/ridingABike.svg": "5f663d2fe562c66f654c16ef2226dc78",
"assets/assets/icons/tasks/eatMeal.svg": "b853dd01774075a1857b9877970bbb32",
"assets/assets/icons/tasks/dancing.svg": "e182a7cce3287f5e4ba3be7a8772d48c",
"assets/assets/icons/tasks/walk.svg": "0611e711d8ea7cae50ad4e6f9c566dac",
"assets/assets/icons/tasks/brushingTeeth.svg": "d56f242ab6c4181f1ec709bea735da38",
"assets/assets/icons/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/assets/disclaimer.md": "fedf3d8e8cd989807de259404508e8b0",
"assets/assets/fonts/noto-color-emoji.ttf": "37e77bbb309de679a835cf8759b84cfc",
"assets/assets/fonts/ChalkboardSE-Light-01_0.ttf": "fccdec2b83c05832279fab276eedcdd6",
"assets/assets/fonts/chalkboardse.otf": "d59fb3d9e0f01f447cdf2a45aeaeac61",
"assets/assets/fonts/ChalkboardSE-Bold-03_0.ttf": "9ad9af29ece787cbb8201069960f43ac",
"assets/assets/fonts/ChalkboardSE-Regular-02_0.ttf": "654c8fa62d08c89490681b66c8ae944c",
"assets/assets/translations/de-DE.json": "aea161314ca3916f37fc1d4d328bd9bb",
"assets/assets/translations/en-US.json": "d4ba45b44610fd66754cf20055f1038f",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
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
