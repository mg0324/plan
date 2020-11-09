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
    "revision": "531f03831af292b88e5ffed6f2e33c0d"
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
    "url": "assets/js/10.0d6b0898.js",
    "revision": "b0e8c6f0d6f83dbdea70881512586f0a"
  },
  {
    "url": "assets/js/11.0fe322f2.js",
    "revision": "3f3d1420dc80a5f89a18b4d5542b1f7f"
  },
  {
    "url": "assets/js/12.b7a53a6d.js",
    "revision": "d41e6f17e3b90fa568fc2fc70bd7d641"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.901dec8f.js",
    "revision": "90fbddaaf63de691757b99f06699a302"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.7d27055d.js",
    "revision": "5c91e130b6f6598d86fdfeb5db52955a"
  },
  {
    "url": "assets/js/6.96f596ca.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.2676d7d5.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.6d2a3436.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.a3c4f08c.js",
    "revision": "cf3e0a7c69942f255c1d0b13d62c36c4"
  },
  {
    "url": "assets/js/app.236d4b81.js",
    "revision": "dd39f0dae3e7741573b73339b71251b8"
  },
  {
    "url": "index.html",
    "revision": "073d1092d49454d50a88fb88b67c66ce"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "res/byy.jpg",
    "revision": "cbc63330e435c09be5f9674804572c16"
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
    "url": "res/dinner.jpg",
    "revision": "875fe5c8110e28f1528122d313ed44c2"
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
    "url": "res/wmdjz.jpg",
    "revision": "e479b3b03228230d9adcf538e1b839fb"
  },
  {
    "url": "zh/punch-in.html",
    "revision": "eb877040d5a854e8626474a8d69c0960"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "08b9910d7f5b08f7da56c2d06e9d4cad"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "78f9edec5a4d3ea0f564927980fe2870"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "b85cfdd468d76e6fc27b061614c75f4f"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "dac3448e09e632f5d52255adc6702c08"
  },
  {
    "url": "zh/task-list.html",
    "revision": "533f793d06c7416d5d460ecc8aa6c138"
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
