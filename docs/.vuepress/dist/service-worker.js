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
    "revision": "5137ba64894e85603d79adaa4da294f5"
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
    "url": "assets/js/10.31f2b020.js",
    "revision": "a3f31c84d4983f14a2aa7fb26b841bf6"
  },
  {
    "url": "assets/js/11.d196c405.js",
    "revision": "86244f5ff6aa3329a546dcc2f7c0c64c"
  },
  {
    "url": "assets/js/12.52cc3fc7.js",
    "revision": "b943aac2ddef9ba080798a119423dadd"
  },
  {
    "url": "assets/js/13.f0f93d5e.js",
    "revision": "a67bd933a6d06f73a7579732d3c9ced5"
  },
  {
    "url": "assets/js/14.2ca74078.js",
    "revision": "e93447a182871704d50c863a2e282573"
  },
  {
    "url": "assets/js/15.7540cb15.js",
    "revision": "bb033b111e5cbc342b12bf7bd81dd5e9"
  },
  {
    "url": "assets/js/16.7979949d.js",
    "revision": "a85e3817e4b04f1c852757440c09b52f"
  },
  {
    "url": "assets/js/17.793b0552.js",
    "revision": "6cc6f1d8ddce5bb0923a982bc11dc108"
  },
  {
    "url": "assets/js/18.fa2bad86.js",
    "revision": "b4337936b5619625003862ea187cb212"
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
    "url": "assets/js/20.35a334ce.js",
    "revision": "2142c9f13b1836f082a0ac1d09d6c1ed"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.9f9aff64.js",
    "revision": "0bd85307b26ad5f48b2aca7cda3f71dc"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.8d98076a.js",
    "revision": "47b24359d0be6c00a85b48079398fad5"
  },
  {
    "url": "assets/js/26.0e6353d3.js",
    "revision": "e2aa6a570e53b90a30d5f5289d943bfb"
  },
  {
    "url": "assets/js/27.46733b04.js",
    "revision": "3b963c869c2edd6af66c0c3fc4415a0b"
  },
  {
    "url": "assets/js/28.c7675026.js",
    "revision": "e2e9d2cea17499def8268622672d5e99"
  },
  {
    "url": "assets/js/29.44d50a7e.js",
    "revision": "a1c03c7fe14a86730fb49145daa57aba"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.f819b5a2.js",
    "revision": "01c0a08b8df9336adef16e8b72e874b4"
  },
  {
    "url": "assets/js/31.c96928b5.js",
    "revision": "c0fc30aba0fba64521f8e63ef5906677"
  },
  {
    "url": "assets/js/32.e2f16cc6.js",
    "revision": "ecc82caa66387ca4bb1ec338f10f25af"
  },
  {
    "url": "assets/js/33.2e8fbabc.js",
    "revision": "84afe600ab9f5dd0ecdf977ab8904f9a"
  },
  {
    "url": "assets/js/34.d001832a.js",
    "revision": "02134dffa1db3ba7b21703ed6ab18ad6"
  },
  {
    "url": "assets/js/35.834e884c.js",
    "revision": "d7a9ce73ad871fa76f1335dab3c2bceb"
  },
  {
    "url": "assets/js/36.27998551.js",
    "revision": "4e36284addfbd890df6095d3221b964c"
  },
  {
    "url": "assets/js/37.3e69f8a9.js",
    "revision": "e643659126edce7037d42935e6b61636"
  },
  {
    "url": "assets/js/38.5443faa8.js",
    "revision": "7f0d64faee2a77dd10d55d3d454481e7"
  },
  {
    "url": "assets/js/39.89d28447.js",
    "revision": "cf66d5aa206a7eb37ace21646fc06ec0"
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
    "url": "assets/js/6.bbe309ab.js",
    "revision": "76ca223fa23b24bf57de79e96fe4fd25"
  },
  {
    "url": "assets/js/7.43b2851e.js",
    "revision": "a096b48bced6883930b3fe6c4655cb7d"
  },
  {
    "url": "assets/js/8.1d76ff38.js",
    "revision": "ad74f623ed06571582965ca3fc64a29f"
  },
  {
    "url": "assets/js/9.eb2a3286.js",
    "revision": "c9cb5536dd78f9dcbd96e42e7f2fb9d3"
  },
  {
    "url": "assets/js/app.b0fb5765.js",
    "revision": "18d5e7cd5b59d78634b5c8f07f3fadf4"
  },
  {
    "url": "index.html",
    "revision": "6c8dc792fb06b2d64c9fde4f1cb8fa7c"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "501477055ad7dc25ae82f3d30ea0b3c8"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "3b1c73a0b0d1d2394a311f7c87fc55b4"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "cf56506c6ae72c5d085653be0df80525"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "ec43be4fb5aca28a1f887bec2c97fdb0"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "5fa0a71535242178ce810de44f149422"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "b94a436357df8a1f964e3688deb55c20"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "3a8271caeab5ec572e91183e94f012e3"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "19629fbf447415eff222b72c3ca31eb2"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "d133887f9f278333e1b4c697df9d79f5"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "06fdf1356fa0be25342601b4fe689332"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "36260becf15bc28dabf0774587365435"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "b7ca16c4cea3546b2f1f93fbda697c4e"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "ef11d1f263cc6309732edf7fc300741f"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "1723d74ec78b5142a5d1ccfeaf52675d"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "729dcb2e649c9b6bbeda0ffc41035762"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "05c444e8a5627fc76da6aa6368957967"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "26c3510b098f82a56a236b7eba058a97"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "4c8eb3a7327f946995b03034f5d17bcf"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "95f02c233d2e8d2e6f10f443abf9ec01"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "5759c1452ef182db867ef401f2cc45a0"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "da6c49a60cf1ff95f5be1d6403e6d958"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "549c854791f5df146327c996af0bafc3"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "bac29b60cb3f77358d5fd63c52485c40"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "73acf9a514e6adc8ca0f64b679a6d329"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "ee31319eb7eb313bf9a9e84778678cad"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "9a79b21d856a9724e879ad8f250023a1"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "305d15def058969237c73af927bc2b01"
  },
  {
    "url": "zh/food/index.html",
    "revision": "89ff2825cbf72dbe86ccd75317c6ede5"
  },
  {
    "url": "zh/okr.html",
    "revision": "780961c6c22b7a3b1e4615acf2fb99fe"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "04e307d57c60904a0639d4fab3f19ffd"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a3540b630338387a6be08576e1af0ee8"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "84249a479b504a601ad806a1f3f3f76d"
  },
  {
    "url": "zh/read-list.html",
    "revision": "63010a4899b08759a40637ba6452c691"
  },
  {
    "url": "zh/task-list.html",
    "revision": "1ddc8d9f2299d193c7a8b85fddf7c801"
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
