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
    "revision": "332d8da8e00ff2922b265659449dcd58"
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
    "url": "assets/js/10.b5a74421.js",
    "revision": "1d3fdbf8c546739373743ab015c45994"
  },
  {
    "url": "assets/js/11.d68c3895.js",
    "revision": "a6157cef4466418b91ae747a8d86b8b9"
  },
  {
    "url": "assets/js/2.5c931f59.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.3a2f81ea.js",
    "revision": "5a4876a630988f10369d539ad2dddaaf"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.6594aae7.js",
    "revision": "605f0f42faf9592ef797a7ba5b358dd2"
  },
  {
    "url": "assets/js/6.f8dfba9a.js",
    "revision": "50a50b5ffac2ce6b2aad6a7c06805619"
  },
  {
    "url": "assets/js/7.95a8eab3.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.3e4630a3.js",
    "revision": "70a8dbdb464f815cadccd786cf488ec2"
  },
  {
    "url": "assets/js/9.bb0adb13.js",
    "revision": "c0f360589a72ec1f091b92f9ddad9c42"
  },
  {
    "url": "assets/js/app.ccb34e44.js",
    "revision": "cb49f27d1e6f9ecc47ff90e6550b0e23"
  },
  {
    "url": "index.html",
    "revision": "869ae94c9d93ac76217df1a86d5dccc3"
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
    "revision": "27c0e12a0dbc83333011a1de9e723766"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "5a3845cf06c6191b50b25432dbbe264e"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "4d40607e67c28100f10cab835114e2d6"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "3ed9d0913b2ba098fa0f5340ff180ae6"
  },
  {
    "url": "zh/task-list.html",
    "revision": "7b008918fa8134959c3a7b7a31065168"
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
