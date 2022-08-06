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
    "revision": "581120ae0ff22829b697bd1f330470bc"
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
    "url": "assets/js/10.8992c7f2.js",
    "revision": "de49429de50ad205a11d6a7b00103c0d"
  },
  {
    "url": "assets/js/11.af5e4fba.js",
    "revision": "ee29d6d5a5e675f192d39569e8f37cfe"
  },
  {
    "url": "assets/js/12.6c3c4dba.js",
    "revision": "06fb38bc92ec1143db1a9978a204f150"
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
    "url": "assets/js/15.850049e3.js",
    "revision": "8cf9e31101ed13f68b9643a99969a028"
  },
  {
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.42f51d15.js",
    "revision": "df86f38ab76fd5b5963b01f5b39bcb0c"
  },
  {
    "url": "assets/js/18.ef746a9a.js",
    "revision": "e54fb5f98a977ed20a48332f92092374"
  },
  {
    "url": "assets/js/19.56063d2e.js",
    "revision": "2e7b06df7ebed3089c58257da2e81cfa"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.fec602c9.js",
    "revision": "5ea7c2d44fe3c9f40002a8377ce14742"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.74b100ac.js",
    "revision": "9972e57d63d677ae2b424ec0430992c3"
  },
  {
    "url": "assets/js/23.f6675628.js",
    "revision": "759b784c3944c63e1616a104a9da0d5f"
  },
  {
    "url": "assets/js/24.df1cc411.js",
    "revision": "86451a5f3915a63b0d535d9ba2157daf"
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
    "url": "assets/js/27.f79c2670.js",
    "revision": "3de6e67f7b56774fe31eb3e3191000bb"
  },
  {
    "url": "assets/js/28.8b8797e3.js",
    "revision": "d3b47c92905660084611e1185e743668"
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
    "url": "assets/js/31.7ca8ccce.js",
    "revision": "f3dde4bf9c071d63e124bad8f4320960"
  },
  {
    "url": "assets/js/32.cfeff728.js",
    "revision": "a83314a3f101ecbfe354016f629b9daf"
  },
  {
    "url": "assets/js/33.bc9a0cb8.js",
    "revision": "57f277648703548687f5bc9b9c506a09"
  },
  {
    "url": "assets/js/34.f4653ec5.js",
    "revision": "ab2f37ef3707dd5b3b915c48710335a1"
  },
  {
    "url": "assets/js/35.23fc07e0.js",
    "revision": "1824bd3ad37da0bd7761b53ef2974d41"
  },
  {
    "url": "assets/js/36.9cf98d7a.js",
    "revision": "48650289591c2dd8c26b82461a6383ef"
  },
  {
    "url": "assets/js/37.9f4fdf7e.js",
    "revision": "0c5a1c70a39b6e2d725016f700dbfeec"
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
    "url": "assets/js/5.1d94ba65.js",
    "revision": "5b9da511c73d75da33a03e9c4f7d1d9f"
  },
  {
    "url": "assets/js/6.64adfb47.js",
    "revision": "2429eda5ba8704fecec76bc301e761ec"
  },
  {
    "url": "assets/js/7.43b2851e.js",
    "revision": "a096b48bced6883930b3fe6c4655cb7d"
  },
  {
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.7606dcbe.js",
    "revision": "ede8ad28dfee637619aea284466389cf"
  },
  {
    "url": "assets/js/app.17222730.js",
    "revision": "86455dd518da8514aef571c7c3a2c278"
  },
  {
    "url": "index.html",
    "revision": "d271987097aafa01a6a2a752d8907697"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "7eefe11a4b12869a658028309a8b7d55"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "ee081e05728c43137ec99d67f27b043b"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "da1d082e866a2c777353844cbb0ac76e"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "339d1c7709713962501c4a010c673eb3"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "f0a8cd60afc335729d570a40d458b488"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "167aab1e92923455ddcdb4319d3c2469"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "f51a9dca92bba41a84e48dc097d1df20"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "72eab54ecceca9f93cdd14203616d51e"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "ae7dfa9d21afec1daebfa1be013aa6bc"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "ac4c276a6c6055fdc7c48cb0802d2c0d"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "2de091bddd1860e326de57c1b05301e9"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "7dacea50992a413954659a84e45fa102"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "4b18ac78e97486dc11ac8433dcc885c9"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "84e6e708ecf900be1ecbfe0e9a4c2bd7"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "390cf37eb996ea66ed1f56ce0d1c0b67"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "ad5ea50b7053eb35d6f82fea47cc70a5"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "8035b3e327698833ddc80a1d445f374f"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "bfe3551dde5966f40c7fc90245905ff9"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "a3819c0c8934d71bcfa7fe2841ee005c"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "3b0891cbfd515705a20acab4bd934063"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "6bcc90c99f080cb7dcb80405cd502f76"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "413d146dda41eaa3287537d1de78d210"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "e68c5fb69de28638b9c23540fcdeb4a0"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "7e768f3230dbde735b9f4a6cb1ad0996"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "e7b99a5d8216d561c7f2a6461656176a"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "7f5048ebd6c9a33ab19afacf2484f8b1"
  },
  {
    "url": "zh/food/index.html",
    "revision": "78b24017974b66b7e86b3fcc9d72ab0f"
  },
  {
    "url": "zh/okr.html",
    "revision": "c8413b3b11543c2e83e39a9be66d50b2"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "1a32e5c6d2920675d987c7c0e831beb2"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "bd1d18dc263ffb5733fe70a6bbd89093"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "cd42ea3fd23aaca26ec0df8d693c8fca"
  },
  {
    "url": "zh/read-list.html",
    "revision": "524db16f39df8c467fdbb08a5b37e29d"
  },
  {
    "url": "zh/task-list.html",
    "revision": "979d7198a9b40c017745e6aa8de39a7a"
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
