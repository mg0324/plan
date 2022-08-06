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
    "revision": "abb89cf1f577818d88190319584031dd"
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
    "url": "assets/js/10.434b2f1a.js",
    "revision": "48b29c0811149b70712377d90000ae85"
  },
  {
    "url": "assets/js/11.9b39838c.js",
    "revision": "cdf874e8e89f8c1e46a86948407129b1"
  },
  {
    "url": "assets/js/12.720bcfa1.js",
    "revision": "a91b541ad6ebc93e571ac2356dfec76c"
  },
  {
    "url": "assets/js/13.5a6a0e24.js",
    "revision": "5124e81bfa3d9fc35874448f72db16f5"
  },
  {
    "url": "assets/js/14.48993ffc.js",
    "revision": "e0ef964a3e718db8d5e66f659346820b"
  },
  {
    "url": "assets/js/15.c1f5af4b.js",
    "revision": "e0813aa85db6555cda83c05bad74e8a2"
  },
  {
    "url": "assets/js/16.85c84d08.js",
    "revision": "e656e00cb94b5384dd989a1439eb39f3"
  },
  {
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.d6ef3d73.js",
    "revision": "64dd128221250da8decdae196fea168c"
  },
  {
    "url": "assets/js/19.f824d30c.js",
    "revision": "2aa9fe48e6694c4b6c0f70d7cb8eb723"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.845ebcec.js",
    "revision": "d3a4f5851531dbd2c343cbe1c2d37dd6"
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
    "url": "assets/js/23.e3773f37.js",
    "revision": "bbd8878046f95e39a0b33f3af43e8322"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.349c1454.js",
    "revision": "f2b301b235d85fc1a8822d23e77957a9"
  },
  {
    "url": "assets/js/26.7cae231d.js",
    "revision": "dbafe39bac274beb724d1e4babf575c6"
  },
  {
    "url": "assets/js/27.01ee47c2.js",
    "revision": "347f30bfe0727eb316887c5da70b91a4"
  },
  {
    "url": "assets/js/28.aa751def.js",
    "revision": "0997a014432dad3a313632f629d35f4d"
  },
  {
    "url": "assets/js/29.44d50a7e.js",
    "revision": "a1c03c7fe14a86730fb49145daa57aba"
  },
  {
    "url": "assets/js/3.c9adcd65.js",
    "revision": "ed4bcc27c1dce82d33b5884787cd58d4"
  },
  {
    "url": "assets/js/30.f819b5a2.js",
    "revision": "01c0a08b8df9336adef16e8b72e874b4"
  },
  {
    "url": "assets/js/31.21067eb8.js",
    "revision": "fb9b474fd1fdff3efad54088d9bd42d6"
  },
  {
    "url": "assets/js/32.70099cb9.js",
    "revision": "5d720a3eca4c1a380a6dee5d60fc182b"
  },
  {
    "url": "assets/js/33.4b09dd7c.js",
    "revision": "06c1ddcef1d9e8757ec12cb099fc4b9c"
  },
  {
    "url": "assets/js/34.f47196d3.js",
    "revision": "31b28f5305e7c4adec1d939b22053cf3"
  },
  {
    "url": "assets/js/35.744c9e04.js",
    "revision": "ee7bc3147fd9b6560be6d3969c825b1a"
  },
  {
    "url": "assets/js/36.9cf98d7a.js",
    "revision": "48650289591c2dd8c26b82461a6383ef"
  },
  {
    "url": "assets/js/37.bd9056a2.js",
    "revision": "4ae57423074a852792a50b7bc7ead316"
  },
  {
    "url": "assets/js/38.ee5ab579.js",
    "revision": "767663749af969c30ff57296cd88b6eb"
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
    "url": "assets/js/5.5930f07a.js",
    "revision": "5f4606d6b725eee8404e3b320052b59c"
  },
  {
    "url": "assets/js/6.11efe41f.js",
    "revision": "8188ae4aba43c16bcb912627bc1bd31f"
  },
  {
    "url": "assets/js/7.5b54bc24.js",
    "revision": "7f376e60d32df6fee8876ce94a12aa7f"
  },
  {
    "url": "assets/js/8.28026f67.js",
    "revision": "aa3fe1c297b04ce1069e436f456993a8"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.9f04885b.js",
    "revision": "56f756c8f47792f4b1dedd600d278cb3"
  },
  {
    "url": "index.html",
    "revision": "bc47d37ea5a2cd494693b58fd33c9a4c"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "4a6bdc8f50dfbd061c415ed83bca354b"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "fc8f5d30b4faeafcdb7c6aca89fe943a"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "ee144a2a60dd9610ed1845179ee78eab"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "3ec74977597ad01730be5674ced07169"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "f053b05fcbd3c981871e613a9b14a35c"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "89c413015f1c68ed5c68fc449b5565ca"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "ded34d42ed93aed3ab2b90544a8e97f4"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "e1b1930d91abdfab7b9d4b220bd4ab5a"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "12599a8da1163e3723437329915ecc9c"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "8aaa892123edbdf38bfeaf693e9a565c"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "e0843601f5fe18248dbb2c26500f3f84"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "79fdfc3171ff7234872f7e07788b52ee"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "52ffe91d6f8b5fc78e03c21c3166e2bc"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "2848cd046b9e17b1bf96f96125a8e5b7"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "0389b10a36f559694cf34b72ea7e056e"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "0c63ede8d9f1bd15590ad99dc2bb3862"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "e1cc82456e02cba6d7c32a0d2cac2837"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "f66bd01e19671fc8137654a9a438722e"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "4cf9040897f32c2900381ad775e4c7a9"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "734bbfb29fecd97bb45f9d0b8b529b42"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "1e89c70a6016084792fa13fc7d5487de"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "14c31e42be118218c32427f45333541a"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "140ef319f7eef51253981ef7cbaaf5b9"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "61ddcff0831559a55463f3f2fd930e51"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "fd825f8cd57f565bbffdecb5b38ed0dd"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "5d1158bf2f2013e0a494fa3561b10442"
  },
  {
    "url": "zh/food/index.html",
    "revision": "ed3189497ad7fcbd7df155b435bf0d95"
  },
  {
    "url": "zh/okr.html",
    "revision": "90f67bed5f7a076f8d128304d28bd15c"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "285d4e14f54d8c3965687b51177fdb77"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "df8a38e261050f579ec365bb68e250d9"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "3efdff3a2944f851478184b56c3bfd32"
  },
  {
    "url": "zh/read-list.html",
    "revision": "2b410f646f028ffd5256849ea75870eb"
  },
  {
    "url": "zh/task-list.html",
    "revision": "3b142ef60933483dd78d346f6744acd1"
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
