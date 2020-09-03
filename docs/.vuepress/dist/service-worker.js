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
    "revision": "ec4d098bb41dd4bb540b447c2c09cf5c"
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
    "url": "assets/js/10.3c41b142.js",
    "revision": "93f3939cda3d947394792949f171fccc"
  },
  {
    "url": "assets/js/2.45ee2b13.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.24d3326c.js",
    "revision": "ce7e04d84bc887eb339ae59b95f6b0e1"
  },
  {
    "url": "assets/js/4.e17319e5.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.f287333e.js",
    "revision": "5eb7f740ded4536fbaa12e37875d1ba6"
  },
  {
    "url": "assets/js/6.fda50b54.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.3f519dd4.js",
    "revision": "98d081789e1985ca0474c855ae5a5a76"
  },
  {
    "url": "assets/js/8.532daa3b.js",
    "revision": "52bb4716c8eb8f8004384ba76358bd92"
  },
  {
    "url": "assets/js/9.36bcc0f1.js",
    "revision": "ba762d54d4050e9b5dc9ee5eebccfda5"
  },
  {
    "url": "assets/js/app.e7139b97.js",
    "revision": "21ab4348792cce341caeea4f18447fa7"
  },
  {
    "url": "index.html",
    "revision": "3651aac0b14a6149aaae58a6ba93a35c"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
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
    "url": "res/kafka-mutli-art.png",
    "revision": "e95eea3296d84f88efc4a0426f1f8a9a"
  },
  {
    "url": "res/mango.png",
    "revision": "aa27f8181c9bd52ccad37aafec4dfd89"
  },
  {
    "url": "zh/punch-in.html",
    "revision": "23ae50235eddeafa1fc7d70f74ade8cb"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "45bd2ddc1dc1efb90a6ed9d9a2c9bfce"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "6246833da0d3ddc704ba46cabff638f6"
  },
  {
    "url": "zh/task-list.html",
    "revision": "5c290f1128eeed0749db59593806893e"
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
