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
    "revision": "3e12f6b2c0c6aac00b099ee9e263afec"
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
    "url": "assets/js/5.37e884d8.js",
    "revision": "5da83e6f58942bbf88b1eb890711eb3d"
  },
  {
    "url": "assets/js/6.345bc9e9.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.e2a50f64.js",
    "revision": "267c3ba4e32c55456169877a08c4f9cd"
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
    "url": "assets/js/app.9c92f867.js",
    "revision": "0817c909cf35158ed8c7c786e324617d"
  },
  {
    "url": "index.html",
    "revision": "5f74c7f94e432176f94f45f93bb8f937"
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
    "revision": "7660043db29f99cd91e4783e63fb6e1c"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "4273a7ceeac76d389759ea2cc688310d"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "4d00a24826659db27a72e7332a8eece4"
  },
  {
    "url": "zh/task-list.html",
    "revision": "e3a0a31c500455aff55e3f0313d03825"
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
