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
    "revision": "fe259ab868af1d186a43dec7baed7af5"
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
    "url": "assets/js/5.8027a439.js",
    "revision": "7a4ccbb1051257c4c3f6f5b9325f9ee3"
  },
  {
    "url": "assets/js/6.daee0d88.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.75cd18fd.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.c789f537.js",
    "revision": "706ef9e37a5594d1fe1c0713577e897f"
  },
  {
    "url": "assets/js/9.07cc4cba.js",
    "revision": "7d6e9713c9927059307c31427925d278"
  },
  {
    "url": "assets/js/app.6bf8d0e8.js",
    "revision": "5639d8d3875373d99d181e65dcb7f8d6"
  },
  {
    "url": "index.html",
    "revision": "1d7c892fe9b8369ee7ad056b572b2aae"
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
    "revision": "08e270c38bfd8de8cc3037d769487596"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "d92f8b44552a107f335037ec2ac7564b"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "f4952bf13aca98bf27d92fdd92a5c706"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "4e27d08d964f183d47fc7ca0e785771c"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "32d04ee507af397df834ca78d52a2207"
  },
  {
    "url": "zh/task-list.html",
    "revision": "014ad2a8b8368892f889b30eebfc37b1"
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
