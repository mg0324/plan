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
    "revision": "fca8ebe43d3f56cc9854d2662f2732df"
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
    "url": "assets/js/11.a08005b0.js",
    "revision": "6f93644375469a330b9c09c74f564ef8"
  },
  {
    "url": "assets/js/12.720bcfa1.js",
    "revision": "a91b541ad6ebc93e571ac2356dfec76c"
  },
  {
    "url": "assets/js/13.79d1fbee.js",
    "revision": "4e416e589ead5a29d65552a399049b2e"
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
    "url": "assets/js/16.7979949d.js",
    "revision": "a85e3817e4b04f1c852757440c09b52f"
  },
  {
    "url": "assets/js/17.c082681f.js",
    "revision": "3252a370c87ced5936b40d989bf30666"
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
    "url": "assets/js/23.49684edb.js",
    "revision": "17ffc54fef2393b2cb6e11e8633c2e33"
  },
  {
    "url": "assets/js/24.026d37d0.js",
    "revision": "f5c6edf54208703fd35fc078d253ff4d"
  },
  {
    "url": "assets/js/25.7cce75c1.js",
    "revision": "e6f5d168c74f37347f7e5f811734ce26"
  },
  {
    "url": "assets/js/26.c9c48152.js",
    "revision": "d73d844b2ff3a6d8fb991fa380f5183f"
  },
  {
    "url": "assets/js/27.01ee47c2.js",
    "revision": "347f30bfe0727eb316887c5da70b91a4"
  },
  {
    "url": "assets/js/28.8cb17cef.js",
    "revision": "81b3e0cc75b517211e8bfb39801f6f9d"
  },
  {
    "url": "assets/js/29.95ae47ac.js",
    "revision": "5754d3c8fb305d3a36209371146e7682"
  },
  {
    "url": "assets/js/3.2ab35900.js",
    "revision": "eef835c0889f73f0f26a639c122c711c"
  },
  {
    "url": "assets/js/30.80669b62.js",
    "revision": "e15d5a147a8c650f35008d0790dccc50"
  },
  {
    "url": "assets/js/31.fe421729.js",
    "revision": "52641fb632190a345f4b4c0e26a2e612"
  },
  {
    "url": "assets/js/32.70fd5790.js",
    "revision": "bf723568749d6468b1088c6e03870435"
  },
  {
    "url": "assets/js/33.07f65e8e.js",
    "revision": "11f33a53e50f1feecff21527915b8665"
  },
  {
    "url": "assets/js/34.318bd831.js",
    "revision": "15c53287e2a13c2ca654b54bc70658c1"
  },
  {
    "url": "assets/js/35.0893adbd.js",
    "revision": "0591c9491fc232084730efe55dda1626"
  },
  {
    "url": "assets/js/36.0c5853e0.js",
    "revision": "378a260f135f6070bcdf7c31da1a0aeb"
  },
  {
    "url": "assets/js/37.665daaef.js",
    "revision": "d37ea363ed5598b9400791f383540f80"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.33e21831.js",
    "revision": "d9d511e949929508ce6d2d673839ebf3"
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
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.ab37a683.js",
    "revision": "4aaaf383786aea5a1d36132d389ac2ef"
  },
  {
    "url": "index.html",
    "revision": "8e0861315741779a59439af0608480c7"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "2a9c724413ca55441b9ff3bdf85d154e"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "391c622445ca260c4f4140b071c03cd7"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "5c0416e50e17cd9fc3cdbdaaced72e40"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "766057adf2adde81c8ba7c423c89c42b"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "cce3f7cd6ece572364ea0338fa153007"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "2dddd70cf02daa9f1ecdef79e546b038"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "50d01e23d08c115fc29f4b933c8a0456"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "8146c9f9b342373129f65a7e7f0977a8"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "8bb959a667fec29cfe2f314465054ff5"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "ecd08b7dd5cd7c6f723ffb2c712e3112"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "739363f3fd58c9976cb817f2d4fd7e53"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "082ab1f0d8b886a79d8e19ddd77be03c"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "3a61887ab3841446c24da9b012dcaa0f"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "9af40e310d543777920e86a522429ed7"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "79bced46aec2a9f2a9f8b45ee53499cc"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "d4577844cda452a970b4fa7486e9d288"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "3a2825814bd6648fb6c0fe455f011a5a"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "cfe8923c169e1ff5cb756dfb20573c12"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "a6f8e733ef57e9fc5858ac9dcc04c9b3"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "c015c75f419ec55b7e78383f06f0746e"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "9c5c2e57851e9380a534d02e7d80905e"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "5bfd8d5682eef5264a74d471be6e0e1d"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "9c734dca8adbfa38fcbe9aab1951ebc7"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "0ade0175339e7546887b313abe3503de"
  },
  {
    "url": "zh/food/index.html",
    "revision": "48530b21cfb76e3c8f8dcc8f8d54ec92"
  },
  {
    "url": "zh/okr.html",
    "revision": "9fc38932641f2786229d863d6ae6ae27"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "e87b4d231ab551fc7e9f2683195926aa"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "f76657f731ad18ac552afb1048394deb"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "11b99a45a5ed061720d2ee7b4b3e1dab"
  },
  {
    "url": "zh/read-list.html",
    "revision": "9a583956ed1ab6581b43d40499d0a7d8"
  },
  {
    "url": "zh/task-list.html",
    "revision": "8599dd48759db55cf12bfe1d2ddd1b9f"
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
