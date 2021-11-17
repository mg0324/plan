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
    "revision": "c5bfe9b67d850572d0389d594b527522"
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
    "url": "assets/js/10.aaf8fc17.js",
    "revision": "b5ad4c7f2e7ba541306027c0f9d08f3b"
  },
  {
    "url": "assets/js/11.b4a9fd11.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.c37ed8d6.js",
    "revision": "e87ce30e3d11094849c428b430433b85"
  },
  {
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
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
    "url": "assets/js/16.7979949d.js",
    "revision": "a85e3817e4b04f1c852757440c09b52f"
  },
  {
    "url": "assets/js/17.c082681f.js",
    "revision": "3252a370c87ced5936b40d989bf30666"
  },
  {
    "url": "assets/js/18.8a2b7a7c.js",
    "revision": "aaef11a4b325c2f08ede1b492292225d"
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
    "url": "assets/js/20.fec602c9.js",
    "revision": "5ea7c2d44fe3c9f40002a8377ce14742"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.ca1a088f.js",
    "revision": "24dcb5c96920b5f7bc24b29b33451066"
  },
  {
    "url": "assets/js/23.e749b3db.js",
    "revision": "d0de7ff9f7a89048b96070c3d4404261"
  },
  {
    "url": "assets/js/24.56b3f873.js",
    "revision": "ca58c8af3997c6b38b3f56edd93e0b9d"
  },
  {
    "url": "assets/js/25.6ab1e69a.js",
    "revision": "f84b626de650bfd865109100fe5594e5"
  },
  {
    "url": "assets/js/26.881844bb.js",
    "revision": "f11a15e09bdd5b64580db6830b20e201"
  },
  {
    "url": "assets/js/27.58019c01.js",
    "revision": "8e88cba678ea82361810bc849d2a4a8b"
  },
  {
    "url": "assets/js/28.905ed36d.js",
    "revision": "900455f466cfec6a88d0dbd47a8748c5"
  },
  {
    "url": "assets/js/3.38de6d01.js",
    "revision": "859e12db2258196c2f790aa0d3b5b750"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.c65b388a.js",
    "revision": "fdef2e814af151410bbfba7cf8f28073"
  },
  {
    "url": "assets/js/6.1a36b9de.js",
    "revision": "50a50b5ffac2ce6b2aad6a7c06805619"
  },
  {
    "url": "assets/js/7.74936d13.js",
    "revision": "5ed0b707c03ecc74347d165b20b21159"
  },
  {
    "url": "assets/js/8.7202f28d.js",
    "revision": "fc69b6cc9fcd7a4eba62ffe69eb0e0d2"
  },
  {
    "url": "assets/js/9.2e2d9f33.js",
    "revision": "a264c083d3b290eddc2ef664f9cc3c2f"
  },
  {
    "url": "assets/js/app.076aed17.js",
    "revision": "7e0d571b6f8f75878f7f657c38380edf"
  },
  {
    "url": "index.html",
    "revision": "77074ec01cc116d3bc70780181679171"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "okr/okr1117.png",
    "revision": "a0713a157864d9282d8b834baa5b304c"
  },
  {
    "url": "res.2021/01/01.jpg",
    "revision": "24a6753288c9e959ac5f949e8263295a"
  },
  {
    "url": "res.2021/01/02.jpg",
    "revision": "9449ec7ff862f7c6d1f6b299c848579e"
  },
  {
    "url": "res.2021/11/k3s-rancher.png",
    "revision": "56dd2cccb03d4412acec48499de01792"
  },
  {
    "url": "res.2021/11/k8s-dashboard.png",
    "revision": "b6984999f87d23966313f3a72f4c39fc"
  },
  {
    "url": "res/1220/01.jpg",
    "revision": "69ed2d8a020b1dee0df5d485c5d8d084"
  },
  {
    "url": "res/1220/02.jpg",
    "revision": "da343961b1dae3d8660729c743ff13bb"
  },
  {
    "url": "res/1220/03.jpg",
    "revision": "c8e192a28901026d2df0be37b776bd6c"
  },
  {
    "url": "res/1220/04.jpg",
    "revision": "f17470335575f7c6ea7043aaba059b95"
  },
  {
    "url": "res/1221/01.jpg",
    "revision": "fc6d2f6e4a2f5b95b1c97fa51f491e13"
  },
  {
    "url": "res/1221/02.jpg",
    "revision": "a633302b0a44373ce473777ba584bf74"
  },
  {
    "url": "res/1221/03.jpg",
    "revision": "0cf06ece4f6d66780120c3cb325c2d7e"
  },
  {
    "url": "res/1222/01.jpg",
    "revision": "58da52958499bc1f4a478e58e418cf8a"
  },
  {
    "url": "res/1224/02.jpg",
    "revision": "7987452b68fbaf4116fb28473c779d38"
  },
  {
    "url": "res/1225/01.jpg",
    "revision": "930c9e2256c0d7580c6426e24fd5f50e"
  },
  {
    "url": "res/1225/02.jpg",
    "revision": "930c9e2256c0d7580c6426e24fd5f50e"
  },
  {
    "url": "res/1226/01.jpg",
    "revision": "2677300e95ca1bc4839647b2074cc27b"
  },
  {
    "url": "res/1226/02.jpg",
    "revision": "99ab2fa5fdf8844c8fa6a46de40401db"
  },
  {
    "url": "res/1226/03.jpg",
    "revision": "3fbeddf3076d174bc177616500b8b4c4"
  },
  {
    "url": "res/1226/04.jpg",
    "revision": "79d481e36a95e44448ebcda8e3590fd6"
  },
  {
    "url": "res/1226/05.jpg",
    "revision": "0a0c36a6a2ff2ba2e3ea41826801c65b"
  },
  {
    "url": "res/1229/01.jpg",
    "revision": "dd1dbac7d1a74daacdfaed8920128f7c"
  },
  {
    "url": "res/1231/swagger.png",
    "revision": "e943aaeefa66bf0693a1b0fa25d23cc0"
  },
  {
    "url": "res/703/09.jpg",
    "revision": "048a41227a7e24a95403d8f9e5a57ab2"
  },
  {
    "url": "res/703/1217/01.jpg",
    "revision": "c2d2e4d857cfa76b7b1883b1da651ebb"
  },
  {
    "url": "res/703/1701.jpg",
    "revision": "bc1f22d1263af5c9f854ab191e5578ac"
  },
  {
    "url": "res/703/eat12.jpg",
    "revision": "9968b3d58f3723f347b74836e2baa0fb"
  },
  {
    "url": "res/703/eat16.jpg",
    "revision": "55a2a80cf8a2cc6e26cd73eded6abdef"
  },
  {
    "url": "res/703/eat17.jpg",
    "revision": "0d9c6ff68e67661df5068e17ba5da7aa"
  },
  {
    "url": "res/703/eat17.png",
    "revision": "1152d7993527917e3865629c9ad30383"
  },
  {
    "url": "res/703/eat18.jpg",
    "revision": "4419dcffbace4897f436755fd8a00420"
  },
  {
    "url": "res/703/eat19.jpg",
    "revision": "6b9e4186ad5f68280759cab9ec3c88bb"
  },
  {
    "url": "res/703/eat20.jpg",
    "revision": "61d8b31ee10ec6e0a4ee7ac48646b6d8"
  },
  {
    "url": "res/703/eat21.jpg",
    "revision": "0f6ce6c16253d5393a606ffd9756e880"
  },
  {
    "url": "res/703/eat22.jpg",
    "revision": "a2f239cef9e1bfa6ce7e534fa2042e4a"
  },
  {
    "url": "res/703/eat7.png",
    "revision": "1ebbd0a85474b624433f47efe396bcf0"
  },
  {
    "url": "res/703/eat8.jpg",
    "revision": "df9a86df8b43f55e0e1a0db995c02adb"
  },
  {
    "url": "res/byy.jpg",
    "revision": "cbc63330e435c09be5f9674804572c16"
  },
  {
    "url": "res/card-db-2.0.png",
    "revision": "72cabcaa3c587c7e04661c4634d3842c"
  },
  {
    "url": "res/card-xmind.png",
    "revision": "4daa9e3158e937a86c13e6671c52ccc7"
  },
  {
    "url": "res/card1.png",
    "revision": "08effeec1cc6b83623952cfd4088e399"
  },
  {
    "url": "res/card2.png",
    "revision": "d9ef2759f18d4b8ee2c1355502a051ab"
  },
  {
    "url": "res/cy.png",
    "revision": "7849aafe0d07d37a3102a8a54aef2168"
  },
  {
    "url": "res/ddd/1.jpg",
    "revision": "3958b285d07f86ad5e48e7214e0e4ee7"
  },
  {
    "url": "res/ddd/2.jpg",
    "revision": "0483c24078bfb3e2833a3eff8cc689dd"
  },
  {
    "url": "res/ddd/3.jpg",
    "revision": "1b6ca4bf6149ecbcf3f6304dddc2bf0f"
  },
  {
    "url": "res/ddd/4.jpg",
    "revision": "af48474787626e9bd9e7a18fe5dc9d4c"
  },
  {
    "url": "res/ddd/5.jpg",
    "revision": "3239840ff7fd50774c4dd098c8b00045"
  },
  {
    "url": "res/ddd/6.jpg",
    "revision": "3998511cff1d9869d9c2b70256fe4e24"
  },
  {
    "url": "res/ddd/7.jpg",
    "revision": "883ef96201d947f5f473634da3549dc7"
  },
  {
    "url": "res/develop/bqr.png",
    "revision": "4a90ac0068942cd0701b72746c3306cf"
  },
  {
    "url": "res/dinner.jpg",
    "revision": "875fe5c8110e28f1528122d313ed44c2"
  },
  {
    "url": "res/hqccyy/01.jpg",
    "revision": "014df7a4ea0673171e8f4df3137587ad"
  },
  {
    "url": "res/hqccyy/02.jpg",
    "revision": "2c568ee173d27e9f0063ac78d7c7e5fd"
  },
  {
    "url": "res/hqccyy/03.jpg",
    "revision": "aed434e3fc5b11c9b84af05a8b5a8bf8"
  },
  {
    "url": "res/hqccyy/04.jpg",
    "revision": "28cc61acb855d12442166a6260bca795"
  },
  {
    "url": "res/hqccyy/05.jpg",
    "revision": "fc50c866a08ee9ab6324c038fc2f32b6"
  },
  {
    "url": "res/hqccyy/06.jpg",
    "revision": "9745c0fa7c9bfb358255d4faba485353"
  },
  {
    "url": "res/hqccyy/07.jpg",
    "revision": "187e541aaf959c0670937fcc660405ae"
  },
  {
    "url": "res/hqccyy/08.jpg",
    "revision": "b5036d8938113cee3f0c0cf73dcd5511"
  },
  {
    "url": "res/hqccyy/10.jpg",
    "revision": "d8ec1bbb1b30b0f4037bac324231afbf"
  },
  {
    "url": "res/hqccyy/11.jpg",
    "revision": "928d0b843e71ac7d62ae07cf42d0fb8d"
  },
  {
    "url": "res/kafka-mutli-art.png",
    "revision": "e95eea3296d84f88efc4a0426f1f8a9a"
  },
  {
    "url": "res/love/tls01.jpg",
    "revision": "c0161aeb3e3b030b9e2368bbd23a94db"
  },
  {
    "url": "res/main/homeplan.jpg",
    "revision": "324f5f1b07afe528d76cf4baa9f5c662"
  },
  {
    "url": "res/mango.png",
    "revision": "aa27f8181c9bd52ccad37aafec4dfd89"
  },
  {
    "url": "res/wmdjz.jpg",
    "revision": "e479b3b03228230d9adcf538e1b839fb"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "9a69020e222c2d979e96f8a79f712af2"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "97761479c95692f7c1d04ddbd1520db4"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "9f9fc95257c337db2d0cc3dd0de00275"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "7cc8c66b5ad8915ab63d5b39fa11de8e"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "dd550472649c47a9e958e8efe52c0aeb"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "fe1d5499ae445a4cf7bdd81160967525"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "4a82c5409d61b5d62477bec423316205"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "93fcb60e8b32d6000287d526f7867f58"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "767c8bb50c6a3a0731d841f0bc932401"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "92a3f3a9eb742a112c5521dccaa17308"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "5b2bc3beb9ce184a14b1a5cec8980a88"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "644b34b9ed5fe59151b971ae48a25265"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "5462f3eb7f33914d12cf68a096cc444b"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "dd6e9845836b9fd9387d6e5fdc5576e8"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "14208079950d4e35d68b69e8ba2db073"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "844af84fe4be2ae994e272681023df8f"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "868e1c29b24fe2e24a9b11b21cfd5c4f"
  },
  {
    "url": "zh/okr.html",
    "revision": "392b53b5fa8cd58f0c43fcb6b21e3c14"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "2001b5a50fffc6324e0d1bbd7fe2794e"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "68c020dcdabf5f3b12f9ce64f74471af"
  },
  {
    "url": "zh/read-list.html",
    "revision": "4af97024e68f5b1843eadc5d78ad59b2"
  },
  {
    "url": "zh/task-list.html",
    "revision": "5136d6233f06ba62b91cd50122c432b5"
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
