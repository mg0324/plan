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
    "revision": "c76a2a4228a946024dd36dca663d6137"
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
    "url": "assets/js/11.f2b2bfb8.js",
    "revision": "34a2efa7b99dcef472d33097293cdecb"
  },
  {
    "url": "assets/js/12.08d038b8.js",
    "revision": "e277cd3d22e8ae6380e5928a734cb4a5"
  },
  {
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
  },
  {
    "url": "assets/js/14.99e06fa8.js",
    "revision": "60fb60472ef83fca78ef511d701b7a17"
  },
  {
    "url": "assets/js/15.df8a7f72.js",
    "revision": "9718cf201f0ecb4fd7c483e00ce4d936"
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
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
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
    "url": "assets/js/20.845ebcec.js",
    "revision": "d3a4f5851531dbd2c343cbe1c2d37dd6"
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
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
  },
  {
    "url": "assets/js/24.1eff1163.js",
    "revision": "0529b1880a9e25bd35c7ce7028137928"
  },
  {
    "url": "assets/js/25.70dd378b.js",
    "revision": "2b3e1ddc0e6b574ee75bfb16d642ed32"
  },
  {
    "url": "assets/js/26.417df8fa.js",
    "revision": "152f94441a52384021f8f401f39d7526"
  },
  {
    "url": "assets/js/27.a82be3a1.js",
    "revision": "ddccbe17115c0d5a32d3034bc5067d84"
  },
  {
    "url": "assets/js/28.5c62af66.js",
    "revision": "089916ca09d72099f8dc92d85a89e1a0"
  },
  {
    "url": "assets/js/29.d3fc1233.js",
    "revision": "5be3828bc5b9629f693693c1d3639853"
  },
  {
    "url": "assets/js/3.60bb5ebb.js",
    "revision": "2d4a5238d6da95093cfc613bcfbd0868"
  },
  {
    "url": "assets/js/30.07184446.js",
    "revision": "4ff68401f11be6a354a3c18a3a9aebfc"
  },
  {
    "url": "assets/js/31.66fcd09c.js",
    "revision": "3b64d3f8b26c18c77e475df918079a29"
  },
  {
    "url": "assets/js/32.8684650f.js",
    "revision": "8d6296947934e9cc0b25fbc2b938962b"
  },
  {
    "url": "assets/js/33.01048bb3.js",
    "revision": "dc352e032a249af39d822ac64998c59c"
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
    "url": "assets/js/6.558f4442.js",
    "revision": "1225fd0924466a37cb63985aef4dd97e"
  },
  {
    "url": "assets/js/7.18c6bea6.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.1d6b1195.js",
    "revision": "ac805448f6026cdc616fe9f1dbc21cbd"
  },
  {
    "url": "assets/js/9.2e2d9f33.js",
    "revision": "a264c083d3b290eddc2ef664f9cc3c2f"
  },
  {
    "url": "assets/js/app.cbbb53f9.js",
    "revision": "b91de6f416335576d9733b52f8b82a92"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "d19828ffec0b875c37307770d0a2ca83"
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
    "revision": "0558e8dc40732d6b63323b522efca7be"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "19524d8aa49b6f4369ed292734f5d700"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "0fba9db7a60984ac7f73d2c7a6a9b233"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "034f870504cb6765f81f9d688cecc621"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "a98eb539dd96e172d344017f4abfc908"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "2b0f30f4d0eb11455c1afb9d288b94c5"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "d9b4bcdc8af2b7ad622f1cc321a01300"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "95e6778557743e41c8c73c6f77cec4a7"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "24ac4d5d93ae10a8f0299c7e4a840234"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "14635096f03e0932fb37cdb07ed42dbc"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "9f07f66173c67c9a2b1327db236ce60f"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "eb80fa626cfa193c05632cd9ddfc3c5f"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "891311567b1ded2044fc767ecd4937b5"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "423859232afcfa2cad4000dd981693fd"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "39ca39d5e60b1f5c79092b817f7226ae"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "42867d63ea07bbb641dd89d2b3740823"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "a7953543221a8f999f5c717af88faede"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "0fdb89359c6560f2a5e1830705774547"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "c8a090c1f1746b59172873a20d114609"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "60d56eda0cae14f1cbaadc0081779f60"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "b1bec6298c4368840bc4a7fe012d820c"
  },
  {
    "url": "zh/food/index.html",
    "revision": "c40d97df02c944bd0971c79e186fb1c6"
  },
  {
    "url": "zh/okr.html",
    "revision": "83f447bdb3c91e690b95c080709dc591"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "fbc193fc115c8139da834de2192d376e"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "9152adc7dcf59487b18e7940618d70fe"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "93bfe6ba88af7174d55602ad25b38950"
  },
  {
    "url": "zh/read-list.html",
    "revision": "8d3b7765e84c4007f51d97ea1eae4265"
  },
  {
    "url": "zh/task-list.html",
    "revision": "787d4688341999901c56169e0ec248f7"
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
