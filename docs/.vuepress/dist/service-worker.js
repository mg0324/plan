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
    "revision": "3fd51d7dbd4fb1d2bbf6d7975ba4a3bd"
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
    "url": "assets/js/10.57a8898f.js",
    "revision": "f00d761611514d23a46eb6ec0262018b"
  },
  {
    "url": "assets/js/11.e91a6fc7.js",
    "revision": "bd1c0352ebf19cff6a90d7a67eb1e0ba"
  },
  {
    "url": "assets/js/12.fa5b7b8f.js",
    "revision": "f0695e1f2c1f5287a5f0cae8512da8ec"
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
    "url": "assets/js/5.42224424.js",
    "revision": "537144267b9ec8a584cee4149544524b"
  },
  {
    "url": "assets/js/6.96f596ca.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.40387224.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.b7a081a7.js",
    "revision": "fb6194e9b422ccc62fdd1443260ca140"
  },
  {
    "url": "assets/js/9.e5da2cef.js",
    "revision": "b4fa78b680b7008b2346d269ce35799d"
  },
  {
    "url": "assets/js/app.3510f61b.js",
    "revision": "e8b306c499ad566be5d55028eb45adf4"
  },
  {
    "url": "index.html",
    "revision": "39b8565b281ef9056949e97fdd158bb5"
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
    "revision": "fa0d6b36a5e519f5c4dbe34d602cd14a"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "47ea3f2ad1f97b795a3fc077ff397c41"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "d804184e53253da418684fa96e669796"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "d4d4562cf16667f2f47d1b254fcd034f"
  },
  {
    "url": "zh/punch-in12.html",
    "revision": "fc186cb48c946cd6ff7c76c1a16e7152"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "b31fe565c8f3e850dbc8bd28b7f33f15"
  },
  {
    "url": "zh/task-list.html",
    "revision": "b6ab3266a832bf2437baa910e527e773"
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
