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
    "revision": "74f65f8074537e3b7399a4ff68d5e52c"
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
    "url": "assets/js/10.0d523797.js",
    "revision": "d3844d070a00ee73bfc700433d6272e2"
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
    "url": "assets/js/5.a9775326.js",
    "revision": "618f300cc9fcc0d1f669a6e587124970"
  },
  {
    "url": "assets/js/6.daee0d88.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.2764a4a0.js",
    "revision": "8dcdcefbc6d1d792def41fdb0af9579e"
  },
  {
    "url": "assets/js/8.99f3ff09.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.362b9498.js",
    "revision": "0fb9d97a4b1023e3f70a9560dea56ade"
  },
  {
    "url": "assets/js/app.16d76a58.js",
    "revision": "7f5d04266263086920e6bfec56fd15a2"
  },
  {
    "url": "index.html",
    "revision": "1994bde662f6aefa03fd7e2d70a28846"
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
    "revision": "7a38d13bf1effb4d056cc701ff8ced4d"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "a16e25b4be94fd42f89c4ac4200225db"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "8018d1d5d4c34450efbe659deae4820a"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "5bad552b72b5e5abd3096dddca06bf40"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "ca6c38f2c60ab1fc59658a0b30d7e581"
  },
  {
    "url": "zh/task-list.html",
    "revision": "49fa5ed0879f28d1dc88327a01fb0831"
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
