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
    "revision": "18dc7c20298305984e45bcbe247da6d0"
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
    "url": "assets/js/23.49684edb.js",
    "revision": "17ffc54fef2393b2cb6e11e8633c2e33"
  },
  {
    "url": "assets/js/24.0468f13d.js",
    "revision": "503722105c20a8213d6ec79117dd2d42"
  },
  {
    "url": "assets/js/25.a5434497.js",
    "revision": "7e3578956b0133f07171a278c1e98532"
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
    "url": "assets/js/28.89469f02.js",
    "revision": "ba0080d97546b5f03fc5a31389413171"
  },
  {
    "url": "assets/js/29.ec22aa85.js",
    "revision": "9a7090d1f0453ba931be1d3562d44550"
  },
  {
    "url": "assets/js/3.e896a0a5.js",
    "revision": "6716d50cf2c26dc65bf6826d32249acc"
  },
  {
    "url": "assets/js/30.08424da1.js",
    "revision": "072e07e81b70f9786f563df4b19f38be"
  },
  {
    "url": "assets/js/31.f531190e.js",
    "revision": "69f8a594913d6e26ab3837b5f815f6d4"
  },
  {
    "url": "assets/js/32.29eca5b6.js",
    "revision": "7466ee88f96178710e18816233d25438"
  },
  {
    "url": "assets/js/33.7a452adc.js",
    "revision": "5745970355cd03d20961aa3b6b7d11d0"
  },
  {
    "url": "assets/js/34.b7010961.js",
    "revision": "b5cb9b4981abf710b4268da52b3a1420"
  },
  {
    "url": "assets/js/35.4679bfbb.js",
    "revision": "f7f19c49a1497c132057f574e2c4cee4"
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
    "url": "assets/js/5.8d0357f4.js",
    "revision": "e45ed211151236447bf3039a91177e9b"
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
    "url": "assets/js/app.537b8671.js",
    "revision": "d5589ca76e9b80abe1cdaac869b8148d"
  },
  {
    "url": "index.html",
    "revision": "e6f6616f1a70185c1481761127e5d4f0"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "553ea88e4175ba89b6ddb16dcfe3d450"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "98033ce4e99af6c145f00d8bb2222326"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "26caade9638c018f2127ea7bbdc5c055"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "6318ea3602df7ac625058aab06d0ee16"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "2cfa9470546e0b157ec1a6f229574703"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "816702f67c5a0155be4a52171a2388f3"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "4bbea8910f01b95abdd463114e490d99"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "071143b9c483679912ceebec706281a8"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "7fcff7b1954d0289fcd9b998c639f021"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "23894ecb9edb30546024da82345e371a"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "9f8729c9d28b63283d69c78400370265"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "e2534156f7e022c499e2345554f64e6e"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "d977a0e223c36d388fe6bd4bab0dd288"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "77ee0f6eb10b964928dc2f6ce94032cc"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "bfefc62642fe38f79fa003f63e30ee0a"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "f7ec1e0d5d3407baea48a7fa6de79ed6"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "d138dd44fba2b54bb68bf8dc5d5e0c5f"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "49b17c6d164bb2709562ccd025289018"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "1da506e9b22e19c7c036d4d75bf41f6e"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "afca335043266524c42cf2a25a7a0cef"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "52d9ba458e2a0c2f5693fef4b10535a0"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "3698ec123a3da76599725c3919ea2723"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "70adcbbf4d43f9ebb99b7cdb35bc1757"
  },
  {
    "url": "zh/food/index.html",
    "revision": "f4b3370b5f5f390ee8d005f3bf4ab1f2"
  },
  {
    "url": "zh/okr.html",
    "revision": "09e3c69e82cda1e1d74e6adc938f87b3"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "a0a41f7fbde5fc9816977520a0aa2a27"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "96212b3c55fd3633f75c3a40e1a1d840"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "6dbf32ae2fd7ebaabbd9961ea9111f3e"
  },
  {
    "url": "zh/read-list.html",
    "revision": "947c7e82d73383ca1bba9dad1aa8df9e"
  },
  {
    "url": "zh/task-list.html",
    "revision": "9f4465f8640c150fdc6d2f89fb81897a"
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
