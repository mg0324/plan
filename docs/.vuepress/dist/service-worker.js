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
    "revision": "222fcfca93b34109963e8e17c036b155"
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
    "url": "assets/js/10.49fedadc.js",
    "revision": "bbd18b1fa5b3b0cd3758bb4b85996611"
  },
  {
    "url": "assets/js/11.64cac103.js",
    "revision": "bf79c1df6e9f3ea7f85cc65f3599cd69"
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
    "url": "assets/js/5.46ed638d.js",
    "revision": "a86166531e5bfddffacd26049d9424b3"
  },
  {
    "url": "assets/js/6.14ab45ab.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.a6835396.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.d35e3ffc.js",
    "revision": "22d4b7ad00ba2bd85d718998e5225b4b"
  },
  {
    "url": "assets/js/9.b997d746.js",
    "revision": "e7670215601e347ec6ef45e812a10c06"
  },
  {
    "url": "assets/js/app.31970080.js",
    "revision": "e04ca00006178899a32cfb6838c02ab4"
  },
  {
    "url": "index.html",
    "revision": "450b112f8bb04a10a3f5dccfdca73254"
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
    "revision": "624566f56386eb35821d48bfbf17bc92"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "0229b6f0b8291ac5a23ec2e21222bdbf"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "8191a316696b34d94d41d8498514b4af"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "c4c46a8b88ef4214fa73b04cb5d51655"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "253d3964a0f681c8a29d3440c32c2be8"
  },
  {
    "url": "zh/task-list.html",
    "revision": "df74b384b3b932e6d5186d7d7fe7ae6c"
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
