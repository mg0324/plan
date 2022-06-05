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
    "revision": "1b9dbc75057f5dfeab26def53720fc4f"
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
    "url": "assets/js/11.d196c405.js",
    "revision": "86244f5ff6aa3329a546dcc2f7c0c64c"
  },
  {
    "url": "assets/js/12.52cc3fc7.js",
    "revision": "b943aac2ddef9ba080798a119423dadd"
  },
  {
    "url": "assets/js/13.b48df0d9.js",
    "revision": "9cf2489cac823d1b204f463d5f679a36"
  },
  {
    "url": "assets/js/14.38a12dbf.js",
    "revision": "e87a5a2649ab9164e54c28d075c5256a"
  },
  {
    "url": "assets/js/15.04ab7050.js",
    "revision": "b8220ad1e2cd2f5d07bd22269ca47882"
  },
  {
    "url": "assets/js/16.823c6165.js",
    "revision": "3efcec1ba5ddf7136bf2b2eb31370a0b"
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
    "url": "assets/js/19.56063d2e.js",
    "revision": "2e7b06df7ebed3089c58257da2e81cfa"
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
    "url": "assets/js/22.74b100ac.js",
    "revision": "9972e57d63d677ae2b424ec0430992c3"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
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
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.65b9404b.js",
    "revision": "caeb5ae8d0db087e78ee2078693d2194"
  },
  {
    "url": "assets/js/28.93a7b2a4.js",
    "revision": "0a3e7187d0a11f0d11e6a184572a4ed5"
  },
  {
    "url": "assets/js/29.cc9e4558.js",
    "revision": "499a1e7d080fd6a1d92391792a49a91c"
  },
  {
    "url": "assets/js/3.2ab35900.js",
    "revision": "eef835c0889f73f0f26a639c122c711c"
  },
  {
    "url": "assets/js/30.150511fb.js",
    "revision": "def1ffe56c5928205b52bbdf6162c0c5"
  },
  {
    "url": "assets/js/31.e9c020e7.js",
    "revision": "cb5179b05edede2280661d8c07387a2b"
  },
  {
    "url": "assets/js/32.44541f07.js",
    "revision": "63d7b57dd66bc6523617bae0d025d848"
  },
  {
    "url": "assets/js/33.447acdfb.js",
    "revision": "bf01f6b0293df3afe64d83e5758cec11"
  },
  {
    "url": "assets/js/34.fe4e9f51.js",
    "revision": "bb2c87169909e9260cb61c41c8ccc22b"
  },
  {
    "url": "assets/js/35.5ab533ad.js",
    "revision": "360096ae48fdda1868f50c4da63b5e4e"
  },
  {
    "url": "assets/js/36.a3fe4bc7.js",
    "revision": "cb05cc15b288449fa5823377768aed7a"
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
    "url": "assets/js/5.539e6a95.js",
    "revision": "e1c7c278c4edd9fd5b85fe5cf059cdb8"
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
    "url": "assets/js/app.92fd7907.js",
    "revision": "162cad722b66daa4ec2b3a6b76ea10c2"
  },
  {
    "url": "index.html",
    "revision": "6db7541aaaaec8983b959a3c190caf27"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "ee0cece2cf5668b011f02baec047fe5a"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "2ff0c11e078a6f36a89072b41f27fae4"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "325d79d865b292b897d844edb81fca01"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "0ed9a13a82acc8f4b19bf28f772393b9"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "271a6f400066e2c92c27c4f1c6e8e473"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "edc5c6d304c8afe3ce100733cb0c6dae"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "719b09d3e6145e0dc454ff77f8320c3e"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "0485604d7f4c7c016bceca913986215b"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "9dcead66a224b5d44108bd8f9852f945"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "5b8daf8b875985d61f8d728f0953529e"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "257525afaf3f6555f19c9c61a637c392"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "72a881aa3db09ef9dee48a94c91389ef"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "b06d9b17fbb753842b75467b4a6d8468"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "d26876450a885c413d452595acb806d3"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "f65d2880ee3f90770d5bd09657eb54c3"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "bc83223666dc6d38e0d494ecf0116b0e"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "5019caf40a7b01c064c84d7904198b72"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "992310447bcf2f55ed16ac323901b9d1"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "1970a3026c5afa4edea73a82f856f315"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "44e79f8c0614896154d2ccfb6a51e681"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "8b1d51773ce974473a94e185dd1b0466"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "059f7c14a85115a97b7d5524550985b3"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "9a1a2254cec2100054c01f5d44cfd449"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "58a8948aea335190be9bc35ab534804f"
  },
  {
    "url": "zh/food/index.html",
    "revision": "832f2705f12786f2d3e56fa6a10e8e5c"
  },
  {
    "url": "zh/okr.html",
    "revision": "78992f6ed0afba961cc9835bcfbbe962"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "3f0b84b14da1077a6b087d859f54c860"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "97f2829b41af5310ce8ed4db073e0b99"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "5474a9f0a77b4e50cc14cc7dca31aa91"
  },
  {
    "url": "zh/read-list.html",
    "revision": "e6837842afb9d34f2e31aec538cb6aae"
  },
  {
    "url": "zh/task-list.html",
    "revision": "ae2bc7a53d829308b0bd92ecd61b584f"
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
