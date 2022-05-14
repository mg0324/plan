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
    "revision": "e9d0a97fa111747f5820e6b56f853e36"
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
    "url": "assets/js/10.71f2ea8b.js",
    "revision": "4b9883a54c3067739e090f87e32cbbc7"
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
    "url": "assets/js/22.e2bbca0b.js",
    "revision": "eacb411948bf6242f5691360b85f44fb"
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
    "url": "assets/js/25.89342b38.js",
    "revision": "548237d11fc7448e4367d88b6876c622"
  },
  {
    "url": "assets/js/26.b5730ca6.js",
    "revision": "aa0b5ea4f80fc6f959ba2850c01a286c"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.3c7c31a6.js",
    "revision": "b4da4ab07b8e9eedaa2cab26fd42ab09"
  },
  {
    "url": "assets/js/29.63daf20b.js",
    "revision": "f80670c1fab8354859147e393db4eccc"
  },
  {
    "url": "assets/js/3.e896a0a5.js",
    "revision": "6716d50cf2c26dc65bf6826d32249acc"
  },
  {
    "url": "assets/js/30.f95242b5.js",
    "revision": "0cc81d28ea2b8a4899b629dd964e430b"
  },
  {
    "url": "assets/js/31.3441dbad.js",
    "revision": "635496e0c07f4fca4eccaba274552049"
  },
  {
    "url": "assets/js/32.27355b05.js",
    "revision": "c354c2326809cd53d59232d692936f2b"
  },
  {
    "url": "assets/js/33.7a452adc.js",
    "revision": "5745970355cd03d20961aa3b6b7d11d0"
  },
  {
    "url": "assets/js/34.b7010961.js",
    "revision": "b5cb9b4981abf710b4268da52b3a1420"
  },
  {
    "url": "assets/js/35.ab75f5ea.js",
    "revision": "8f40cffd3cb8f0074a77983c888c8ab2"
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
    "url": "assets/js/5.1e0a6c8f.js",
    "revision": "b8e0f6dd9a9b696ff400368532c8fbfa"
  },
  {
    "url": "assets/js/6.558f4442.js",
    "revision": "1225fd0924466a37cb63985aef4dd97e"
  },
  {
    "url": "assets/js/7.8e352ced.js",
    "revision": "0b446a30879f89942bc591f0f047aaf0"
  },
  {
    "url": "assets/js/8.2a650cbc.js",
    "revision": "c20ec6fcc4f604c789877aa83db0eb17"
  },
  {
    "url": "assets/js/9.2e2d9f33.js",
    "revision": "a264c083d3b290eddc2ef664f9cc3c2f"
  },
  {
    "url": "assets/js/app.13bf355c.js",
    "revision": "6f850dfe8cb72f59bcefd645cea12a11"
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
    "revision": "52517717a213cf11f402ed30cdbb7113"
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
    "revision": "00665bcb5699ae4f2d28a86125ce5845"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "3c4ffbb054ade61c4f2fbdc1657d1aaa"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "dce9b219b5faa8bf06287bc91ce1e619"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "fff6b2ffdd94e7cf814c0e4bbb147f2f"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "afd3521ef79e975f68285e2c4cc09a24"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "46a9a0d007cb9dccd176aea159d2646c"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "72062028d77202c98245b095641e1a3a"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "1cefe375abc39a8aaa5c9d561603087d"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "44bf4b4a10812534c616e2bb62aaa0d8"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "dce82ecefe4fd7c5bdf3bb81dd13ab7d"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "7bd2e99d01d18ee47bb6d64c9c11ea1d"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "6d3086ef008f5e3fe5aa4635bcff7f5b"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "f73140805099b33a18b73c605d968fbd"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "3a915801c4b19388cc4dc224ef5d7055"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "3416a4f119e5196190200579b4af20c7"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "a16f5752eedbda17528231019ef52af2"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "79cc6c712a1cf8041cb0c0792f23a8e3"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "dc518e06a9fcbf1dd567c1e1882f137a"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "7201fbc4f84ee47e339ef98d9ff063a6"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "34444b6529e8d74f09bbfa25d3daf249"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "534eeb26ff0b1ebab6517bba062c6462"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "79abdad55aeab4be206fcde000c550d6"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "45fe21211a8ccbdc9693d9254976e6fe"
  },
  {
    "url": "zh/food/index.html",
    "revision": "66951e34e5768756ab8d09f5ab613d1f"
  },
  {
    "url": "zh/okr.html",
    "revision": "88ea3f5ee2e62c1703ecf24dc003bbc5"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "e8ffac222b76884c00cfc0b2c58d055c"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "3abb4d4456fd00c0459674ddd2eb829f"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "2f78f864537d7cda737a628bfecc2d3e"
  },
  {
    "url": "zh/read-list.html",
    "revision": "ef49e8d3ba05640e42b31baa397610f6"
  },
  {
    "url": "zh/task-list.html",
    "revision": "5007f0b8cde37cd46e8fba2083d54194"
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
