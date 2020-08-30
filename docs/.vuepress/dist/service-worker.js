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
    "revision": "f40bb89fc59a23fc558b71b1dc5fac99"
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
    "url": "assets/js/2.45ee2b13.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.6efc51c8.js",
    "revision": "cca62ce3a37709fa418ff3f60ad3ba4d"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.8e8d6789.js",
    "revision": "ce3fe6bd8b2718b06e84afe3d08bffe3"
  },
  {
    "url": "assets/js/6.345bc9e9.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.85a3b4fc.js",
    "revision": "5a7c274db1182f0ea0d7784ce44cd1ac"
  },
  {
    "url": "assets/js/8.78bf2535.js",
    "revision": "e27fe8368d9bd291a560e9675144b097"
  },
  {
    "url": "assets/js/9.c464c726.js",
    "revision": "64819ac4e26c1b86009d300e5f468f67"
  },
  {
    "url": "assets/js/app.37729590.js",
    "revision": "590b93a715794b6c86a63fc473323390"
  },
  {
    "url": "index.html",
    "revision": "8ceeef4feb3215b2a70aaaa46f4cc7be"
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
    "url": "res/kafka-mutli-art.png",
    "revision": "e95eea3296d84f88efc4a0426f1f8a9a"
  },
  {
    "url": "res/mango.png",
    "revision": "aa27f8181c9bd52ccad37aafec4dfd89"
  },
  {
    "url": "zh/punch-in.html",
    "revision": "6df7f9f56686b50bdceb7f2ae50f0666"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "a94d029abd4e7b128ad05a04e0fae203"
  },
  {
    "url": "zh/task-list.html",
    "revision": "6a9674be8d622c3e14da59c3156ae97e"
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
