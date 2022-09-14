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
    "revision": "223b4d7f63ff0980d9c782339205df3d"
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
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
  },
  {
    "url": "assets/js/14.48993ffc.js",
    "revision": "e0ef964a3e718db8d5e66f659346820b"
  },
  {
    "url": "assets/js/15.14065108.js",
    "revision": "0655b8f76739018207d3f2f6babb4276"
  },
  {
    "url": "assets/js/16.85c84d08.js",
    "revision": "e656e00cb94b5384dd989a1439eb39f3"
  },
  {
    "url": "assets/js/17.671cbba3.js",
    "revision": "0130df8244b4b4910821401ebd2a6b18"
  },
  {
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
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
    "url": "assets/js/21.7a19762a.js",
    "revision": "493ecc9e71c27054daff9a86d3bf69f8"
  },
  {
    "url": "assets/js/22.c91c72a3.js",
    "revision": "f73e131be9aab9fcdcd8d5f9ea1e2037"
  },
  {
    "url": "assets/js/23.49684edb.js",
    "revision": "17ffc54fef2393b2cb6e11e8633c2e33"
  },
  {
    "url": "assets/js/24.0468f13d.js",
    "revision": "503722105c20a8213d6ec79117dd2d42"
  },
  {
    "url": "assets/js/25.2db68ebc.js",
    "revision": "1e04d537f131137be61d2f020752d301"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.c7675026.js",
    "revision": "e2e9d2cea17499def8268622672d5e99"
  },
  {
    "url": "assets/js/29.74e42be2.js",
    "revision": "69b4dbfe35172047fc76ed5fce8177c2"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.11cb9192.js",
    "revision": "1e6bd1135c2578d8ae7af12a9c4e29bf"
  },
  {
    "url": "assets/js/31.35fdcc42.js",
    "revision": "71cfe7d149665f0807e9194622d394d4"
  },
  {
    "url": "assets/js/32.2d96f1f7.js",
    "revision": "b3c33067c6791188b35aa5761914a22e"
  },
  {
    "url": "assets/js/33.37da22d4.js",
    "revision": "0fa45ba33e45bc47b1b9c37f929c7a90"
  },
  {
    "url": "assets/js/34.68e0856a.js",
    "revision": "934a6e353bddc3bd56248d0a73090992"
  },
  {
    "url": "assets/js/35.7f9f7fb3.js",
    "revision": "99d29f261841f6557ed29ae925bcf28e"
  },
  {
    "url": "assets/js/36.c16b0d2d.js",
    "revision": "20e077af627797fcabe07c107a214ebe"
  },
  {
    "url": "assets/js/37.3e69f8a9.js",
    "revision": "e643659126edce7037d42935e6b61636"
  },
  {
    "url": "assets/js/38.3e91f651.js",
    "revision": "8633baace8c9e2b8683d6efd64caf5e9"
  },
  {
    "url": "assets/js/39.238c79a6.js",
    "revision": "5f3f35433f184a0a044e906f7412df11"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/40.742dd319.js",
    "revision": "c9eb774d694a3d2dd2e7aec92bfe9722"
  },
  {
    "url": "assets/js/5.cb07be02.js",
    "revision": "5c9cd839447cdde0d7e0f1e651e73ce6"
  },
  {
    "url": "assets/js/6.ecc7927f.js",
    "revision": "fa731b1ec8838f06bb0fb7f3e22da9d9"
  },
  {
    "url": "assets/js/7.5b54bc24.js",
    "revision": "7f376e60d32df6fee8876ce94a12aa7f"
  },
  {
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.b0191be3.js",
    "revision": "398c3a04084cb8e1e9c3f3224fa11766"
  },
  {
    "url": "index.html",
    "revision": "912d1596de53fc3fbb599eef58db6ef1"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "d0787eb27929ab878226648f9193a81e"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "654465dabc6045f32a4e6c1a960d8d2d"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "3d964248f38be6754f6333ed547f2634"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "bb6f81a67d4eb0a83b74cdf7ca4b4587"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "28257fedd5f8c7d6f4b474b72d91aa85"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "36bd229b5273e46843f94c4cad75329c"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "08c3b334fe28966f6fac580948af0140"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "650893771deb63289a8e5b3c036b5245"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "7c554469edcb3e292a47cfae69e8628c"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "998feb1b70cb28b63b1657baf0cf1322"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "64d928270c3064cf355c32f520082777"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "ae5672ed94d890f82e5ed963bc6ea6aa"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "ad43e8193ecb9d4ea2c08a34740043a9"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "07e28768a0fe09d8b68c562cd8511f51"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "0e6a0e83cc7cb75ed07ce49cab6afeee"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "8b58afde8f64c5ff62cfb514a05e50a5"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "e4bc36915c5436c8bde3d43264bf7f78"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "2c3ab6f6a7f9b40d3b9d5796412d8e12"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "cdcf1aea96f9add26505922552c13fe3"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "286c77fcf48851c6b57bba0ec677d014"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "a5a26fc658e90528dfc75d598ab31778"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "13962c02b086db12c2c067488a7d65a6"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "f8661f9695baeb644b63de193c66454c"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "f6b2bb822940d88b7a22f4aef9224b0a"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "b9b44595f3ca00d53faf6b56a6eb89be"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "0f1e249ee0b7f9a728695185dee6f9d7"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "fd7488443d6514c1281d2c34792fa737"
  },
  {
    "url": "zh/food/index.html",
    "revision": "627262f0e215c86883ec28855157fac6"
  },
  {
    "url": "zh/okr.html",
    "revision": "f3e584c0bfcd5b576daa1f6b3c09e09a"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "3a5692446de6bd55595cd198f84af4dd"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "850c7d1bac9c17914ce6631be9adc0fc"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "bc97e6c3338518be8393e944441e29f7"
  },
  {
    "url": "zh/read-list.html",
    "revision": "21297110488ef25d7d4176eae7409b0a"
  },
  {
    "url": "zh/task-list.html",
    "revision": "fd83d0d44b08ead989202f0dce6ee608"
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
