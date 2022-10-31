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
    "revision": "75637616b7fc4248c0ab77b8b9f04256"
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
    "url": "assets/js/14.2ca74078.js",
    "revision": "e93447a182871704d50c863a2e282573"
  },
  {
    "url": "assets/js/15.04ab7050.js",
    "revision": "b8220ad1e2cd2f5d07bd22269ca47882"
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
    "url": "assets/js/18.0d988d41.js",
    "revision": "9ac066f009d56ade23cbcd59f563296a"
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
    "url": "assets/js/21.a924b314.js",
    "revision": "a28a0be27781411908b5f834c777c020"
  },
  {
    "url": "assets/js/22.c91c72a3.js",
    "revision": "f73e131be9aab9fcdcd8d5f9ea1e2037"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
  },
  {
    "url": "assets/js/24.1eff1163.js",
    "revision": "0529b1880a9e25bd35c7ce7028137928"
  },
  {
    "url": "assets/js/25.6706d5a5.js",
    "revision": "fcea021c421c65b4f74373e608db9d4d"
  },
  {
    "url": "assets/js/26.c9c48152.js",
    "revision": "d73d844b2ff3a6d8fb991fa380f5183f"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.b1dc03dc.js",
    "revision": "b4c4ddbce705607c5e784ad767c7c1f5"
  },
  {
    "url": "assets/js/29.5d94daf1.js",
    "revision": "24f823b407fbbbae02a765077b56f23f"
  },
  {
    "url": "assets/js/3.49b8778c.js",
    "revision": "5581f22d0624e86c7786f4088ad51325"
  },
  {
    "url": "assets/js/30.8db2a195.js",
    "revision": "63710f242269e663ed2167040bac3660"
  },
  {
    "url": "assets/js/31.35fdcc42.js",
    "revision": "71cfe7d149665f0807e9194622d394d4"
  },
  {
    "url": "assets/js/32.8a053384.js",
    "revision": "0c22a291f39652d0cfaeb3fc2bb8cb0b"
  },
  {
    "url": "assets/js/33.772be7b2.js",
    "revision": "b2adc9d083af2304a352ec5e3fabec78"
  },
  {
    "url": "assets/js/34.af90d7d8.js",
    "revision": "949a3b933dbe73e0649f4459e7796657"
  },
  {
    "url": "assets/js/35.f4e6d988.js",
    "revision": "73d2b160827af4929b7c16aaf7a5cc72"
  },
  {
    "url": "assets/js/36.fa4bff0f.js",
    "revision": "3e2f0bc9355d87d22267d96e17523b0d"
  },
  {
    "url": "assets/js/37.1808f353.js",
    "revision": "2ca429d6df1567a924d6d5c929f7c2c5"
  },
  {
    "url": "assets/js/38.5b9d5410.js",
    "revision": "bde16e881066d66e7939fbad3fa42ac3"
  },
  {
    "url": "assets/js/39.79702739.js",
    "revision": "eda5db379257268f1426e6ad872bcee2"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/40.e94141d5.js",
    "revision": "5b2bc02ffacf44e6ba6c9d5d98cc84b3"
  },
  {
    "url": "assets/js/41.496e4bf4.js",
    "revision": "0383a18deb2fc19047194db1b576b63a"
  },
  {
    "url": "assets/js/5.a142d0c2.js",
    "revision": "18f5f566bd6cc6158c19de733c9e16d1"
  },
  {
    "url": "assets/js/6.11efe41f.js",
    "revision": "8188ae4aba43c16bcb912627bc1bd31f"
  },
  {
    "url": "assets/js/7.db1dce62.js",
    "revision": "c7fb1dd0e90ca65b6c9738e123142f09"
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
    "url": "assets/js/app.64538942.js",
    "revision": "ad921aed52d2632c315c30debd9f7237"
  },
  {
    "url": "index.html",
    "revision": "c1a068462bf1191a5245f1d6cd524ff8"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "490475cd9d5a2f636d0e12ff61b74374"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "b89ddbc6f3058501466e2a52e40da00b"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "5e53c41c65278226b368134c7d38b848"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "2a942aa46a4b12497f9021bd3fb70410"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "858bd35745d1e6f23e0f58f8f157d94a"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "8aa6bc5b9b311573b846a94ea372d3f4"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "f88d5a2dc79e1fdb7c8dbec9ea21e5c9"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "2ff1d69d0dde224b8f6d1fd5c0cc2593"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "420a0e8332ad8b6090c25c83bbce83da"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "92ea8de70cbf780f8219a725ddcf4dc0"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "9dba875a3ca4263f60dc767da049689f"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "eb1718f8f793f6252b34a7010d37ca54"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "f16e69be719f5e58434268f117a22aa3"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "909f55c39617d2aa2e22c8a166e8ed05"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "2306725d01773c516c0c029656c5a741"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "a68dd57ef5195bfb9921b06f7ccf28f0"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "be5ef810de7e0add6c23115e3eacc0eb"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "0344bb303bc408e17875fe6e47a284ed"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "995abb5f0f7bed0f020ef088497c6a5c"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "1f1b2472c76c020db4785da383520f27"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "8dc9ed4e144cfdb7df74c07ef9f6d697"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "ce68da7f456092c4ee535476052d81c4"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "167d4aa481d7542afba13df7cacdc885"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "06e42c0abf8c0cb9ce14392e17b20c48"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "510eb5690cf09bb404dc759f3e767876"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "4e8a1a153c14b52bb628f52d18183b39"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "00b95e7c1ca1c8fb20a47dfa2061a59b"
  },
  {
    "url": "zh/2022/a10.html",
    "revision": "a0f24a8844f9eafdf70e80607b885434"
  },
  {
    "url": "zh/food/index.html",
    "revision": "16d367bf3f4e0bb6a9d4a083b85f9f67"
  },
  {
    "url": "zh/okr.html",
    "revision": "6b0e5261089b86a5479d774a0c004f47"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "0722fc94e9f40027a0809c766ab79342"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "53694aaec4ec94cd4971c8e973fb3dd4"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "977cfebe09324223a114d61a2a8ffe25"
  },
  {
    "url": "zh/read-list.html",
    "revision": "9e86ef420221264d7e336cc16a2055ab"
  },
  {
    "url": "zh/task-list.html",
    "revision": "638c97e2f3fe3543fe9d7382979523e7"
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
