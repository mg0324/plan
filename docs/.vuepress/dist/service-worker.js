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
    "revision": "6b80bd8be388291bb79cc444c691941d"
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
    "url": "assets/js/16.b3f29e51.js",
    "revision": "8c8f89e01b5c1315f3236743986e6e28"
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
    "url": "assets/js/25.d3e9a014.js",
    "revision": "d99e38a9d06cecf3e098a1b0067d4d47"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.46733b04.js",
    "revision": "3b963c869c2edd6af66c0c3fc4415a0b"
  },
  {
    "url": "assets/js/28.12fc601d.js",
    "revision": "e9293029a3584d2bccfd971682e0e921"
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
    "url": "assets/js/30.ab63f95b.js",
    "revision": "0beea4cceeb11be02c363dec6292f19f"
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
    "url": "assets/js/33.21616966.js",
    "revision": "fae3efe44570220bdda88c723dfa5251"
  },
  {
    "url": "assets/js/34.3729e061.js",
    "revision": "905b2d71f64048c7e46ec302f9471164"
  },
  {
    "url": "assets/js/35.0b3b60ad.js",
    "revision": "74a21c72b86964dca13f09a37706f93e"
  },
  {
    "url": "assets/js/36.c16b0d2d.js",
    "revision": "20e077af627797fcabe07c107a214ebe"
  },
  {
    "url": "assets/js/37.3e69f8a9.js",
    "revision": "e643659126edce7037d42935e6b61636"
  },
  {
    "url": "assets/js/38.3e91f651.js",
    "revision": "8633baace8c9e2b8683d6efd64caf5e9"
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
    "url": "assets/js/5.29f11311.js",
    "revision": "afbdb3a23e0740c89dd2b8ac089117bd"
  },
  {
    "url": "assets/js/6.64adfb47.js",
    "revision": "2429eda5ba8704fecec76bc301e761ec"
  },
  {
    "url": "assets/js/7.4a9a8b1b.js",
    "revision": "3a2009230d603faf0b31cac3a641cfb3"
  },
  {
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.62296bf7.js",
    "revision": "8f6d145a13825b5087ca5861fb7f5cae"
  },
  {
    "url": "assets/js/app.db309597.js",
    "revision": "55225b9747dec3c17a8c22b8ca036889"
  },
  {
    "url": "index.html",
    "revision": "b09e807fb9ebe56be06192aa15c548d5"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "1a32570bc91e821cbdeeb2f19c30d23d"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "cd0a1840a256c3c1199328e6461c088c"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "e00f1b829900f1fea8a2ae1e6659b226"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "d595849f2b91ec8451e1a8227a3607ca"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "a209861db018e60eaf0514762d663b9e"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "8321d0d82e5cd41281e6c4f70f2daaa2"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "7a68841ff6f673c07785fd6e4f09f20a"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "f9bb568fa0d61e83634008720667333f"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "280f5ed11be3c88fb3101e3030701d9c"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "99088c285dd393ab49301db89702aadb"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "69ecd9f58a3fa54ac9346b33a1756c8c"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "bdc9e9b75034db2882db3f34bb100bd8"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "7b3bb56e1ebdb49b3da0d32347bc41d0"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "64b8437cc28af309579556be15783e86"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "1092b38bd3520d3c2c0a527d56409f50"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "0c91dd563ca0985019f78bf2bbf15296"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "acca1b7b3df35d0903a468697e54bb3e"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "abc9c115fb27a0ce34bb4f059903ed97"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "d3557e9e6bccc4f7b55ced317989677e"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "480afe85492311da762b6623dce37dfe"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "fc5bfa279cefe6685af5ad509c088e7d"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "ce9aec5b760c07a5d9ff9bf1e6f005ca"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "94e72ae81f5776cc1939c28067b2db1d"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "4798b22fe9b05ea763e6b45572598c1e"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "2bc5ecba95062d6ff81f0b28be4f87fc"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "31ada32c72a9702da0a0597b1c57c130"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "577a4c1b6fd1d72b8448cd05d2daba0d"
  },
  {
    "url": "zh/food/index.html",
    "revision": "47192a91d02696c32a9c625a778b1f70"
  },
  {
    "url": "zh/okr.html",
    "revision": "42e833e725ad597173019db619db6725"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "1a64bd8ed3faba30422cf7cbe1891710"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "edcbc1092be4e6a1a3a54eea5178362b"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "e6125f2346c17e1353e6a1dc990ede54"
  },
  {
    "url": "zh/read-list.html",
    "revision": "e26d1cc5660f124d08e81b621137a1eb"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d980bca3e6489d3a555f9fea1cfeeed2"
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
