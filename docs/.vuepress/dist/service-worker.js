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
    "revision": "387e40e07f6f31ed46c6e89ad0a5d7bb"
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
    "url": "assets/js/5.8ad3997b.js",
    "revision": "42b6ddf0652f52653b480166b3c015fa"
  },
  {
    "url": "assets/js/6.e154685e.js",
    "revision": "1225fd0924466a37cb63985aef4dd97e"
  },
  {
    "url": "assets/js/7.a10b5f8d.js",
    "revision": "d075037e7d1f9a0cd429bb4bd948f1f6"
  },
  {
    "url": "assets/js/8.5da7bfaf.js",
    "revision": "d2cef770929542a77a2b10f58e5983bc"
  },
  {
    "url": "assets/js/9.7fb5c785.js",
    "revision": "424a9c0041060e2eb95d6f00326a9c0f"
  },
  {
    "url": "assets/js/app.3af13c16.js",
    "revision": "96cc5b6a2a000458d2f12fdd1f4495c5"
  },
  {
    "url": "index.html",
    "revision": "98c6f811229e594b214f3aa0df4f9a6e"
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
    "revision": "b145adc89d2ca165f0c0f5cb50307172"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "52b2c649a3338eab2c0949e861124a0d"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "2cba30b989cf327362b1d7c9356a09d3"
  },
  {
    "url": "zh/task-list.html",
    "revision": "190b7a8f18e99c55ad14c41ad11f06d8"
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
