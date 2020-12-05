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
    "revision": "3d3ccbafb7e0cf4a581c7959b0fa2173"
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
    "url": "assets/js/10.5aa42229.js",
    "revision": "1affb491332b8eaf69ec31a49ee5f6c7"
  },
  {
    "url": "assets/js/11.bf5c2793.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.75c3b172.js",
    "revision": "5cdc6c834529a39e20bd2a108740b74a"
  },
  {
    "url": "assets/js/13.b693d485.js",
    "revision": "303312c3dde9568f01e32fa317b792f1"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.c6b73629.js",
    "revision": "eaf583c12c1ed38520e4aafb781895ea"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.b97569a3.js",
    "revision": "6a5c59873d5080828775a8031473094b"
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
    "url": "assets/js/8.be35fe1e.js",
    "revision": "c20ec6fcc4f604c789877aa83db0eb17"
  },
  {
    "url": "assets/js/9.c3a78e2b.js",
    "revision": "51838dc526573a0952f84e1e20573edb"
  },
  {
    "url": "assets/js/app.1855a7a5.js",
    "revision": "61c38c4a5e1c7e6d81709a656c924f69"
  },
  {
    "url": "index.html",
    "revision": "3f1f47027b4619567d12fbe93acb48e3"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "res/703/eat7.png",
    "revision": "1ebbd0a85474b624433f47efe396bcf0"
  },
  {
    "url": "res/703/eat8.jpg",
    "revision": "df9a86df8b43f55e0e1a0db995c02adb"
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
    "url": "res/ddd/1.jpg",
    "revision": "3958b285d07f86ad5e48e7214e0e4ee7"
  },
  {
    "url": "res/ddd/2.jpg",
    "revision": "0483c24078bfb3e2833a3eff8cc689dd"
  },
  {
    "url": "res/ddd/3.jpg",
    "revision": "1b6ca4bf6149ecbcf3f6304dddc2bf0f"
  },
  {
    "url": "res/ddd/4.jpg",
    "revision": "af48474787626e9bd9e7a18fe5dc9d4c"
  },
  {
    "url": "res/ddd/5.jpg",
    "revision": "3239840ff7fd50774c4dd098c8b00045"
  },
  {
    "url": "res/ddd/6.jpg",
    "revision": "3998511cff1d9869d9c2b70256fe4e24"
  },
  {
    "url": "res/ddd/7.jpg",
    "revision": "883ef96201d947f5f473634da3549dc7"
  },
  {
    "url": "res/develop/bqr.png",
    "revision": "4a90ac0068942cd0701b72746c3306cf"
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
    "revision": "f9f6d880c13823a2ff1a7d8530125bdb"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "d8666532991c19a8a16c8e093480e2ee"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "da83f3de000f9e316d174b10261a568a"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "c7c879248daccefa691117c9cc751ef4"
  },
  {
    "url": "zh/punch-in12.html",
    "revision": "13faa09cde615e9d5f36a7bf5c81feac"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "f2cf19550bfb25ff48cdd24a70817273"
  },
  {
    "url": "zh/task-list.html",
    "revision": "7fcfeaad4df90d14a6899f36b8d4b109"
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
