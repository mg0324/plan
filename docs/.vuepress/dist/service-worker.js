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
    "revision": "fcb5ba498f114a834aa8db639137788e"
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
    "url": "assets/js/10.75ac6ef5.js",
    "revision": "b9e38dfa3d7b166e8206a60bd2215f29"
  },
  {
    "url": "assets/js/11.a36cda6f.js",
    "revision": "9a3cb448128b2c8e8ae56d210511a612"
  },
  {
    "url": "assets/js/12.08d038b8.js",
    "revision": "e277cd3d22e8ae6380e5928a734cb4a5"
  },
  {
    "url": "assets/js/13.28b0cb41.js",
    "revision": "6be50b9dab59e2dd5b20418e19e8fe5b"
  },
  {
    "url": "assets/js/14.4d0ed21a.js",
    "revision": "807eb9abb8e16927cd5068b716bb0843"
  },
  {
    "url": "assets/js/15.850049e3.js",
    "revision": "8cf9e31101ed13f68b9643a99969a028"
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
    "url": "assets/js/18.67b6947f.js",
    "revision": "810c815ccb5b4e3f000b15dae253d804"
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
    "url": "assets/js/20.fec602c9.js",
    "revision": "5ea7c2d44fe3c9f40002a8377ce14742"
  },
  {
    "url": "assets/js/21.a924b314.js",
    "revision": "a28a0be27781411908b5f834c777c020"
  },
  {
    "url": "assets/js/22.e54a27b2.js",
    "revision": "d04ba3c0dec2e1c8c1cccc1b2e090d98"
  },
  {
    "url": "assets/js/23.c76333c5.js",
    "revision": "5df9c72db1f68a485011e686c35a14b7"
  },
  {
    "url": "assets/js/24.57a92891.js",
    "revision": "9d3451cad61c92fde1dd51c0bc37df7b"
  },
  {
    "url": "assets/js/25.1342cefd.js",
    "revision": "962a50bb016d3a18b23b21dbac774189"
  },
  {
    "url": "assets/js/26.59838ccb.js",
    "revision": "902b3a46ff33111fb7de247e84cecf1d"
  },
  {
    "url": "assets/js/27.499d1495.js",
    "revision": "50ffd20f2848d774bbeef551b0c7fcab"
  },
  {
    "url": "assets/js/28.e15f8b0f.js",
    "revision": "640dcbeded4d52e41246e989ae6b856b"
  },
  {
    "url": "assets/js/29.60dbdc26.js",
    "revision": "2ae097b35aa16b553bd8863967c43b72"
  },
  {
    "url": "assets/js/3.6344c3f6.js",
    "revision": "b49df939339b71048e1167b1db75286b"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.c83200bc.js",
    "revision": "1b809559ef634b130bc20c5176560f42"
  },
  {
    "url": "assets/js/6.28746898.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.8e352ced.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.7202f28d.js",
    "revision": "fc69b6cc9fcd7a4eba62ffe69eb0e0d2"
  },
  {
    "url": "assets/js/9.cf24111d.js",
    "revision": "07b717e300fef49bb766280edc65c190"
  },
  {
    "url": "assets/js/app.51a9fe5b.js",
    "revision": "d3c73dd01e8e52c862a2d48634e7160d"
  },
  {
    "url": "index.html",
    "revision": "8d83bb6a3f0d8ce7ab4f55d162d5fe5b"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "okr/okr-1117.png",
    "revision": "a0713a157864d9282d8b834baa5b304c"
  },
  {
    "url": "okr/okr-1121.png",
    "revision": "b59d353dc6f51add7a7b1d37a1208b5c"
  },
  {
    "url": "okr/okr-1128.png",
    "revision": "19fa4931c32c6dda08af3c4650334de6"
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
    "revision": "bb2f06551bc4dafa3fd372202cb2f025"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "a61e3a58e7d7d88372d067a881b5f45d"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "d1d1a8e4791649c83f604cb273717470"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "f095b6ed13201e0ecb418b90e3a8b68f"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "42f6638877b067b17c6817bb47f82971"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "f6454b34f6d3c4fc15c70d81dc59f84d"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "d6ee3fbcfdcdc69a47c5ea67a970a43a"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "f9305de20ee0e0688e75f0a9892cce84"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "92a7d057d094192f028fdceb0a34821b"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "69eede53bb2586de0f92d970ca59b95f"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "2874fd5dff1c08bc2cb6af0403c784c2"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "5aabcd77f17df206b4faac45047364c8"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "9e0b5cb08bd6347bf3634248b6cc8b7d"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "9fed1a308e4e4215e5829f679e4ccfe8"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "9afce7d1d0737a2a62008c493407b58f"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "5e25b5222398da970e1a5623f7e2c1cf"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "949159e73b29a4720b4be664dc05bd80"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "b19457c88a025f4df44342fa136a6d71"
  },
  {
    "url": "zh/okr.html",
    "revision": "c6e03306b3010be2d1994960ad02234c"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "1c535f39bf57f0e653a876f9d3bb47be"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "d2909489a05f2bc34e116ae8af9db39e"
  },
  {
    "url": "zh/read-list.html",
    "revision": "515da3aeccb645ea9bc498278e7c7ce3"
  },
  {
    "url": "zh/task-list.html",
    "revision": "537ddefa8ebfebcde15f4db0ff8eda07"
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
