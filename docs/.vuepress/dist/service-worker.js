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
    "revision": "b98a331b6be6f77f8e3f33d13e121ef0"
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
    "url": "assets/js/10.1ccd38b6.js",
    "revision": "08d4c1ba101eebaf02a756c7e13aa1ce"
  },
  {
    "url": "assets/js/11.caf28edc.js",
    "revision": "3bcdda5d90d5690f0e1a5c0b7116859a"
  },
  {
    "url": "assets/js/12.b7a53a6d.js",
    "revision": "d41e6f17e3b90fa568fc2fc70bd7d641"
  },
  {
    "url": "assets/js/2.45ee2b13.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.901dec8f.js",
    "revision": "90fbddaaf63de691757b99f06699a302"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.808f269f.js",
    "revision": "896eb32dccf41195caeaaf859dfa2541"
  },
  {
    "url": "assets/js/6.18cc5f5f.js",
    "revision": "98078a9995db23f594ddd1171bdedfa1"
  },
  {
    "url": "assets/js/7.83d71581.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.eb8df736.js",
    "revision": "c20ec6fcc4f604c789877aa83db0eb17"
  },
  {
    "url": "assets/js/9.aa9c258e.js",
    "revision": "fb7fafccf080874d8fb53c4148744ef7"
  },
  {
    "url": "assets/js/app.49478b8e.js",
    "revision": "fb9d8673a1bd4aea5b1f678af8030ad6"
  },
  {
    "url": "index.html",
    "revision": "0541d496994d7c776e1a3ab2d1360509"
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
    "revision": "a52ec7916dd790d7ac0c7eef5512d9bf"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "8bdc4542c0976616cf42046437f9373c"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "2c569ee6ace0a1f5d3014e66f58a6fa2"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "cf4356fae7015219f57700b502786cad"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "094a38272ef272bc4bc26eecd399774d"
  },
  {
    "url": "zh/task-list.html",
    "revision": "c77a03450439730d9decacd7d590bb61"
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
