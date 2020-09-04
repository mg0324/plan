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
    "revision": "71207892aaab8ac22185d07370cf046a"
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
    "url": "assets/js/5.0533420a.js",
    "revision": "64d7a84cd8c019cc0d5848ff715c8760"
  },
  {
    "url": "assets/js/6.fda50b54.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.204a7e08.js",
    "revision": "9d0eba48aa9a429d3f674612a8c72d39"
  },
  {
    "url": "assets/js/8.cb6a0f3e.js",
    "revision": "ca8a2279ab97ff784f4a1cb894260a69"
  },
  {
    "url": "assets/js/9.36e25ad4.js",
    "revision": "687d75e051ab7e91fd7bda07ca3bbe63"
  },
  {
    "url": "assets/js/app.f14e0456.js",
    "revision": "b93f91ffe0aaa78393289561e4d864c7"
  },
  {
    "url": "index.html",
    "revision": "2d79835375404fe239feba52a5ada58b"
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
    "revision": "74a702b074aef8b95b835725dfacacfb"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "981af581ac22097d71f5a27714e2d713"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "bce7186a0854160811a186dc6a436ffd"
  },
  {
    "url": "zh/task-list.html",
    "revision": "1d313173b8baab5c198c51a0066054d4"
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
