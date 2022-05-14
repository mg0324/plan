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
    "revision": "71b7410fc75bf601f4e69c6e6376354a"
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
    "url": "assets/js/10.7ee79e90.js",
    "revision": "c4b6fa45f9a28cec1f14eb4d280f2e29"
  },
  {
    "url": "assets/js/11.7e5bee83.js",
    "revision": "dc534e8277bdd643346e8763294cfd73"
  },
  {
    "url": "assets/js/12.720bcfa1.js",
    "revision": "a91b541ad6ebc93e571ac2356dfec76c"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
  },
  {
    "url": "assets/js/14.5c4a20df.js",
    "revision": "f1a8809b11e4b83f1c40a20d6a5a5db9"
  },
  {
    "url": "assets/js/15.850049e3.js",
    "revision": "8cf9e31101ed13f68b9643a99969a028"
  },
  {
    "url": "assets/js/16.c967a865.js",
    "revision": "87d4b62d87953d21e4c0d069c273f694"
  },
  {
    "url": "assets/js/17.c082681f.js",
    "revision": "3252a370c87ced5936b40d989bf30666"
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
    "url": "assets/js/20.8e611342.js",
    "revision": "224e6b9ba6344c0199f62c3aba658c20"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.dad3274a.js",
    "revision": "b7d6f647e65ef1b2ce9e4d9c1b7cba78"
  },
  {
    "url": "assets/js/23.b7ade11c.js",
    "revision": "f81a73cea5c22b377a4c5105cf06e8a2"
  },
  {
    "url": "assets/js/24.026d37d0.js",
    "revision": "f5c6edf54208703fd35fc078d253ff4d"
  },
  {
    "url": "assets/js/25.b10872cb.js",
    "revision": "9fe8b90e9bed000ade22079cd4e62c4d"
  },
  {
    "url": "assets/js/26.0e6353d3.js",
    "revision": "e2aa6a570e53b90a30d5f5289d943bfb"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.195ed093.js",
    "revision": "3254f6ecc91da09cfc2edefe4336bd89"
  },
  {
    "url": "assets/js/29.7a8be062.js",
    "revision": "c86a7ac7ca67ae0d43f4634c283c0d4f"
  },
  {
    "url": "assets/js/3.e896a0a5.js",
    "revision": "6716d50cf2c26dc65bf6826d32249acc"
  },
  {
    "url": "assets/js/30.e27c98ac.js",
    "revision": "2c05688c761224b80cf07636fc5a04ba"
  },
  {
    "url": "assets/js/31.3441dbad.js",
    "revision": "635496e0c07f4fca4eccaba274552049"
  },
  {
    "url": "assets/js/32.27355b05.js",
    "revision": "c354c2326809cd53d59232d692936f2b"
  },
  {
    "url": "assets/js/33.7a7ab951.js",
    "revision": "d3f1a51d07660b9638886f6a507bfed5"
  },
  {
    "url": "assets/js/34.b7010961.js",
    "revision": "b5cb9b4981abf710b4268da52b3a1420"
  },
  {
    "url": "assets/js/35.ab75f5ea.js",
    "revision": "8f40cffd3cb8f0074a77983c888c8ab2"
  },
  {
    "url": "assets/js/36.020bb8b6.js",
    "revision": "373d25b6b48a2c095259fb5ad61f230d"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.5e1c31b1.js",
    "revision": "8fa1cfa1f8d3e2e83501a6507960e557"
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
    "url": "assets/js/app.90c74737.js",
    "revision": "3670acc9bf703f570ee9980ba45a8c1d"
  },
  {
    "url": "index.html",
    "revision": "d7e5e39394d53887af1cb5512c5cdf36"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "1014e4681b6a0615f7bbbbeac0da183c"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "2154b34ec965808276c4dc2ce0290dc1"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "436b1f6011c6891189f478783a51a003"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "4367ab08cb4bbf877abc8a5b289f406e"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "294c00b6704725785066646141ac6c28"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "6c6c8a9a724ef2124345fa12c518a0b7"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "90d2da75d88e70e4e0458247d2b96ffc"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "3a91fe324fdc462a782564e1780b66aa"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "909a977ee23239815ef0b01705043f01"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "d44780f85c5f384665641672e5838bb9"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "c438961212ecb0a5e25d84c8b36228f1"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "c704c574991789a1cd52d13b00869519"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "f068bb210805b1acfbc9d8a3064bf9ee"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "d2d99ead52dc21de348ebc3e31fa79b0"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "d20763b00a50ee3441ec37c2434dee7c"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "9f4dd29a35de9884e19ab15e7eca4102"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "bc842d571c11d970079a02981452314d"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "7ce92771be6832fa492f1bb6da0131fb"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "e9f2397e6e6bac407216b6ac1198b4ac"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "188600f211b2d7299d928ac95f9f002a"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "d3dcb2543911600e00fa8fbd8b17a08a"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "3c0be033059d634b017a0ef0f8bf34af"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "1beff896b61934cebe90c2ce08809420"
  },
  {
    "url": "zh/food/index.html",
    "revision": "a02d22bd093f77a782ae753ea7c422f4"
  },
  {
    "url": "zh/okr.html",
    "revision": "0d7e41d9ffa0721796ea552e897598eb"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "897b02f35087b23d18f40a488b020e4f"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "92e0290581b5c743e2ae41c5630e7bb2"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "ea03c0c177475a08e7ce39e668d98ebb"
  },
  {
    "url": "zh/read-list.html",
    "revision": "e0e536dcff3a9e46560f9a0a6709aef0"
  },
  {
    "url": "zh/task-list.html",
    "revision": "224f5d61d220f632eb102837d6475933"
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
