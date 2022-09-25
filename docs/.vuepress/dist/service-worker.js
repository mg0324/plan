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
    "revision": "170dc97f96a5ae57908fb0a8baadbc69"
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
    "url": "assets/js/11.a08005b0.js",
    "revision": "6f93644375469a330b9c09c74f564ef8"
  },
  {
    "url": "assets/js/12.6c3c4dba.js",
    "revision": "06fb38bc92ec1143db1a9978a204f150"
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
    "url": "assets/js/22.dad3274a.js",
    "revision": "b7d6f647e65ef1b2ce9e4d9c1b7cba78"
  },
  {
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
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
    "url": "assets/js/26.7cae231d.js",
    "revision": "dbafe39bac274beb724d1e4babf575c6"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.c7675026.js",
    "revision": "e2e9d2cea17499def8268622672d5e99"
  },
  {
    "url": "assets/js/29.74e42be2.js",
    "revision": "69b4dbfe35172047fc76ed5fce8177c2"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.f37c072b.js",
    "revision": "5faac0d484102c26cf67d93d7b2a3915"
  },
  {
    "url": "assets/js/31.59f96dce.js",
    "revision": "2868637d1bdebb55a162065ad05b3910"
  },
  {
    "url": "assets/js/32.44bd3370.js",
    "revision": "ff0fa1d8cb1429b3f5a3b9b52c6da65d"
  },
  {
    "url": "assets/js/33.37da22d4.js",
    "revision": "0fa45ba33e45bc47b1b9c37f929c7a90"
  },
  {
    "url": "assets/js/34.a67d3e90.js",
    "revision": "5df71b9ab100d408d44dbebb0a701da7"
  },
  {
    "url": "assets/js/35.0b3b60ad.js",
    "revision": "74a21c72b86964dca13f09a37706f93e"
  },
  {
    "url": "assets/js/36.7b8730e5.js",
    "revision": "1b33a6137036fbb1a19cd98c7ecf0839"
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
    "url": "assets/js/5.cd8689de.js",
    "revision": "be2030c2996bb3f81782b6454d1037e0"
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
    "url": "assets/js/app.4934b858.js",
    "revision": "2e5dc2cf2e347d9d57b7c2542f05f28f"
  },
  {
    "url": "index.html",
    "revision": "4ec8ec4f20856f7650d81e51edda72ed"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "d7c74bed82895dee3e6d3718b3d31967"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "07c5e25dd370868976b345d331c27981"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "fea3278c78abb5b915543e55ce6d5d7d"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "bbac362626135dd6538737850ab78365"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "d5fee15f09be0897149ea5702fb9d19e"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "0b037215c41482250d8ef464388459ab"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "c9dbf95e06903e767ff51612d5f1a506"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "1cc808d68c6bdea2f0427dc806ead11f"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "848e4599113c5eff0e1b9b9a2a2e875f"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "d1a6866b52c8dc226a2eef4f0d1a5026"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "1088ad673021c82bd0bec135e73ba061"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "6cdffcd2fd1dd6b0ed9fb1474221f10e"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "daf4acbb4cd9080169385a56b74c1f4d"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "ad31e8699b5416a97ff7a07b76f8a3ef"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "f4acb0443345dae93f8c6f1bfab0df08"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "276e6e751e04ef372186ba371a640cf8"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "534972612713e34451f6a5fa898714d9"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "34d06e6e74b616f8e5fc11ba0390415f"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "07f148f49ae3858e0b3b369baf9c26cc"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "a8a02078b0027815184d986e674d4b54"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "ada49df40ed6ea7a76b66ace23d29d75"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "d4f60efc907a99dba2274b13cb8b1c42"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "7688f385a09dcc5b0d1acd2b85e2583c"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "a2e041a94b6e2fc6fe45418006aa001e"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "9f33b7e1efb1bb2cd6eb5ed28a162a53"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "4279071362035161c307b5dbbfe7c4ff"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "caa356eeb79b6dfc8ab3e635a7a34cfe"
  },
  {
    "url": "zh/food/index.html",
    "revision": "9c22bf1c6d6353748a48720f9ce3fa84"
  },
  {
    "url": "zh/okr.html",
    "revision": "0224a1d9537b63c8cf85017873956d90"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "063d03ea44c1d7a1ee346fbc1c518e4d"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "7594551d048fb253d07ae44e12573ec4"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "8b57e795e69423e00aa375c82003dc08"
  },
  {
    "url": "zh/read-list.html",
    "revision": "612fee6b6310e27683438b810a9656cd"
  },
  {
    "url": "zh/task-list.html",
    "revision": "51bc1efcc2435c9af85fc73114a864b8"
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
