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
    "revision": "4ea555e30e456592ee68a0200f311e4a"
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
    "url": "assets/js/10.da39ba7d.js",
    "revision": "08d4c1ba101eebaf02a756c7e13aa1ce"
  },
  {
    "url": "assets/js/11.9188b81c.js",
    "revision": "56293ed07a488bea495753d83d98e288"
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
    "url": "assets/js/5.51e42753.js",
    "revision": "8aaa9bec2a7edfdbd489eb34328c6c04"
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
    "url": "assets/js/8.6d2a3436.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.b4192de8.js",
    "revision": "e033202b840d6e7eddacb7ece26fafd0"
  },
  {
    "url": "assets/js/app.7e246f38.js",
    "revision": "f4151aa5bff6869538450bf178e526d8"
  },
  {
    "url": "index.html",
    "revision": "f8d2d6129d09ebf3c494215955e34d55"
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
    "revision": "e974a03673e73035cc7cbf12fa7b7d7c"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "1c3638525648f76235cc3a25fc88ed22"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "bf17a7f012b4cbb726c0cbb3c8f79951"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "235654ee6f2226b08b3499c1467bcdff"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "fbc5cf524c0baea195cfa23d7bfd7796"
  },
  {
    "url": "zh/task-list.html",
    "revision": "4e2891c01d1f4ab1da4c92606154d765"
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
