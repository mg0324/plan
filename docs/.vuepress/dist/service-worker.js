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
    "revision": "b47b8cef63c0a3837aedd4c3ecaf393c"
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
    "url": "assets/js/10.050bb62a.js",
    "revision": "d4a92c69cd0be1c5c3404e77523ad33c"
  },
  {
    "url": "assets/js/11.5f050fc2.js",
    "revision": "8967909948aeb2a3dde77f3c9697361d"
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
    "url": "assets/js/5.47927c45.js",
    "revision": "f7b535f6f9d404264e8914433c3f8aa8"
  },
  {
    "url": "assets/js/6.daee0d88.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.78527efd.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.7a9f8778.js",
    "revision": "c7a70ab0dfb6d1c347b217a9dc583d51"
  },
  {
    "url": "assets/js/9.76d81ffc.js",
    "revision": "501ed09edb61dc451c70ccd6185a4743"
  },
  {
    "url": "assets/js/app.a2bc69a8.js",
    "revision": "2009f4ded6b960ee760740521bdc247e"
  },
  {
    "url": "index.html",
    "revision": "6d43d13431f145ee9125dcf6b9534fc2"
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
    "revision": "1e82250191d7ec3e424413eed9758187"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "325548ab5f9b59518ae7a26483515046"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "ecebd291e5de6f49bde81b9cda84d7d7"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "72e7da3bcfd4abdec0eb4fad614aa944"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "1813b546ad4abca3ef9c9102f111bf7b"
  },
  {
    "url": "zh/task-list.html",
    "revision": "e4ba2678ccc8850d3d58923fc0d028ef"
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
