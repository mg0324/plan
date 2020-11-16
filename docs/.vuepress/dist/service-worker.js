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
    "revision": "3db1d77de28920ef9c2314dba44f151c"
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
    "url": "assets/js/10.87dc1bb4.js",
    "revision": "16a08b96ee27303290226440d6de494f"
  },
  {
    "url": "assets/js/11.b1429e12.js",
    "revision": "85322bd8e03cd90ca77301cb06e38425"
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
    "url": "assets/js/5.8bb958ce.js",
    "revision": "3d320519706d6d26fe7c4c342f14d3ac"
  },
  {
    "url": "assets/js/6.3cfe065e.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.2676d7d5.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.9a508de5.js",
    "revision": "fc69b6cc9fcd7a4eba62ffe69eb0e0d2"
  },
  {
    "url": "assets/js/9.b6e0e9c7.js",
    "revision": "800392c84c4b562a4d5adad5c6790d24"
  },
  {
    "url": "assets/js/app.893d1e40.js",
    "revision": "3291b1f003cfa4da04ff390e4f9f9c10"
  },
  {
    "url": "index.html",
    "revision": "178e81e507510b4acbdfcc10be5a3f89"
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
    "revision": "70f064ce72baafc27d5a4c42a6132588"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "bfa87cb6bab98f9c08c3126e853eb4bd"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "c0363c52ca5db3ba6d65888701f67ec9"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "d0e17cb9a3f623651541aea9ecb11841"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "bfef48538877e2f27a72ebc2da2f0093"
  },
  {
    "url": "zh/task-list.html",
    "revision": "946aad914521bc317adafc8074ddd944"
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
