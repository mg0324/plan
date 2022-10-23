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
    "revision": "8e36b911fac6811fd209fee87a3e3f90"
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
    "url": "assets/js/10.2610db59.js",
    "revision": "9491dbc04fde99983089b5351600a152"
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
    "url": "assets/js/13.28b0cb41.js",
    "revision": "6be50b9dab59e2dd5b20418e19e8fe5b"
  },
  {
    "url": "assets/js/14.38a12dbf.js",
    "revision": "e87a5a2649ab9164e54c28d075c5256a"
  },
  {
    "url": "assets/js/15.7540cb15.js",
    "revision": "bb033b111e5cbc342b12bf7bd81dd5e9"
  },
  {
    "url": "assets/js/16.442118fa.js",
    "revision": "9f994124d9d0a3bff450f5f57252986c"
  },
  {
    "url": "assets/js/17.c082681f.js",
    "revision": "3252a370c87ced5936b40d989bf30666"
  },
  {
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
  },
  {
    "url": "assets/js/19.419505e9.js",
    "revision": "06136a20eecc2a9c964accef7203d104"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.35a334ce.js",
    "revision": "2142c9f13b1836f082a0ac1d09d6c1ed"
  },
  {
    "url": "assets/js/21.a924b314.js",
    "revision": "a28a0be27781411908b5f834c777c020"
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
    "url": "assets/js/24.f79a46c3.js",
    "revision": "2c3709141689ef611147b30fcd21cc38"
  },
  {
    "url": "assets/js/25.2db68ebc.js",
    "revision": "1e04d537f131137be61d2f020752d301"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.b776865d.js",
    "revision": "053e80f4f29f8fdf6b231abdc47cd347"
  },
  {
    "url": "assets/js/28.12fc601d.js",
    "revision": "e9293029a3584d2bccfd971682e0e921"
  },
  {
    "url": "assets/js/29.8a444b65.js",
    "revision": "12cf52206728fcae2a6752be49dcb5e2"
  },
  {
    "url": "assets/js/3.49b8778c.js",
    "revision": "5581f22d0624e86c7786f4088ad51325"
  },
  {
    "url": "assets/js/30.ab63f95b.js",
    "revision": "0beea4cceeb11be02c363dec6292f19f"
  },
  {
    "url": "assets/js/31.35fdcc42.js",
    "revision": "71cfe7d149665f0807e9194622d394d4"
  },
  {
    "url": "assets/js/32.216948d7.js",
    "revision": "0144d7fcd4014852ff1518eb841dd806"
  },
  {
    "url": "assets/js/33.6d9cf559.js",
    "revision": "824548638ad990f86c95e1d2187abfac"
  },
  {
    "url": "assets/js/34.af90d7d8.js",
    "revision": "949a3b933dbe73e0649f4459e7796657"
  },
  {
    "url": "assets/js/35.e4cb3d63.js",
    "revision": "3612b47cbc2ad598199c56e2c16bc8d8"
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
    "url": "assets/js/38.9d62409e.js",
    "revision": "3a20a482159eb31828d088d01d8391f0"
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
    "url": "assets/js/5.1fbae99f.js",
    "revision": "9891ffd5c0e12f89018d0b5065796be3"
  },
  {
    "url": "assets/js/6.64adfb47.js",
    "revision": "2429eda5ba8704fecec76bc301e761ec"
  },
  {
    "url": "assets/js/7.bb0388f0.js",
    "revision": "3f312ae1e540af06014b9a6e14e5f73c"
  },
  {
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.1c486c13.js",
    "revision": "4006985e008fbb8c35e4eb3012a65489"
  },
  {
    "url": "assets/js/app.55e32f0b.js",
    "revision": "c83c760d4fa51e63912dc5a20d7f2f5c"
  },
  {
    "url": "index.html",
    "revision": "13d82bcc564f5e2492a3d95c0333581f"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "598623d57d0b54ee833351e54bd1f59d"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "011a0b9b30e25d7a45b3f7797b26165f"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "e05fbbd753c0944b4a396f85e09ca786"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "47a192a5738484e733c2b52088a1ff79"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "4b7a38e2fdb93d703df97a452922391e"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "820ad6dd66a1e797920182f8f92024ef"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "beff1fccbf31fb037bea16b5d54d2f42"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "30058073b41821c47239c0fd5f2fbb3e"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "cf3f3240f231c7a4d052e8822d79b117"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "22617e25081ce0a80503951ef3448824"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "cfa4621cc715cc84c1fea91ab594342e"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "d0e788b3e4c6ad59753d302f5156434c"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "9cefad4250b73bf526d96cd5064e2561"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "a9fa8286a6b1009e6a6460e4c97a88c6"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "02271516741e9fccb2dca00fb9b20373"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "edacb82e5ae253e759701fd0953faf65"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "31594d7314703ac424a9c39c779322a9"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "d8c9d3f64b0de2070fb2bb2a5bae61f8"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "42359c0cef3f51cc704129cfa65a8231"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "df91f2b254873c2508d830d3ff3d48d9"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "c0803daf2a9c729cb33f4b4b143d54e2"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "3e4e65e4c0333c6a71779403950001c5"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "dff94b2e25b94c16c93accb32fb3279c"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "369c6f4e753ea151cd2f887a282e209d"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "99004b6949353522f9c6146659ab69a6"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "1db5ad08b71a9813d926570b2a46b574"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "8b3b2190bca2538ec19a9ba40d564ad3"
  },
  {
    "url": "zh/2022/a10.html",
    "revision": "b05127a27cd687677608e33779044d33"
  },
  {
    "url": "zh/food/index.html",
    "revision": "dc9a213fcfcf89f41fff77d65012383f"
  },
  {
    "url": "zh/okr.html",
    "revision": "95b12a1fc16b29bf1e86497b5d99a338"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "88f95f2249b2018c20aa0e34e6b8868f"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "1d2e4d27c741f22074d4b983aacfd9d0"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "9687632ebd7d004f98f85f2d7a7b3aac"
  },
  {
    "url": "zh/read-list.html",
    "revision": "9bda4e27c3aa559e9984fa836d98f307"
  },
  {
    "url": "zh/task-list.html",
    "revision": "8bc0ce3f0b9dea261b923d177620bdb7"
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
