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
    "revision": "c8fa4f6b57044e55b123b42da04aaa13"
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
    "url": "assets/js/10.4b9e8e85.js",
    "revision": "c5cea8d896db27cc828a1b101e2005de"
  },
  {
    "url": "assets/js/11.d68c3895.js",
    "revision": "a6157cef4466418b91ae747a8d86b8b9"
  },
  {
    "url": "assets/js/2.45ee2b13.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.3a2f81ea.js",
    "revision": "5a4876a630988f10369d539ad2dddaaf"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.1590a7db.js",
    "revision": "9b0c18fd01adbf4a097b03ed2452ac09"
  },
  {
    "url": "assets/js/6.9eaf819d.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.95a8eab3.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.7bc813eb.js",
    "revision": "387f9bcecb109b3373c3017b17aa0943"
  },
  {
    "url": "assets/js/9.bb0adb13.js",
    "revision": "c0f360589a72ec1f091b92f9ddad9c42"
  },
  {
    "url": "assets/js/app.1e984eed.js",
    "revision": "3a31368b25f73085103a4a96af67d7ec"
  },
  {
    "url": "index.html",
    "revision": "bc31d5755349373162296022d674bc9e"
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
    "revision": "56b47291ec368d91286615137da61df8"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "607b3e8286385e5bd06622eac29d7330"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "89b43be7d25cd64cf6b3a56343d797ad"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "e3d81c5ff9855783f6efd23f79c9b65d"
  },
  {
    "url": "zh/task-list.html",
    "revision": "e6610c616cd7800ab3bd2e8505b59e55"
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
