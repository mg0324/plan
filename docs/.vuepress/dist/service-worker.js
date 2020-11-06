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
    "revision": "ff37ed5e24eedfbd5cd067038ffefd29"
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
    "url": "assets/js/11.8231ecd8.js",
    "revision": "6aa7a16702cb372460f891bffe34201f"
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
    "url": "assets/js/5.4fa7f395.js",
    "revision": "bd4690f25e6c4f0b144885a2072480b2"
  },
  {
    "url": "assets/js/6.e154685e.js",
    "revision": "1225fd0924466a37cb63985aef4dd97e"
  },
  {
    "url": "assets/js/7.95a8eab3.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.7a9f8778.js",
    "revision": "c7a70ab0dfb6d1c347b217a9dc583d51"
  },
  {
    "url": "assets/js/9.aa9c258e.js",
    "revision": "fb7fafccf080874d8fb53c4148744ef7"
  },
  {
    "url": "assets/js/app.a1ff39d2.js",
    "revision": "64b4917f984f0fb68f1a4e7d8b8e9df0"
  },
  {
    "url": "index.html",
    "revision": "7023599b50be3708a0eac2806f0e8d83"
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
    "revision": "f12b1da9fbab082dde7af62fcf0e9ae7"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "b57598afd815ad41840cc37c27efd779"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "e8e1e4e8e43a935d38f1a4f718a161e0"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "d1bcd1431dba582aef1aafadcfb828eb"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "b207f30d2acc4c908337e370f901e620"
  },
  {
    "url": "zh/task-list.html",
    "revision": "da82966f232b76297a8686df3a258bdb"
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
