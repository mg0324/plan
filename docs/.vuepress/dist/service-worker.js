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
    "revision": "7a3f87d54d884b5d42e960ec58c5f344"
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
    "url": "assets/js/10.ff7a8411.js",
    "revision": "3b84c7ee97b6876f83f8ea83c04d7ce3"
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
    "url": "assets/js/5.3200f48a.js",
    "revision": "b8ae89d48ff3f9b8be913a0da526e23c"
  },
  {
    "url": "assets/js/6.345bc9e9.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.78527efd.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.9d31b37c.js",
    "revision": "bb44e549a85acbc41dbcf66599aedb8d"
  },
  {
    "url": "assets/js/9.4a7ab84f.js",
    "revision": "45cb05803e04f8a8ca336567e893f106"
  },
  {
    "url": "assets/js/app.de1bc6a4.js",
    "revision": "50419ac1e33c9303c2568fc6d36bdb14"
  },
  {
    "url": "index.html",
    "revision": "b140c3c4ec34c56db43189b14ec66616"
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
    "revision": "27640246784e51ee8c02027a291a6b2d"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "4e328a2d6fa661449135568ead55679c"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "3650ab1bc7dc7386b316d2cbb12bc384"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "b7e0d3ea7b61cef9cae7da8dc7ee8f9f"
  },
  {
    "url": "zh/task-list.html",
    "revision": "30fc3bf156a8608e707180dcc619b062"
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
