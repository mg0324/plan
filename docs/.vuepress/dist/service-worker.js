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
    "revision": "57e9ed9903892ceaf873f89098edc70c"
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
    "url": "assets/js/10.6790609a.js",
    "revision": "d7538e71eed3b80aaf71d50d19a9824b"
  },
  {
    "url": "assets/js/11.d68c3895.js",
    "revision": "a6157cef4466418b91ae747a8d86b8b9"
  },
  {
    "url": "assets/js/2.45ee2b13.js",
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
    "url": "assets/js/5.d4489d0f.js",
    "revision": "334444292c8c50ad295432d9e54cf989"
  },
  {
    "url": "assets/js/6.fda50b54.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.78527efd.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.2dfc71ef.js",
    "revision": "a4e50f9d50c745f886ab993f4903e677"
  },
  {
    "url": "assets/js/9.bb0adb13.js",
    "revision": "c0f360589a72ec1f091b92f9ddad9c42"
  },
  {
    "url": "assets/js/app.39beb89a.js",
    "revision": "808ab56896f59c08c3f1ac7dd52265c4"
  },
  {
    "url": "index.html",
    "revision": "9f9541febb5f8f7cf1521ec63f19b1bf"
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
    "url": "zh/punch-in.html",
    "revision": "726558c8f955baa35d49e94d5bfb4c38"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "95109ef2becefee957b306e93db10485"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "df6e11108bd6b92eda43e676b73c005f"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "5093958d674af2117452eed282c388e4"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d5799f54dc675cc433a4ba9dfb838cee"
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
