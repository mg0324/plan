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
    "revision": "12abcdbfdce623ac773e356bf4772373"
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
    "url": "assets/js/10.20817ce0.js",
    "revision": "6dacc485109e29b76248571f4e4098dd"
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
    "url": "assets/js/14.4d0ed21a.js",
    "revision": "807eb9abb8e16927cd5068b716bb0843"
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
    "url": "assets/js/17.793b0552.js",
    "revision": "6cc6f1d8ddce5bb0923a982bc11dc108"
  },
  {
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
  },
  {
    "url": "assets/js/19.46403062.js",
    "revision": "a40442ec182e1c37b22cb4ad05321b1b"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.6a5a1f44.js",
    "revision": "8fbc65c6fac85109f9448fef03767ff6"
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
    "url": "assets/js/24.df1cc411.js",
    "revision": "86451a5f3915a63b0d535d9ba2157daf"
  },
  {
    "url": "assets/js/25.b699f3bb.js",
    "revision": "e241661b585f42bf3eb1c9df09cdea30"
  },
  {
    "url": "assets/js/26.c9c48152.js",
    "revision": "d73d844b2ff3a6d8fb991fa380f5183f"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.8b8797e3.js",
    "revision": "d3b47c92905660084611e1185e743668"
  },
  {
    "url": "assets/js/29.2bcde2c1.js",
    "revision": "89e30d0ef2c335a9c8f916ce22921d8e"
  },
  {
    "url": "assets/js/3.ba9b2627.js",
    "revision": "3b0cb087d25cfb57f7d553add3f18f3f"
  },
  {
    "url": "assets/js/30.850f2e2a.js",
    "revision": "cd897d6d37e21191d52db12d91527397"
  },
  {
    "url": "assets/js/31.c47bc20f.js",
    "revision": "e6ffac054355304cd1824a08a42d8379"
  },
  {
    "url": "assets/js/32.c3329864.js",
    "revision": "bdcfa20585cff4d047763f416bab0e81"
  },
  {
    "url": "assets/js/33.1144bc10.js",
    "revision": "3850d0baa68b7996b4d0f3f59d288b1a"
  },
  {
    "url": "assets/js/34.459d4e9b.js",
    "revision": "03a4654cb62859dee5aaa35a9dc67fd0"
  },
  {
    "url": "assets/js/35.40472b4c.js",
    "revision": "24fd61c56930caaf3b1b4508b3b28823"
  },
  {
    "url": "assets/js/36.216b9e65.js",
    "revision": "4fbb16b0db3888e83da8dd61b9aa7e8f"
  },
  {
    "url": "assets/js/37.ade1b624.js",
    "revision": "fc9b827638e34e5294337859f6165349"
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
    "url": "assets/js/5.c477b017.js",
    "revision": "860fa334fe3f7ff2f085ca07e8062064"
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
    "url": "assets/js/app.a1775823.js",
    "revision": "9a03c7bd572e191cb464b9a156aba1cf"
  },
  {
    "url": "index.html",
    "revision": "164309dbbba2244f3eb3b93349e5571f"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "3e1869e365b5239cfac4e29fb917d9ad"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "a52ddf8b445fc69b9f0f3dcb076c83bf"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "186359f8f08d0c89f0e0923f8682c67f"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "513109567b2d6f2db43c802cad1b8e04"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "18ddf44bbd03a48ba0340acc42c7cd7c"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "482c22db0f33adf5a9acb6062c1b8807"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "8b7184ab7028cf43049bd58d8ded62a7"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "98f0bfbcbcdadf6ddc665f0145cbd8a1"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "e895147ece7b03560af382dab252b29f"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "839b7abcff19f88c45a9d0bafa780309"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "a78b9acadfd9cfb30d07e69619f39846"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "069a19c107828602f8b7a1210955cdea"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "193f7e3889456786ec361ea0ee7022df"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "4fe8472a3cb16c431f02568e40f036bd"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "f0802a327720dc7578376bc302f6c59e"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "80b8882d3d3d12a6fe125cee96be1263"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "5f512509a9442e47909dd71fab11d1cb"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "79a6567125c0e23b5e7afc5446605b98"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "b551e885f980998095d44626c18d1514"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "0845b9424042a206f7bf80fe7e33ff0f"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "b4cc7f7506ef777a08e1b67afee1a9f8"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "095398ddc34c4a8609e51ffa6041894a"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "d177808ec2f195d1b158a292e9e2b61a"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "dbc87e0ac819f048f299f60eece2b622"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "97638abd959e23e388d8cbf769948677"
  },
  {
    "url": "zh/food/index.html",
    "revision": "7f4be52a384647e5ab07b9cc1fd2bc49"
  },
  {
    "url": "zh/okr.html",
    "revision": "ed9d92f58e13c1467ee10d1d8a845f4b"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "90d71a8e10ecfffcda227be0c93959d6"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "9778aceec025be9ea11c4c570dfbd215"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "417f46bd3650dfb0cef4ef18c54c0dce"
  },
  {
    "url": "zh/read-list.html",
    "revision": "dd9d5be4c5b9968a701258e727983da1"
  },
  {
    "url": "zh/task-list.html",
    "revision": "ecfe53f403a7ec51e7266f62b0ca55bb"
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
