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
    "revision": "1decee0023bee82d0f7975bc6e0ff2fc"
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
    "url": "assets/js/11.d196c405.js",
    "revision": "86244f5ff6aa3329a546dcc2f7c0c64c"
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
    "url": "assets/js/14.48993ffc.js",
    "revision": "e0ef964a3e718db8d5e66f659346820b"
  },
  {
    "url": "assets/js/15.8916a1ef.js",
    "revision": "16e1d9e80c48b7183b8a46c6acabc867"
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
    "url": "assets/js/18.fa2bad86.js",
    "revision": "b4337936b5619625003862ea187cb212"
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
    "url": "assets/js/20.23c5965e.js",
    "revision": "d102d4e26b11a85e551379c41128fc0a"
  },
  {
    "url": "assets/js/21.25b4139c.js",
    "revision": "e8ea844ab12f39ce5bfa0837654e9bfb"
  },
  {
    "url": "assets/js/22.74b100ac.js",
    "revision": "9972e57d63d677ae2b424ec0430992c3"
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
    "url": "assets/js/25.2db68ebc.js",
    "revision": "1e04d537f131137be61d2f020752d301"
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
    "url": "assets/js/28.93a7b2a4.js",
    "revision": "0a3e7187d0a11f0d11e6a184572a4ed5"
  },
  {
    "url": "assets/js/29.44d50a7e.js",
    "revision": "a1c03c7fe14a86730fb49145daa57aba"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.ab63f95b.js",
    "revision": "0beea4cceeb11be02c363dec6292f19f"
  },
  {
    "url": "assets/js/31.d5db5bcb.js",
    "revision": "ae08c82cfa337ffd121c8687ea3601f6"
  },
  {
    "url": "assets/js/32.aeeca0f1.js",
    "revision": "396c290f262308e30d5c7ea11ad7047d"
  },
  {
    "url": "assets/js/33.2e8fbabc.js",
    "revision": "84afe600ab9f5dd0ecdf977ab8904f9a"
  },
  {
    "url": "assets/js/34.2bf6d0b2.js",
    "revision": "02d9d6793763ad88b5fe550f3b9b90e1"
  },
  {
    "url": "assets/js/35.7f9f7fb3.js",
    "revision": "99d29f261841f6557ed29ae925bcf28e"
  },
  {
    "url": "assets/js/36.e3304e18.js",
    "revision": "e5e5d95d4dcde53e669786405c56a91a"
  },
  {
    "url": "assets/js/37.35ce3325.js",
    "revision": "fd1315e10648960bf0d0bd21a943de6e"
  },
  {
    "url": "assets/js/38.5443faa8.js",
    "revision": "7f0d64faee2a77dd10d55d3d454481e7"
  },
  {
    "url": "assets/js/39.91667a19.js",
    "revision": "a15841c7253f781f5c4bae28e1abd1c9"
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
    "url": "assets/js/5.6f06df5f.js",
    "revision": "0d2e9165b353434afd07ad5f4edb2e7d"
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
    "url": "assets/js/9.dde5d6bd.js",
    "revision": "9881279abc4d39754ce3fb1821eb6886"
  },
  {
    "url": "assets/js/app.e1aad0ba.js",
    "revision": "03d89d63d7b25956c54426fe42d95709"
  },
  {
    "url": "index.html",
    "revision": "d506ecaeddfbda18b55dc5c1fb6cea21"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "af05c47e505373631a628d5c4b741531"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "386d9b93242fc859e7369adbc08ecc74"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "5139ce5dffc09f229b4379db0a62b4c1"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "51c3e0d69fd35f9ccafa0f2a1940f265"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "3900717fbe99f0e899506917ee0f1cbf"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "fdb42705e0c0ab0d7bcec0080a5060c7"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "04777c78bf6b308b354096e25dab6a78"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "e99656fcacbef31c099cd3a7e5a239ab"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "3e219adbf2e4b0f1f656f09e5605d59a"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "d6c7059177061c8f64bbc7fd3cd9de2d"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "3e3cd67b72d0857820d24b5cbb023195"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "809e301353a7b96f25d6343e7eaa436b"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "27288bef3fa76591e3bc5ee16787b6b5"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "a486092a706909bb64fa27336841f427"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "786a50383b8a67414bf7836c697e8f03"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "daf30d99c99fc4747ba2c5ddf23f69ec"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "3ea248ad58933fc6792a7306f7093044"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "d1bab72421a13d69f0ccff463e58789f"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "ec3d7c840f3cded95f8eb1f38afb7162"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "88f6604c10ab86ec4302647b8994319c"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "ee74e3c12ddffc88d688cee041a5c7a1"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "f0566017bed59cd1f7dd9f3ee4da9c8d"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "43d75a9bc3137d12d0f07b54ced68705"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "b395b3b1c1bb26a429e13eedd3f93874"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "2f6c9b80d633ac2931e1b0392eb60a75"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "a91203108995cc5c75d15219586dfc8f"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "d1db1a1356e1c4ad9ab92c24441f5248"
  },
  {
    "url": "zh/food/index.html",
    "revision": "dfdc918ea2001ed3880dd119af52cd3d"
  },
  {
    "url": "zh/okr.html",
    "revision": "fa15641423f0cacb448597ddfb6d2199"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "29717f0605f530893f8c54cc90eaf576"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "9fecb2f28c8c3701e2b8d590124f47ed"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "f4fc373f5df28c4ab7ca2939e7cd50b4"
  },
  {
    "url": "zh/read-list.html",
    "revision": "f00dcfe16c39fbecd1b1e6f67c666cfb"
  },
  {
    "url": "zh/task-list.html",
    "revision": "1bb4cbf10e6c2e2581b95e2e30ec63df"
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
