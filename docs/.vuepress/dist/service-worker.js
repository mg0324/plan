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
    "revision": "13eb70491ce9e249236564719d203448"
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
    "url": "assets/js/11.b4a9fd11.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.a59f8819.js",
    "revision": "8a5ef89e5cdb2b279513e9019a5fef62"
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
    "url": "assets/js/20.8e611342.js",
    "revision": "224e6b9ba6344c0199f62c3aba658c20"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.e54a27b2.js",
    "revision": "d04ba3c0dec2e1c8c1cccc1b2e090d98"
  },
  {
    "url": "assets/js/23.de7de310.js",
    "revision": "c7dace209dac9477a9e3f0766b61f077"
  },
  {
    "url": "assets/js/24.f79a46c3.js",
    "revision": "2c3709141689ef611147b30fcd21cc38"
  },
  {
    "url": "assets/js/25.bffd7a6d.js",
    "revision": "f4b332a2ba0b21841f18d4bfc183641c"
  },
  {
    "url": "assets/js/26.9aba14f8.js",
    "revision": "d90072f4b685c239b903938bd6b5e75c"
  },
  {
    "url": "assets/js/27.fd08b68c.js",
    "revision": "fa61bb9e633371ef20f50cb83718651a"
  },
  {
    "url": "assets/js/28.617d0fdb.js",
    "revision": "a2cd8ec99cbbdc9f30b140db3427550a"
  },
  {
    "url": "assets/js/29.31599c8e.js",
    "revision": "a05ab3cc577b3b66b8a1abce643c41ad"
  },
  {
    "url": "assets/js/3.8cd73dca.js",
    "revision": "51d27ddba08938c9c7a4c7255ae06bad"
  },
  {
    "url": "assets/js/30.369e82af.js",
    "revision": "623d8028d68950394ea4d07718beb8c5"
  },
  {
    "url": "assets/js/31.4d6215f8.js",
    "revision": "7c62ceb1feaf2e8ba6d0377918ce6910"
  },
  {
    "url": "assets/js/32.743666f5.js",
    "revision": "670654a4016f46cae4d32efc3d5e60f3"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.f827ac82.js",
    "revision": "e9c888cbcfecbd030d53869a62834e84"
  },
  {
    "url": "assets/js/6.436dcb31.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.c1b3ce37.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.454a72db.js",
    "revision": "706ef9e37a5594d1fe1c0713577e897f"
  },
  {
    "url": "assets/js/9.dd349cfe.js",
    "revision": "7b51e9baa236b361de1c3632df510d15"
  },
  {
    "url": "assets/js/app.8e85bc0f.js",
    "revision": "c8a2bf7e2cabcdd907b404a945e6fa3d"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "46f79a7bfbc6e95265317f69a889b9c4"
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
    "revision": "3e8b54ce215fa8cdcd373ffa759b40fa"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "a775b7c2f45f77e5ec6e8b8407e5fce5"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "70578c9f0bcff64a25c9f06e3edd8f90"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "592127cdc8d9be96acf6d2c3728cb8fd"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "962627cbb456c5ca3225087184c7e45a"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "7dfa25b99dd4a216aae5ccb8c3aba348"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "a095599ed6736028a33ac6562839a66e"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "4395d4d041469ffb390677898ee71926"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "4c4081d65f6169ed6f7e3407c25414f8"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "80c9daf116337e020cec69f348aaf0bf"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "0e561b927686d2d2dd3f4e4972dfc58b"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "74c9db9fac3746d8994ae133397b29b0"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "26e78251bd03db7a505538f14860a304"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "56c0410949adf32067c21d7462dbf9e6"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "7726c0ea6d9bbf2e0dd6e4132b7bb369"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "50b20ed29fe8b1b1fced227b36df65d0"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "6994d8d97bfc199520cbac95a40bcd9b"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "f6d618a904df9015069ec3c6e573f99f"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "f600dc4beeb62d942bd387e62499db6c"
  },
  {
    "url": "zh/food/index.html",
    "revision": "7a44039261de4b082366f5c6aaa55308"
  },
  {
    "url": "zh/okr.html",
    "revision": "aae813d8d791456e644f8f9c897d3dc9"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "abdae12386b0a200403311052dba3a10"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "e0152fd3db7734ebe7143d42b8a5d8b9"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "21eb4b4eefe5bda74c82244ebf3fe8d8"
  },
  {
    "url": "zh/read-list.html",
    "revision": "acc03de7a1abdbf5877b19213c01a7c7"
  },
  {
    "url": "zh/task-list.html",
    "revision": "ad21e08204832ca1b8f5a5ee8c6dbdae"
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
