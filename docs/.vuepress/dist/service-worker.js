/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d82000a1b25bbb03f829ee67d58f5485"
  },
  {
    "url": "ahead.jpg",
    "revision": "cdff059f63107aaaf311766c01259ca5"
  },
  {
    "url": "assets/css/0.styles.cc301670.css",
    "revision": "197ae22fee04c59fb7eebed565d28d4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3c41b142.js",
    "revision": "93f3939cda3d947394792949f171fccc"
  },
  {
    "url": "assets/js/2.45ee2b13.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.24d3326c.js",
    "revision": "ce7e04d84bc887eb339ae59b95f6b0e1"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.940c0336.js",
    "revision": "029e00d04070024cb42549f199423b6c"
  },
  {
    "url": "assets/js/6.9eaf819d.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.c88be2f8.js",
    "revision": "ff67a22c98663bf1b1ab89d84781c6b2"
  },
  {
    "url": "assets/js/8.5957cfee.js",
    "revision": "00451ba4b8774dcbbdbb1121c264f4dc"
  },
  {
    "url": "assets/js/9.36e25ad4.js",
    "revision": "687d75e051ab7e91fd7bda07ca3bbe63"
  },
  {
    "url": "assets/js/app.c84d77db.js",
    "revision": "6c951dbea82b6fddd35d3140dba26998"
  },
  {
    "url": "index.html",
    "revision": "b6c52b347485e4701abb5ccbe2b37990"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "res/card-db-2.0.png",
    "revision": "72cabcaa3c587c7e04661c4634d3842c"
  },
  {
    "url": "res/card-xmind.png",
    "revision": "4daa9e3158e937a86c13e6671c52ccc7"
  },
  {
    "url": "res/card1.png",
    "revision": "08effeec1cc6b83623952cfd4088e399"
  },
  {
    "url": "res/card2.png",
    "revision": "d9ef2759f18d4b8ee2c1355502a051ab"
  },
  {
    "url": "res/cy.png",
    "revision": "7849aafe0d07d37a3102a8a54aef2168"
  },
  {
    "url": "res/kafka-mutli-art.png",
    "revision": "e95eea3296d84f88efc4a0426f1f8a9a"
  },
  {
    "url": "res/mango.png",
    "revision": "aa27f8181c9bd52ccad37aafec4dfd89"
  },
  {
    "url": "zh/punch-in.html",
    "revision": "8b74c737894ddaa572964acc4136e798"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "7a27f5fb96a6e650010cae9e2d44e676"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "972a0f119aee6e45e5eb7e43005864fe"
  },
  {
    "url": "zh/task-list.html",
    "revision": "5d2c9ca9e0ee886190015f037a8b22a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
