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
    "revision": "211972cc08d3f254cafd09d19c1f2976"
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
    "url": "assets/js/10.2c1cbe65.js",
    "revision": "16a08b96ee27303290226440d6de494f"
  },
  {
    "url": "assets/js/11.a3fe53e2.js",
    "revision": "6070417aa63e75e79a049f43f663fddd"
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
    "url": "assets/js/5.06cd28dc.js",
    "revision": "fc023c17f1c1f88a48d459458f3a364d"
  },
  {
    "url": "assets/js/6.fda50b54.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.b9090614.js",
    "revision": "5ed0b707c03ecc74347d165b20b21159"
  },
  {
    "url": "assets/js/8.acd8b421.js",
    "revision": "22d4b7ad00ba2bd85d718998e5225b4b"
  },
  {
    "url": "assets/js/9.23ec9a2c.js",
    "revision": "1ef4ea1879fbe4b56e891efc5d72a5be"
  },
  {
    "url": "assets/js/app.27e8bd36.js",
    "revision": "b12397cbae28ccdcbc956e939645db7d"
  },
  {
    "url": "index.html",
    "revision": "e9046c96fb55ec0832da88a0850418cf"
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
    "revision": "551645bc89dc857eea9c27f416fc32df"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "f93172f2352b948d8ea0f72e8f940aed"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "b27e8ba409306be63d4f55a6af4e7f8c"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "0722878e59403984945dfe3d7f4a9c10"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "0b3bb3baabf4d4ff31f98e968cb2f2a6"
  },
  {
    "url": "zh/task-list.html",
    "revision": "593a1783173723adf70fb757d7248486"
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
