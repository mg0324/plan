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
    "revision": "6e752eb2db5673d2fccfc8ababa6d237"
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
    "url": "assets/js/12.52cc3fc7.js",
    "revision": "b943aac2ddef9ba080798a119423dadd"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
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
    "url": "assets/js/16.6c9f33b2.js",
    "revision": "aeadae1bc20d69045d52a452d6349181"
  },
  {
    "url": "assets/js/17.42f51d15.js",
    "revision": "df86f38ab76fd5b5963b01f5b39bcb0c"
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
    "url": "assets/js/20.c1ad5b46.js",
    "revision": "2b255a4918fa839eaa4f8e09d5f1ad33"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
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
    "url": "assets/js/25.7cce75c1.js",
    "revision": "e6f5d168c74f37347f7e5f811734ce26"
  },
  {
    "url": "assets/js/26.ee29810b.js",
    "revision": "1b89662ef11cf0204cc42ef7e7475ffe"
  },
  {
    "url": "assets/js/27.01ee47c2.js",
    "revision": "347f30bfe0727eb316887c5da70b91a4"
  },
  {
    "url": "assets/js/28.8b8797e3.js",
    "revision": "d3b47c92905660084611e1185e743668"
  },
  {
    "url": "assets/js/29.fc84f505.js",
    "revision": "96b0da0fb9a427cf19156027bc3bc571"
  },
  {
    "url": "assets/js/3.2ab35900.js",
    "revision": "eef835c0889f73f0f26a639c122c711c"
  },
  {
    "url": "assets/js/30.6c99f453.js",
    "revision": "f8b770c31ad2f2108eab25bd24dd9fa0"
  },
  {
    "url": "assets/js/31.4cf170f6.js",
    "revision": "04f371966e54ee30cb4e2f5f1f1e4d04"
  },
  {
    "url": "assets/js/32.7ab8cb9c.js",
    "revision": "b43f94edf01027d6c5a1547cd72acb6c"
  },
  {
    "url": "assets/js/33.b40540b6.js",
    "revision": "7752a543041914ec35c43fcf4a14c003"
  },
  {
    "url": "assets/js/34.fe4e9f51.js",
    "revision": "bb2c87169909e9260cb61c41c8ccc22b"
  },
  {
    "url": "assets/js/35.c635bef3.js",
    "revision": "b451cb839991a4ecb7c8f530e291ae41"
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
    "url": "assets/js/5.5038d186.js",
    "revision": "8e833401b829f7b0534a9273902f7029"
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
    "url": "assets/js/9.7606dcbe.js",
    "revision": "ede8ad28dfee637619aea284466389cf"
  },
  {
    "url": "assets/js/app.9610b88c.js",
    "revision": "7151553bfdcbdbdee0174d94114b0ea0"
  },
  {
    "url": "index.html",
    "revision": "57484a8d325344058f490eb4503f75cd"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "34ca61d1bbad01fead464ddf745e3e0a"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "fac42edccce15cd61087bc99d279dbdb"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "f60cdc82a56cfce583b3367481563e4f"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "01e89ee8021138b4c18b06224ab745f6"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "b8e70e1c2673e8f843e735772b16bc10"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "7ccb06aaf1df9aff144c642ead2c86e7"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "6274f52d3343ee6ef64ea6e54566c59d"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "a7b319df0b7443e323123c6d204a27df"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "f14756dedc1468575d5ae8e592604e63"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "8b727c15074d7414060f628235d4f131"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "3a81d1077fa7f765cc06c7a9b4fba3b9"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "d18176a15078736bf41967992b33bdaf"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "1a9fe4be8a93a16bae57231068bb42b5"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "077652109b9671537b8e160c8a15b24a"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "efdda4a00e1cdb2aaa652b818b6f464e"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "d7dd9f91d704d2eb671ce07ba2581831"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "a147062f8bd84451a37e9bee94c29701"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "c475fd3431e1e2fae5970dc921df9c2d"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "630b9e4cd0e595973248bbb6562d197f"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "ba65c9cbe6e8e7571a41cf46b9671c61"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "70e4ad3e04c4d673f9105bd7b3aaa34e"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "0562159edaf6ac726adcb060ff5ac766"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "fb98817c8daf9b7d6dbace1a4f5dbb5c"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "5ceb56a4ed21f0ae3a3d8f9e5dd5943b"
  },
  {
    "url": "zh/food/index.html",
    "revision": "d33caff153b323114f67c737f0efb8f9"
  },
  {
    "url": "zh/okr.html",
    "revision": "8e08d86d3ca1949a14edf69fa1e8854f"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "c1b530d2427c4e61bfa068569d34c4af"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a7f7f5fd39b4a0d41c3ffd6e61c44739"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "657f16b875ded1a122b31a48c62b498a"
  },
  {
    "url": "zh/read-list.html",
    "revision": "0f9bb2a4a97ca4a1646b6ce60197afa7"
  },
  {
    "url": "zh/task-list.html",
    "revision": "955245fdbcb405131c168f862ebccc1c"
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
