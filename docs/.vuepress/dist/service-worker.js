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
    "revision": "89af75efd2343d21b0d1197add590b72"
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
    "url": "assets/js/10.7850dd40.js",
    "revision": "d4a92c69cd0be1c5c3404e77523ad33c"
  },
  {
    "url": "assets/js/11.82cd91a4.js",
    "revision": "539ec50b22a96c33e82439744d22f449"
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
    "url": "assets/js/5.b42d0e1a.js",
    "revision": "c4cad94559f4853d48b886a688407d46"
  },
  {
    "url": "assets/js/6.96f596ca.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.2676d7d5.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.b7a081a7.js",
    "revision": "fb6194e9b422ccc62fdd1443260ca140"
  },
  {
    "url": "assets/js/9.95b3c5bb.js",
    "revision": "747cef82b97995c50b27533b18ac6910"
  },
  {
    "url": "assets/js/app.79ad2b5a.js",
    "revision": "7c6881d4554220d8e90ee39da7a1b600"
  },
  {
    "url": "index.html",
    "revision": "414937df096afd3f433eeafbe2bc965d"
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
    "revision": "d19d79d74cc88998bcb75cef2768700b"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "748695bfd6e6a563bcd620d7335b34fc"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "c081a244df3a7818cf6a85487d87181f"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "bf061583f6427a6a325ff48947857ed0"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "13e80d26f64cd2fb5f6059bf0bd6e8e3"
  },
  {
    "url": "zh/task-list.html",
    "revision": "07eef48d113724dd3768e6a69909e796"
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
