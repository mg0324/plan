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
    "revision": "bd6f8a6e76aa78378f59118a144a64b9"
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
    "url": "assets/js/10.c9a54bca.js",
    "revision": "938f9bd3dd20dda3bf3d756b0585b592"
  },
  {
    "url": "assets/js/11.a08005b0.js",
    "revision": "6f93644375469a330b9c09c74f564ef8"
  },
  {
    "url": "assets/js/12.7df36686.js",
    "revision": "2b5678f5ebf21a54d7556f2a29486e5c"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
  },
  {
    "url": "assets/js/14.48993ffc.js",
    "revision": "e0ef964a3e718db8d5e66f659346820b"
  },
  {
    "url": "assets/js/15.7540cb15.js",
    "revision": "bb033b111e5cbc342b12bf7bd81dd5e9"
  },
  {
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.ef746a9a.js",
    "revision": "e54fb5f98a977ed20a48332f92092374"
  },
  {
    "url": "assets/js/19.419505e9.js",
    "revision": "06136a20eecc2a9c964accef7203d104"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.35a334ce.js",
    "revision": "2142c9f13b1836f082a0ac1d09d6c1ed"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.dad3274a.js",
    "revision": "b7d6f647e65ef1b2ce9e4d9c1b7cba78"
  },
  {
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.7cce75c1.js",
    "revision": "e6f5d168c74f37347f7e5f811734ce26"
  },
  {
    "url": "assets/js/26.7cae231d.js",
    "revision": "dbafe39bac274beb724d1e4babf575c6"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.b435e35d.js",
    "revision": "c0a5fdd7c58fb64133b605adad054f52"
  },
  {
    "url": "assets/js/29.0342d678.js",
    "revision": "50fe38ad55f29a4fc1084396636b2eed"
  },
  {
    "url": "assets/js/3.c9adcd65.js",
    "revision": "ed4bcc27c1dce82d33b5884787cd58d4"
  },
  {
    "url": "assets/js/30.11cb9192.js",
    "revision": "1e6bd1135c2578d8ae7af12a9c4e29bf"
  },
  {
    "url": "assets/js/31.df142e0d.js",
    "revision": "51c76984a019a9c6c7a4e566cf1a817e"
  },
  {
    "url": "assets/js/32.9ecf5e50.js",
    "revision": "c90e15cb97ff47c056eeefc1a0b1f4d2"
  },
  {
    "url": "assets/js/33.4b09dd7c.js",
    "revision": "06c1ddcef1d9e8757ec12cb099fc4b9c"
  },
  {
    "url": "assets/js/34.bd8d8dbb.js",
    "revision": "62cd2e742ba6460e6b525738b762c24a"
  },
  {
    "url": "assets/js/35.2e0a2c11.js",
    "revision": "cf17e93da20d5c525a7a5726cabc3f64"
  },
  {
    "url": "assets/js/36.9cf98d7a.js",
    "revision": "48650289591c2dd8c26b82461a6383ef"
  },
  {
    "url": "assets/js/37.4a714660.js",
    "revision": "3a499552b5c7db10e0a15ea3d23757dc"
  },
  {
    "url": "assets/js/38.3293f5b3.js",
    "revision": "4c56f2076f41b50cdca6fc897f630dbc"
  },
  {
    "url": "assets/js/39.8ad23802.js",
    "revision": "a85c005f9bd6f909b48a3ced4be854b3"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.a8977057.js",
    "revision": "0efb8b0cbeb029cb6a1b5267effefc17"
  },
  {
    "url": "assets/js/6.ecc7927f.js",
    "revision": "fa731b1ec8838f06bb0fb7f3e22da9d9"
  },
  {
    "url": "assets/js/7.db1dce62.js",
    "revision": "c7fb1dd0e90ca65b6c9738e123142f09"
  },
  {
    "url": "assets/js/8.1d76ff38.js",
    "revision": "ad74f623ed06571582965ca3fc64a29f"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.c1b0834b.js",
    "revision": "aa3a177b67af815003e51236dd37deed"
  },
  {
    "url": "index.html",
    "revision": "1b315dab1bbb2db004fe098b7950eb31"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "fcd777650edd4f61f9c324f94ecff6d2"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "122b39cb050041d89bea5f8fcd01201e"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "3f40b04a2bf9522802eca3a45afab4c6"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "f6759ba8dbecb804d2acb5ade381aa4c"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "fc9cb6ed2a02b8fa63ae14368d9c89ef"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "c084942905bfe7edf763cfaa8d223a46"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "43c852148bca43e07be4da03323170b9"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "2db64caf9c306c7e83754e595eace5e4"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "2d3e69965aeb5836eed6005ba2f04450"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "86ec4f8852f615e64b5aec16bb6a1378"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "108f0b5a79f69794b975bc2959b42e19"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "d7d9f763fb47f9064eef948aff270e73"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "28bec122348bfeb7f834b2dbab7697bb"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "044b09cfc653f0e3811a4412630e48b6"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "8c8f5f249af21eb7fcd1e7b36ed5ca1d"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "319bf14c81256ed3a65c090b3c483290"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "480eb4ef2bfa06e98531fd43acca3a5e"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "7aa809cb44f717a876c3b587ed830ebd"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "491ac07e756f69feb91bbfef3413e31a"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "d0f45cafac855789c1b93b0cf7f3f8b2"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "86235e0c9f0a0cc7ff1b473126e9ac55"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "0a6b642d0896da1443c7ebe3701be534"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "c9a7707bbf335dc22eeebb7788755aa7"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "2dd59330f1e8f7b8b607786450e478df"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "cd2f22b2c8cacfb67d111d80dd8d5e15"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "b1709b4eeeb2779602c7b33e303c02a5"
  },
  {
    "url": "zh/food/index.html",
    "revision": "3fc6e9da22fbdfae2fbd9c700b9175c6"
  },
  {
    "url": "zh/okr.html",
    "revision": "dba71dc38ff7dcb6f5834ed404991899"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "65684d687b6faf8a84718796a5995bc6"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "e49cf1f7a7add8fb3a28bcba0bb285ed"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "399c7e5e460a96429dd95962b28e8929"
  },
  {
    "url": "zh/read-list.html",
    "revision": "45163ab58d457aa6ae3ab996b5e7e35d"
  },
  {
    "url": "zh/task-list.html",
    "revision": "7ddb3273ac2804746be437ddf8ed06dd"
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
