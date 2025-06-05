'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2109104fd52a83903f3707c339eff27a",
"index.html": "1f8a92f0b4eb0d9d704b5f8c15af4f48",
"/": "1f8a92f0b4eb0d9d704b5f8c15af4f48",
"main.dart.js": "c503bc45609d3fccfd62c45683a4ace1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a699045506e73c007fa9f568fdab4f0e",
".git/ORIG_HEAD": "a27049b2dff6385ef44fccc1a780475e",
".git/config": "d0ba6e735fc881cf067a177eece7221d",
".git/objects/95/ccc724a3cfcba0f9886f3a5b7aaa8d03d51ec2": "f99731298ecdfc279508ba78995ab10a",
".git/objects/57/6f273c6e104d4c5734279d84f7c9ee060c4990": "3720929e8fa108e3e8b2adb83da7100d",
".git/objects/6f/30b9809aec5d23e2e6452515e053533ace10da": "ad513e8d5961bca2ecd97c63fc11d3a1",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "1f07953230fb06b91b96a029dfdcedf9",
".git/objects/03/632c2b9eb7ac5bc76a2dffdf299b29b9ac6122": "3af70bdb5cbb28df2668940a2769907a",
".git/objects/69/55e32c7dd0f12963166f6eda691bc8299be851": "96580204cde670c08db17269893b89ca",
".git/objects/58/b866d0f6647bd73a74d8e3424bac9192b4d063": "0a81ab8e6164d4124b0ab250459703ee",
".git/objects/93/6acb6b07b35bb8f4f196a715bd1a668a03c5cc": "046616f05c58bbbc92813fa221f2a116",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "6448e47fe7916870b05cec66163f80e8",
".git/objects/60/280da9ac7f0432377b73f1ea6e8d1d2a2986db": "1c366f0c4e35350d2856aff49ed0bbd3",
".git/objects/5a/7903a2e932514699c2ca7fc00732a9b4148d56": "2f356c4824fb6fadab76d5c8fbf8aaea",
".git/objects/02/fa0cb5833ae30a6dd5d3a7241e8103ac1a411f": "ef2e0c191d326f9c4c26758e45ffce72",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "562b4691dbb70c6ac4c6280aa875e0ba",
".git/objects/d9/8ec38fc504e55c0c65df162fb7172f0c0c8ca0": "9b1405d46a688f7318138a27a04c552c",
".git/objects/d7/2023ead03ce3835ea4b7164b378b8ac878d057": "82288a4c4ae5260be82308c3d5336f79",
".git/objects/b3/718674a31a3ecce3abf3d5b004dbf67800bcba": "f063b488548ebb09ebffabe117e82095",
".git/objects/df/762d332f2cb891181e42fe2c078ac1b47c2096": "570acb596d202ae6317eb0212ab19038",
".git/objects/da/21ab19fb8365671b4bba22196412d9e4a09b85": "8d623562d472b341ec087f0b152db716",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d8/8f30a0f07b92bb41b7e01dfb8fad58328369b1": "f72b2fc935cb12b5e2d2f2e61d7b4443",
".git/objects/f4/a31db56686ac58c8df7970967c175a87945062": "6270185993d8cde384f73021a1cfa184",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/eb/b08b8083a1d79b71f7292d0e227f9f9ad6331c": "fa2c0e9c7e71e20ec1aefd46c8d9bd84",
".git/objects/c7/fd7a76865db865f5f2f683ebb92c2277f1eab8": "a4e4c0e97c7d879288e7f604b2b66279",
".git/objects/c7/4b4bd40b01661de4cd08c953e863c7e83b960c": "d51a4973503c4d94e4f9e9e064758e00",
".git/objects/fc/41c34dbe2e696a31300c117c315f3e7460fe1e": "fc7e6adaa19a5f84764ea86c66556082",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/ed/08e649ce706be97e7d4dbc62320f33fe7f9ca4": "12efddc71521d364c02d10aad204f0f5",
".git/objects/4e/1b085dfade7daa03e81d11527c1152940413c7": "3f697867501248d481102ebc26c52036",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "9fa371a1c5b7c62935038b95ef3ddb53",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "d48270e2c378e85d9f87a9765175c14e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "d9990b1f93d0c695a24c970b0ad191ff",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "524194f0fb5c54751c7ae5482cc5134b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/10/c8b0b0164353bdfee2de4ae0548d28c8fe3393": "1aaf470a1193c7cc2fb7d145c3f9b137",
".git/objects/10/09072018684afe81576672c69dbe0211bc8cdb": "80a8afc128dc20c71be151466239d5d3",
".git/objects/4c/e36dc576398505048bf3eeac39c2be74b5bc62": "6b576210bc4b8fa089f8ac1b02658725",
".git/objects/86/eddc80e79e47f8cd7324ea695e540c2ae6243b": "031a70898e7ce490cb98ee87226e0f29",
".git/objects/72/72c57a5a40dbf70cd94b10fa8006804ca7d3ce": "f849f0d8857aacfc692618d61ddaf22a",
".git/objects/72/0fbdef62dfebbe120e2e92f6e6d8319cd49659": "f665c80e38788b8f1267f8989ea666ab",
".git/objects/44/952fa6583d097e2c82c5a1d2bcd241fc6c5860": "2ed9520f2630f7623a79fc49813dc8d1",
".git/objects/2a/145da8e2aef8902e9e499937df1c93dcd1921e": "fa1f20ffea65f765d44efb3dd35ec23f",
".git/objects/2a/e848d22c690a03a06a158298edeba485cbbee4": "0a60d59544a05d7085ce1f1da481086c",
".git/objects/43/02fa37bf1c1bed01da59b7f7e64a5266e8c533": "53bfcc550a07146d1975b825603f3de9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "4f7f5b37c5c162544fb3266dd6167865",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "3408db6561ac84daa2a07ff0a27ca057",
".git/objects/09/f8e8d5905a4694fe53f9df3be91bd24aff5c56": "46af9ed455a03c1ab80a63b484a24981",
".git/objects/08/a53c08a6e734c07b189550e34953621eb5e6ca": "e4ec980c5c54ebc743341cb2c7e2319d",
".git/objects/08/3a73f2cccfbdbea3cbf8a8eac72f8d00d95cf9": "5503784e9a3140ac20a2276c8e8cc9fe",
".git/objects/97/b1af4132fc094e32ac4151d07fc2bd894de108": "d7f30f815364e73c00b5c42b590e24ea",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/a0/a2195bcf5e0dea85d709892aa4211215e59f2a": "92236d4f86812429d6badbc29004813c",
".git/objects/a7/1f9b23f685ca42235a1d56f1719644f2f7e9a5": "3502d5282cd02ca82beb3a3fcf318b45",
".git/objects/b8/f591d6d33e755fccda252ff7743f3d73a1ce9a": "d0d90271db951d138d1140b3eda6a795",
".git/objects/d5/46d21cf1a6555cfe2ec45ecbfa74f9fe179b20": "338b9c3bb787bb4b358d1aa52da7cfcd",
".git/objects/d5/fd79fe0b74d35d6ef9e2e8c991910c9039f2a3": "70d75e045f73dc796e59958beca54a0a",
".git/objects/d5/79a72a7a724a3ab86b22ae54a50d58044b1cd7": "1f796d499a70640a46e98f0fc7774978",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "9b40e743beff9e546cc99dec7511e63e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/db/954e06da6cdf49a95ade1f581b33aea9913e3d": "4e568a443cc2b4021198ace7679f5c9a",
".git/objects/b0/132c384379d6861b12142357ce35e4edb18d99": "4d4352ce61bb629c351f5ed1581712d0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/ef/6aa2cf6edbe2f5b7532340c86d891738e4a0ef": "d395e4af1c5e3b575f30ff550d0c0865",
".git/objects/c3/9cbccbc6b64d3009ed8b262f41f769bcfbea8d": "90f1b1ba4884f0db7c168f5d84b83fb5",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "93175eef2ad959ab13c1092d00a4bfb1",
".git/objects/e6/a33c96e5bfa4152a775102c5a0ded77973e781": "57310fcea1b059c3336b3caa301a71e2",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "8819d39d02ab48574c6a82770a54e602",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "6b778e1b2cbd2f0151ad9611b262c77d",
".git/objects/e9/a3b6681b0a1b0fcd0d95eba5cd634ddd0951d2": "c3ea1ddf2825b8e9793ab14a0f1ca5f1",
".git/objects/cb/96e9db8ded1968406b0fb0a0c99a147c1563b5": "cb536e5787e59e3d69e86dcf372d44ef",
".git/objects/cb/ea53af3400409323690832555935453ae78130": "aea8f2bb38cd7ce6c7e58c798f7ffd9d",
".git/objects/ce/457a5bc08e6bed78159a6d7edf6d910d36d7b8": "62d99e984ce763d776707937f59b969d",
".git/objects/2c/6351072680f151b7237289c91dc4e41ebf2bf6": "4d7b9cd757ae2ee76df126e62aa6b4d7",
".git/objects/2c/42d6f6a08650f5cdf961a65cacced38c442b93": "a360f0a624428ce1d85751bfb619dd5c",
".git/objects/77/fd431915fe291ab1147f6004e50a7fd46011e6": "31cb5a9537bfe855f640cc1662842d25",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "cd09e4369341889fd3fc34d8dbc2a61e",
".git/objects/15/9811b3847d5390d491a6502228fdb24d368fdc": "cdfc8ea8d9122262979588cfc39dfb69",
".git/objects/85/482cb8e304620430cef9a987773f1154cc98d2": "2b250bd60abde6f20149473bb25b94df",
".git/objects/1d/f3a50e678e86657ca75d00ae615b197c286261": "af5301c2e4aadb263e49770d38e05771",
".git/objects/71/7d49735c0acb1d531945aee80fc8296df24fcb": "9fed54fd7943b3c50777506720b76f03",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "75fabb0279e894d6e8284fcb83093ec6",
".git/objects/76/9b14f5632d0758a2a6bdcef88989822a47a27b": "50b41cf107847ef68634888c605207a0",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "bc0075e0f4d4cf11a95917cbb61f859f",
".git/objects/78/0175b1dfa2378cb611fefbff00538876dcd9b4": "0d0501b1d1743c5588bad6f2008c77a6",
".git/objects/8e/d731081c7c522396eb612c8ec601e818227d62": "5504a61786cc415bc9d718dedb22357f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93b7b722bd876ab368a015bc0fc93b54",
".git/logs/refs/heads/main": "93b7b722bd876ab368a015bc0fc93b54",
".git/logs/refs/remotes/origin/main": "0d90e134c63f2d0cc18f9e71bf840e15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a27049b2dff6385ef44fccc1a780475e",
".git/refs/remotes/origin/main": "a27049b2dff6385ef44fccc1a780475e",
".git/index": "b5fea23148527fc2508a311c6670649b",
".git/COMMIT_EDITMSG": "91626d4586de66af373a8d725c5d49e8",
".git/FETCH_HEAD": "0e5dd24776825010cb13aedd3b823ff8",
"assets/AssetManifest.json": "244af72172079f448fe810b2c04e50ac",
"assets/pdf/resume.pdf": "45088ca0c269d709fae9f27cc08aaa5a",
"assets/NOTICES": "b728df091216975e8696ad851e4e2969",
"assets/FontManifest.json": "e886d00e9346564e3ea4d65eb1ab1d4c",
"assets/AssetManifest.bin.json": "bf8600e52c30ab46d19e81eba74bff66",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7a5e79c9c7d793f3b742c67fa428a2f",
"assets/fonts/MaterialIcons-Regular.otf": "6809be91dd53af02a17205b66a9b8a44",
"assets/assets/images/pdf_logo.png": "294e1877aee8bb4b763be3612d0ab00d",
"assets/assets/images/logo.png": "67a9586489143e7c051443f228549906",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
