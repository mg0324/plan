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
    "revision": "f75cc60df7f1567c7c0e9bd8b136a903"
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
    "url": "assets/js/11.9b39838c.js",
    "revision": "cdf874e8e89f8c1e46a86948407129b1"
  },
  {
    "url": "assets/js/12.7df36686.js",
    "revision": "2b5678f5ebf21a54d7556f2a29486e5c"
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
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.8a2b7a7c.js",
    "revision": "aaef11a4b325c2f08ede1b492292225d"
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
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
  },
  {
    "url": "assets/js/24.1eff1163.js",
    "revision": "0529b1880a9e25bd35c7ce7028137928"
  },
  {
    "url": "assets/js/25.d82e4efc.js",
    "revision": "37ec4a67669fabafb112f2e8f710fa4d"
  },
  {
    "url": "assets/js/26.ee29810b.js",
    "revision": "1b89662ef11cf0204cc42ef7e7475ffe"
  },
  {
    "url": "assets/js/27.46733b04.js",
    "revision": "3b963c869c2edd6af66c0c3fc4415a0b"
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
    "url": "assets/js/3.ba9b2627.js",
    "revision": "3b0cb087d25cfb57f7d553add3f18f3f"
  },
  {
    "url": "assets/js/30.f6bc04ec.js",
    "revision": "47d3d8229020fdba60231b7ffda84bda"
  },
  {
    "url": "assets/js/31.b89e6ded.js",
    "revision": "8efba9a141b00e2f723e9b9f717b745a"
  },
  {
    "url": "assets/js/32.11f9b282.js",
    "revision": "60670259334a328ca46ed9a6757ee85e"
  },
  {
    "url": "assets/js/33.ce65c23c.js",
    "revision": "7ea18efbcf79e241863114688cf13666"
  },
  {
    "url": "assets/js/34.e07a3a31.js",
    "revision": "b60309c7a5ba8a809262bf4a283c0f4d"
  },
  {
    "url": "assets/js/35.3d3e9e68.js",
    "revision": "814bb59723bf7fb09ed9a2dc1ee3138d"
  },
  {
    "url": "assets/js/36.d2e9fbee.js",
    "revision": "6a32c909323e7bd9cd96c71b6a77fd90"
  },
  {
    "url": "assets/js/37.854babe8.js",
    "revision": "da4cee5bc8c8419c93e70af7ae497734"
  },
  {
    "url": "assets/js/38.8651ebba.js",
    "revision": "1936e392aa1b3e03be0445ece9a08074"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.d2465149.js",
    "revision": "632a3ca372edb8ccf11ee3ae532cf012"
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
    "url": "assets/js/9.684f7d03.js",
    "revision": "06dc5a2034222d0cd7be68d1532589b6"
  },
  {
    "url": "assets/js/app.2fe46a71.js",
    "revision": "bfd437e79a295f6ef5311930785e4ee1"
  },
  {
    "url": "index.html",
    "revision": "947e57c4f31e2a151ff3f8cb6f10df02"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "9ec3cfa8f22a6e4af4175f5e2828ccf6"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "7f647f114780ce675e15707234bbca10"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "5a2735c1e529a9afa34b6c8aed3059fa"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "9b77ebfaf0ce6b342ca22f13b46e6711"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "d4c274f4904abd45232bc8524ea1f5fa"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "df1e07a8213b32bae936a14c36ed839a"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "6397bdd7592009bfbaece53777b5fe24"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "7f1a201d1689d4d2913f4e5b0b5a9c04"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "0184e8b991ab7d859fd5690bfd7ddce1"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "fcdc0c551be01d8e14476a0352a7d7ae"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "28491b5a31810980a96fda40fc88952a"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "92c6b25d32f3ac976e98943a9ed5f80b"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "0acd8fd975193a439db593323131c196"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "a68f530fa628dbee4464cf7855d41410"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "5789e473d7ad27d088eab309aa536f9d"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "8949f09b0b6181b704e382ac9cbd17d3"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "4a0b684587d89aca12e1bd3ccd5745b7"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "8b4cbc12df4d9bca6d83047c58a172bf"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "2efb41de9d3c479aa61200b148cb39ae"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "a62e24a443b60bf779e78b91dc2dfb5f"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "d960bbbbf8b919c12b0700a3912cf585"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "25bed436d19ee60865a16850ec7e31e8"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "8b9a129c893bd15ba6198f3d63027858"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "3749c6803ff71c50c4f1bb7112a1ca3f"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "b7fe3554e2e19b5c4ffbaaa56e7c5cd3"
  },
  {
    "url": "zh/food/index.html",
    "revision": "e6677b5d08e3a820f05d0af1bc820ba7"
  },
  {
    "url": "zh/okr.html",
    "revision": "52d83163142b22dfcabcf7ed08bb3492"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "ecea5955bf6cadb91e93289f0c851acf"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "423bba311fdc8b056bdc3c8b37dd82c3"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "e4f6ef6a7c1b9907fa657d85072b2cfb"
  },
  {
    "url": "zh/read-list.html",
    "revision": "d7fd883c4ae32a16ee91014090056869"
  },
  {
    "url": "zh/task-list.html",
    "revision": "05745ab086cd876bf091c72e869340a9"
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
