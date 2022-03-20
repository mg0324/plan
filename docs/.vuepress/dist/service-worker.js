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
    "revision": "76737be8fd58de01e2e3c537b9e0f9ec"
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
    "url": "assets/js/10.d1c8c32b.js",
    "revision": "32ebe1a12de90915510007728664cf38"
  },
  {
    "url": "assets/js/11.b4a9fd11.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.a59f8819.js",
    "revision": "8a5ef89e5cdb2b279513e9019a5fef62"
  },
  {
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
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
    "url": "assets/js/20.6a5a1f44.js",
    "revision": "8fbc65c6fac85109f9448fef03767ff6"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.f4c56f23.js",
    "revision": "0ba06dde2da4de6ccf5c4c161f43e684"
  },
  {
    "url": "assets/js/23.f6675628.js",
    "revision": "759b784c3944c63e1616a104a9da0d5f"
  },
  {
    "url": "assets/js/24.026d37d0.js",
    "revision": "f5c6edf54208703fd35fc078d253ff4d"
  },
  {
    "url": "assets/js/25.70dd378b.js",
    "revision": "2b3e1ddc0e6b574ee75bfb16d642ed32"
  },
  {
    "url": "assets/js/26.a00fe974.js",
    "revision": "7db13f5f7d2adc7b312598082ae8c494"
  },
  {
    "url": "assets/js/27.e7a2df47.js",
    "revision": "ecf5b167131eee825d68f70ca69b070a"
  },
  {
    "url": "assets/js/28.77b00fec.js",
    "revision": "a3fe0da8490cb492a8a399255cef5e3f"
  },
  {
    "url": "assets/js/29.fd58bb5b.js",
    "revision": "7546019bf1e41016ebb793c211cc9b25"
  },
  {
    "url": "assets/js/3.60bb5ebb.js",
    "revision": "2d4a5238d6da95093cfc613bcfbd0868"
  },
  {
    "url": "assets/js/30.8446fbc7.js",
    "revision": "3d9b8e3246451055a0d97e0d003112c3"
  },
  {
    "url": "assets/js/31.076b0c73.js",
    "revision": "1d92b233c811e5c4346ac35a9f745056"
  },
  {
    "url": "assets/js/32.7a5531c5.js",
    "revision": "01ca319ebde40abb130f2c7c4c5a11cb"
  },
  {
    "url": "assets/js/33.967bd580.js",
    "revision": "83d0a5d7b6e28bb484f4cc2da004e824"
  },
  {
    "url": "assets/js/34.9b10fb58.js",
    "revision": "b2566d998e2061044bed442462e8a71f"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.301257ee.js",
    "revision": "eaf0855ac368633ac155004efdf97e5f"
  },
  {
    "url": "assets/js/6.7b2142a6.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.36dd57ba.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.c59e7ff3.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.822cf4ec.js",
    "revision": "51838dc526573a0952f84e1e20573edb"
  },
  {
    "url": "assets/js/app.a6e7a4fe.js",
    "revision": "fe882d1ef75e89a41c9b46dd2e785ae9"
  },
  {
    "url": "food/blcf.jpeg",
    "revision": "b10f3f7c3e26100f3dcb4c9441716d8f"
  },
  {
    "url": "food/cm.jpeg",
    "revision": "d7b37bae591c4ea61f53495a203d4a39"
  },
  {
    "url": "food/jj.jpeg",
    "revision": "f5d3de72dacd5763324dc03ce56493e5"
  },
  {
    "url": "food/jtbz.jpeg",
    "revision": "f55281483466a7c7d29e99094ec4613a"
  },
  {
    "url": "food/mlt.jpeg",
    "revision": "4dde4c9caa479bcbea9251fdf9bda675"
  },
  {
    "url": "food/tdbxgjt.jpeg",
    "revision": "d6eba8fcf4f9d1f84df10043c9700327"
  },
  {
    "url": "food/tdgljf.jpeg",
    "revision": "8873264a065597f21f83747f5a56f679"
  },
  {
    "url": "food/zjm.jpeg",
    "revision": "a1d5cc85698eea5554f9829aa24bc0b5"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "224654d2f92224c63fba42dac95f378f"
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
    "url": "okr/okr-1211.png",
    "revision": "e89720e3469769535faeda8e5316ba18"
  },
  {
    "url": "okr/okr-2022-01.png",
    "revision": "7098486a4209ef17a5e2141d2db0ff47"
  },
  {
    "url": "okr/okr-2022-03.png",
    "revision": "61ad782da867400a5dfc5728e6e22668"
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
    "url": "res.2022/02/haoge.jpeg",
    "revision": "3d8e45b3514c68abcc32a6cc5b8e9167"
  },
  {
    "url": "res.2022/03/leetcode.png",
    "revision": "fd2aadb232af37f0daf49a89dba7b155"
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
    "revision": "748ef2117294a63de791241a577b2d88"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "009b547f28273281daf27aeacd9cdfac"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "7310ff21f1065a5107a03a5aeae36c78"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "2c403c12403b3d346c106c97159b9fe5"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "569a0cab1667cd1cb07f338f6a61e10d"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "c8153d033dbcf074cba2172892c6f652"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "3d27b7e63773bafb4dd32228d0658529"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "fa3e1533ce43fbe3006b5e8303fa9569"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "d657a92fc39920eef1f950dec60303fe"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "2ccdfbc6eef359987d27ccad2ba61bd7"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "adbe18727fb648ac8f60374c6b2c2397"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "6a6db566298fec2569239bb58857562e"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "2a0b627f7c4045509adef40807b514a6"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "573216f0a9b5b24d50a498f08a5b1259"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "783659cc5f705ccdba88bc5665de08a1"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "43dabc75c0a0fc075e5a86e8dfadad9d"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "2f12aba69909c1212989dd993a417c2f"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "39d7069feb62a79a8f9a9ba8dfcdbfa4"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "337a18b6a42f8e797107ee533fb68a4d"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "7b66601fcf164d769caf0cf2280864cd"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "590e5ea17cb6e4c79166993159e4f35f"
  },
  {
    "url": "zh/food/index.html",
    "revision": "74b89e62e5b90f675d2604ab92cb5b49"
  },
  {
    "url": "zh/okr.html",
    "revision": "945fc924e204431a83dfc706b1984895"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "9b2d52e86ef3cbee6bc98137c78187be"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "24866d83474f7e60492e1560eac5b45c"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "9d6f03e0f6729b48eb2d2304b2d11ee4"
  },
  {
    "url": "zh/read-list.html",
    "revision": "69a0e02b06221236bc4cfd04e73560e0"
  },
  {
    "url": "zh/task-list.html",
    "revision": "b3dbb994c4c795cbcac96ca88da500d3"
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
