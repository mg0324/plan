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
    "revision": "5d0597bb86ef68e74dd473edede2009c"
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
    "url": "assets/js/3.c28f3669.js",
    "revision": "1c5fbe74f1918db01867963b629d3415"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.cda75187.js",
    "revision": "a0e1a4979538831241607518f5bb6d5e"
  },
  {
    "url": "assets/js/6.1e9da385.js",
    "revision": "40ab3dfba047718ecaa9ddd23ac4b318"
  },
  {
    "url": "assets/js/7.4edc3b44.js",
    "revision": "402500fa699239ca24677e4533cdac3f"
  },
  {
    "url": "assets/js/8.7afca2fa.js",
    "revision": "7db422c6db3dbec638d878b11ff0cb8f"
  },
  {
    "url": "assets/js/app.c53d0a11.js",
    "revision": "d7d25d869d3127f40710e5942fd32542"
  },
  {
    "url": "index.html",
    "revision": "2589fbde504845d673d38ba245e958f7"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
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
    "url": "zh/punch-in.html",
    "revision": "6905463dfbd82d83b3dfdb4aabee3849"
  },
  {
    "url": "zh/task-list.html",
    "revision": "808cfb50fb871027771224383aef6c28"
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
