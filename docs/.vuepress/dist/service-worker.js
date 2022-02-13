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
    "revision": "5eef623d4d987c23106b3fcd618856e6"
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
    "url": "assets/js/10.a50b1080.js",
    "revision": "c24aa9aee5d65e3b8946298292e7242b"
  },
  {
    "url": "assets/js/11.2102c96f.js",
    "revision": "f42ff5e47d538d6dcbd4e6c3830cbbcc"
  },
  {
    "url": "assets/js/12.9120afa5.js",
    "revision": "4a430da513b9010243e560918bb85aea"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
  },
  {
    "url": "assets/js/14.78eca86b.js",
    "revision": "fb7949c8f3f1d286934c69fa614cf805"
  },
  {
    "url": "assets/js/15.8916a1ef.js",
    "revision": "16e1d9e80c48b7183b8a46c6acabc867"
  },
  {
    "url": "assets/js/16.85c84d08.js",
    "revision": "e656e00cb94b5384dd989a1439eb39f3"
  },
  {
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.fa2bad86.js",
    "revision": "b4337936b5619625003862ea187cb212"
  },
  {
    "url": "assets/js/19.7d5ed99a.js",
    "revision": "35037193dbb6008e204dd1393132a686"
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
    "url": "assets/js/24.026d37d0.js",
    "revision": "f5c6edf54208703fd35fc078d253ff4d"
  },
  {
    "url": "assets/js/25.2055eacb.js",
    "revision": "ee5308b00131405ca6889c8e85189d28"
  },
  {
    "url": "assets/js/26.f535e4be.js",
    "revision": "232ab083ca3ca536917df70a4c190c7e"
  },
  {
    "url": "assets/js/27.85d2cf3b.js",
    "revision": "fbb1be0e321527972c452c640448f667"
  },
  {
    "url": "assets/js/28.3513365e.js",
    "revision": "0ee77bbec88e46ed66f12fdde38efaa6"
  },
  {
    "url": "assets/js/29.7015846c.js",
    "revision": "cb6894930f0f63c1dbe58f86c05d0c5e"
  },
  {
    "url": "assets/js/3.49411e37.js",
    "revision": "be0b54a33bb87e23e0d61430ca8c8c63"
  },
  {
    "url": "assets/js/30.7cffb0d6.js",
    "revision": "5382cf05e2209d424ab68e05528dfa5e"
  },
  {
    "url": "assets/js/31.85534479.js",
    "revision": "bc97677c6dd938040c163cd101ea71eb"
  },
  {
    "url": "assets/js/32.8c5e3f60.js",
    "revision": "8f1edcbfa6c77a85e7aa9c7d928388f1"
  },
  {
    "url": "assets/js/33.5727c430.js",
    "revision": "3b1b0172bb62a7da88beff72c5609fb8"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.4ed36356.js",
    "revision": "f03f4f25687f038a42c5ee02110ece06"
  },
  {
    "url": "assets/js/6.192563a5.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.c1b3ce37.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.c59e7ff3.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.2e2d9f33.js",
    "revision": "a264c083d3b290eddc2ef664f9cc3c2f"
  },
  {
    "url": "assets/js/app.d76445c5.js",
    "revision": "fe02f8ee3bf5ec456753aa1f63fc9b0d"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "a019920d065a581e406d6603bc5f803d"
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
    "url": "res.2022/02/haoge.jpeg",
    "revision": "3d8e45b3514c68abcc32a6cc5b8e9167"
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
    "revision": "a4b18808b54adaebfcdad8e94e2e585c"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "5f1494475deda3965243cca85a13022f"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "fdec4ea862019e7ab9f1e3518a5824ff"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "ce1dc637d7f35164f0f63921e5d5fba7"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "e3be92370ed77a12893bd873ad31ac17"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "12c0e5d30d72dc8254903189c6d41239"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "074a1859f002770783b592d9ec76f14f"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "8d57561250744303054dbf3075cd419f"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "9b554854366797aaec11575be104f5cc"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "0b94fc5904bd2da95155a725aac4959d"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "f9a5d6b995c7a69fd3e724a40c84106b"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "e589098cd75afe99089c3ff874229261"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "39ff76dadff8e1cf3372b38eb0d300df"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "f970a9a7884c290b95cccbcfdfdeceee"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "c28b6f6b359c97b538af86eb4de11128"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "8494b8c53c5a3f1137881e95069c284f"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "1798bddb0bd5ded3e3664e410095be35"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "5dfea6097aa22e099babf57432976ea3"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "8b3beefb1a80051605e25dbd1fac26a4"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "f52891b172c326384afb552e745fc3b8"
  },
  {
    "url": "zh/food/index.html",
    "revision": "884fa3fd64cbec2301182259c6e354a2"
  },
  {
    "url": "zh/okr.html",
    "revision": "f4b8657e8b0b6fad6dfd19598f228691"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "2b04d8ad9ca22dbf756f08e454ffef60"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a38b752695b709006d991fb29b22787d"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "c7aa2ca1e8131bf28d06de88cea17fb0"
  },
  {
    "url": "zh/read-list.html",
    "revision": "bdb03c738d8fc448da51441d35c1a2ac"
  },
  {
    "url": "zh/task-list.html",
    "revision": "e72ed107320383ddbaf385cdc053b0ea"
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
