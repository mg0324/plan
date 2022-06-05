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
    "revision": "5db5d39a9131799fc0a7b6cd3c6a0d96"
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
    "url": "assets/js/11.af5e4fba.js",
    "revision": "ee29d6d5a5e675f192d39569e8f37cfe"
  },
  {
    "url": "assets/js/12.bf695fdb.js",
    "revision": "944671a7ce559ed6cb7b86da35ccd85c"
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
    "url": "assets/js/15.c1f5af4b.js",
    "revision": "e0813aa85db6555cda83c05bad74e8a2"
  },
  {
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.671cbba3.js",
    "revision": "0130df8244b4b4910821401ebd2a6b18"
  },
  {
    "url": "assets/js/18.ef746a9a.js",
    "revision": "e54fb5f98a977ed20a48332f92092374"
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
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.dad3274a.js",
    "revision": "b7d6f647e65ef1b2ce9e4d9c1b7cba78"
  },
  {
    "url": "assets/js/23.47f89b81.js",
    "revision": "26ae240f183d4141d68087261aa98875"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.349c1454.js",
    "revision": "f2b301b235d85fc1a8822d23e77957a9"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
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
    "url": "assets/js/29.d428f6df.js",
    "revision": "eb00599d45f255efdd6b98da7e31fc29"
  },
  {
    "url": "assets/js/3.e896a0a5.js",
    "revision": "6716d50cf2c26dc65bf6826d32249acc"
  },
  {
    "url": "assets/js/30.d88b9fb8.js",
    "revision": "c3656119cd396518842844ac50d1327b"
  },
  {
    "url": "assets/js/31.323db286.js",
    "revision": "0d72eca4b4dd294a98316ee07f460db4"
  },
  {
    "url": "assets/js/32.2d048710.js",
    "revision": "06529760171b5cd4b08ab866cdac96f0"
  },
  {
    "url": "assets/js/33.89376d74.js",
    "revision": "a54dc9b1c78ddd7cf27abf2586a4f7a7"
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
    "url": "assets/js/5.2f9aad29.js",
    "revision": "d0505a141a09eb09756e3f9a393e830b"
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
    "url": "assets/js/8.b8ffd72e.js",
    "revision": "5d2600b2060d7b320ba5672e0b3ff52c"
  },
  {
    "url": "assets/js/9.62296bf7.js",
    "revision": "8f6d145a13825b5087ca5861fb7f5cae"
  },
  {
    "url": "assets/js/app.13d81971.js",
    "revision": "a3443e12bd920c9514ae6f3dd30106b9"
  },
  {
    "url": "index.html",
    "revision": "45e7732ed4ad8f32fb81f83c0c84c96b"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "da0bc606dcc6e58472238fefdcc79521"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "aa57e29468a209692e9d9bf7e106a4f6"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "ae2a15aceb1899327ce107972a4e3966"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "238375fffc94c35432d44660f9891a88"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "38dbb2286c3a38e3a8e72eb09b1c42bb"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "d20bec50ef7d958522552a579fdf60ad"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "53f83c62ea68cfca2c47403e9716d526"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "789f8d9a06c176444b81872ce1a0bf5c"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "9a7a42e0344f8f11c487c7dae54e685b"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "4a3d58e8b7deb286e18e1292b0b5bbaa"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "4760418d458a58fc1964a2dfac2ac35a"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "751fd922a528c5e3fa14152c94360d1b"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "9d5e155a682c29066571e3a19c42e349"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "c5680f4f83ddfc750e7b23ef9826373d"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "7c67451364596d6e790e813b5410252f"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "711c52ee79d69fd5e73e322b23227ebd"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "b06355c7a956962985415f8534642923"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "f84e932099003911b6ab0e3935ddc539"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "0900de72cdce0011480e9b48f6b26d52"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "92b2a14744a6f475f8ef17485a43cb2b"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "eed47cdc0f96a9c30f99297885c2c5c1"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "fe304201ea3815eeb2b68a0b62f5ba15"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "6d38c0dcc3efff259cf8aba78cc4c3f3"
  },
  {
    "url": "zh/food/index.html",
    "revision": "2b91f40824d9b5201c513b22c966d881"
  },
  {
    "url": "zh/okr.html",
    "revision": "f179d52e0d5669071b0e1d6f0a5d3b45"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "6c66dba1a479538d96bf89b2ec3df479"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "2ad7703c7e71d5951ac524f679b169dc"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "2bbee910b9917e4aef2643e53d4f3b06"
  },
  {
    "url": "zh/read-list.html",
    "revision": "c02e4699039784f84db1d68d22a51e8c"
  },
  {
    "url": "zh/task-list.html",
    "revision": "45c9f31f20ebc9434b8f102798966d39"
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
