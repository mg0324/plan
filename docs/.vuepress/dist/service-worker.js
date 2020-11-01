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
    "revision": "c3f1991f560d3038acd120c42fb70b81"
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
    "url": "assets/js/10.4b9e8e85.js",
    "revision": "c5cea8d896db27cc828a1b101e2005de"
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
    "url": "assets/js/5.613bcf25.js",
    "revision": "d8c04e81009ff307d0c45daf5f3aee44"
  },
  {
    "url": "assets/js/6.345bc9e9.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.83d71581.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.276370ff.js",
    "revision": "321960554d6ef040d1ccf6ce7c6a140d"
  },
  {
    "url": "assets/js/9.bb0adb13.js",
    "revision": "c0f360589a72ec1f091b92f9ddad9c42"
  },
  {
    "url": "assets/js/app.e8b64e44.js",
    "revision": "5e78366ee924b10aeaf0a847213a2ed1"
  },
  {
    "url": "index.html",
    "revision": "c9d6faf824b8392b9ec4d72d54685a19"
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
    "revision": "9be834bda1c676244d49db28fc77f853"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "3669d6961874f95957e88e4ef68a0435"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "eec5a3871f8c9c430676bf3e5748f425"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "d768d6c92936c964789198c2906d9a5d"
  },
  {
    "url": "zh/task-list.html",
    "revision": "004ed83f4d02dfb437219c6039e70538"
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
