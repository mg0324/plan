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
    "revision": "b6aa6ea55e9ae91047f3c586c81b0023"
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
    "url": "assets/js/10.9d34f9a7.js",
    "revision": "402fc07a2e3421c38c4c95aa7a33195c"
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
    "url": "assets/js/13.2ef19d26.js",
    "revision": "343c6d2801c6894c088f4d23f668f6f1"
  },
  {
    "url": "assets/js/14.48993ffc.js",
    "revision": "e0ef964a3e718db8d5e66f659346820b"
  },
  {
    "url": "assets/js/15.c1f5af4b.js",
    "revision": "e0813aa85db6555cda83c05bad74e8a2"
  },
  {
    "url": "assets/js/16.99409455.js",
    "revision": "67f903c6d090255b4fba6bdd61ac9a10"
  },
  {
    "url": "assets/js/17.42f51d15.js",
    "revision": "df86f38ab76fd5b5963b01f5b39bcb0c"
  },
  {
    "url": "assets/js/18.8a2b7a7c.js",
    "revision": "aaef11a4b325c2f08ede1b492292225d"
  },
  {
    "url": "assets/js/19.c6c0cb26.js",
    "revision": "caf7d6b96272eb6cf073b2d40671d8bc"
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
    "url": "assets/js/21.b6eaf5d0.js",
    "revision": "507e2e1728ea9f3680998ceafad9a0ec"
  },
  {
    "url": "assets/js/22.3062d9a7.js",
    "revision": "3a064054481fbc517b786c80400ebac7"
  },
  {
    "url": "assets/js/23.b7ade11c.js",
    "revision": "f81a73cea5c22b377a4c5105cf06e8a2"
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
    "url": "assets/js/26.e7847dff.js",
    "revision": "cca5904d42876dfd5b35ca118d4fd17e"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.aa751def.js",
    "revision": "0997a014432dad3a313632f629d35f4d"
  },
  {
    "url": "assets/js/29.74e42be2.js",
    "revision": "69b4dbfe35172047fc76ed5fce8177c2"
  },
  {
    "url": "assets/js/3.2ab35900.js",
    "revision": "eef835c0889f73f0f26a639c122c711c"
  },
  {
    "url": "assets/js/30.057eaff4.js",
    "revision": "6ae156d223ff2bff6181474747960b5e"
  },
  {
    "url": "assets/js/31.fe421729.js",
    "revision": "52641fb632190a345f4b4c0e26a2e612"
  },
  {
    "url": "assets/js/32.77137fff.js",
    "revision": "3d99cf608834d3f8e39c671e11f900fa"
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
    "url": "assets/js/35.c635bef3.js",
    "revision": "b451cb839991a4ecb7c8f530e291ae41"
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
    "url": "assets/js/5.bcec1466.js",
    "revision": "c9255204abedbc9b9d010e4d7e50584e"
  },
  {
    "url": "assets/js/6.d94d6380.js",
    "revision": "c4798911d73ed22da2cc93a4c1a8328c"
  },
  {
    "url": "assets/js/7.5b54bc24.js",
    "revision": "7f376e60d32df6fee8876ce94a12aa7f"
  },
  {
    "url": "assets/js/8.b8ffd72e.js",
    "revision": "5d2600b2060d7b320ba5672e0b3ff52c"
  },
  {
    "url": "assets/js/9.421d6a26.js",
    "revision": "6b88754560c332319fcd708732f09636"
  },
  {
    "url": "assets/js/app.cc8f6d71.js",
    "revision": "b78f96e93a6ef65522b85aff4041a510"
  },
  {
    "url": "index.html",
    "revision": "4c10e26322e9338aa93b1d86469ff330"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "52622f67773ba50987285635f6d91616"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "91f0c79b075a2a72349098e532eee276"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "b6cdb0198b93c1ac53fd215bd8390097"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "624d5eda6088fe7053c048e20b635469"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "0e59f7fc576572757590aaa44179eb39"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "05abcd2771c511b9f4c94e61ebef85e5"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "4d79c98753be651dfc7d9c56e1170c18"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "afae46da3a236cf02232171c62112bdb"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "4594ca769dfd9fbb2e53f203559e73aa"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "652f0ced11e11afd2baa82f381c9f401"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "3718c0a516d7ad298baeda5d0c1517fb"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "941d1e96db8d0a70f1473bc13d195e55"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "59a5617231d931cb299096981fb813dc"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "0b48c235f5b0809b32f7e9889dfc0cff"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "ca1750048d25f49c59ad176d9cc33726"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "1bce2dbb7d2d8e4790c4465104e74868"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "6fdb81cd53efcc02c66944d1529a4a4b"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "c03b6f3a7027dfd4ab5874a17858b573"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "fba0f6863ee0057b4ae8dd81fa458837"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "5ec96bde5781caf27679626534e54849"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "4df4ce1eaaf7247cbf23e78028854ac6"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "10eb28c2779b7c0622141a58e14a88d6"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "40e0c574fb6e0104af06486cdd25166d"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "2f1bafc6fe93da162c957d479ef4e913"
  },
  {
    "url": "zh/food/index.html",
    "revision": "5541bfd06c0d144ef98c61885a7a4209"
  },
  {
    "url": "zh/okr.html",
    "revision": "c775bdb35274e649f52c041702ab7144"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "1593e1e9c643a2e04dc61d339ecab80a"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "c6f4936ba0124332b2de0d5d6b904396"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "3082a48c013ee46664cd1a47a6326f2a"
  },
  {
    "url": "zh/read-list.html",
    "revision": "083f130c87d56ed97d2b3d33c958eff3"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d31a45ed2912880cad976807cae1dcda"
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
