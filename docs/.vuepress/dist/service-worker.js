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
    "revision": "b6402917dd665a5a7c60fca0fe99acf1"
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
    "url": "assets/js/2.ee04bcfc.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.c28f3669.js",
    "revision": "1c5fbe74f1918db01867963b629d3415"
  },
  {
    "url": "assets/js/4.6318a2a7.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.58e77e59.js",
    "revision": "d89b5f6a55a7c7c5681631c530b1d31a"
  },
  {
    "url": "assets/js/6.78839b6d.js",
    "revision": "697dd2672f20b1bd9df05869f89e8388"
  },
  {
    "url": "assets/js/7.124feb36.js",
    "revision": "402500fa699239ca24677e4533cdac3f"
  },
  {
    "url": "assets/js/8.7afca2fa.js",
    "revision": "7db422c6db3dbec638d878b11ff0cb8f"
  },
  {
    "url": "assets/js/app.aa97edca.js",
    "revision": "3bfe208834acbddfe93a84bd345706c6"
  },
  {
    "url": "index.html",
    "revision": "579a86a6dae4b98af4d345381c2e0304"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/punch-in.html",
    "revision": "fada582959fb5b0fa9e443ceb229df88"
  },
  {
    "url": "zh/task-list.html",
    "revision": "23839d30ff35013741c8ab0180cb21e0"
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
