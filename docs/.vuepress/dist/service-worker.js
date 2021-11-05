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
    "revision": "10281e224e4b99cd59099b372570c80e"
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
    "url": "assets/js/11.f2795cfa.js",
    "revision": "850519b89ed40dee5bca44cc857f4a68"
  },
  {
    "url": "assets/js/12.9120afa5.js",
    "revision": "4a430da513b9010243e560918bb85aea"
  },
  {
    "url": "assets/js/13.f0f93d5e.js",
    "revision": "a67bd933a6d06f73a7579732d3c9ced5"
  },
  {
    "url": "assets/js/14.38a12dbf.js",
    "revision": "e87a5a2649ab9164e54c28d075c5256a"
  },
  {
    "url": "assets/js/15.04ab7050.js",
    "revision": "b8220ad1e2cd2f5d07bd22269ca47882"
  },
  {
    "url": "assets/js/16.85c84d08.js",
    "revision": "e656e00cb94b5384dd989a1439eb39f3"
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
    "url": "assets/js/21.6a8bc308.js",
    "revision": "ee6c7cd970eaca5cb9bd145413ad9f0d"
  },
  {
    "url": "assets/js/22.29ed2d52.js",
    "revision": "cefb851a36597998afe0cc5a2543ad22"
  },
  {
    "url": "assets/js/23.141c2d08.js",
    "revision": "1b4d3069ca81807370d70bfc768d8ab7"
  },
  {
    "url": "assets/js/24.9b8abee5.js",
    "revision": "3f753b860a4115112ce8990f6a7f7497"
  },
  {
    "url": "assets/js/25.fa303cc1.js",
    "revision": "d68a39e79aab295e21a9360c54223991"
  },
  {
    "url": "assets/js/26.96a718ac.js",
    "revision": "8168dd956517f53191d3bb78e9deeff5"
  },
  {
    "url": "assets/js/27.c0588095.js",
    "revision": "c923be46172bd5b42e62c93901fa2326"
  },
  {
    "url": "assets/js/3.9a8cd239.js",
    "revision": "6d1908dfa8226eb9647d2325a5eb81e0"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.c8774ebf.js",
    "revision": "df8f560b203c00b207e2188fb2bb2062"
  },
  {
    "url": "assets/js/6.7b2142a6.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.9213ad7b.js",
    "revision": "b42c7e5e66144519a0afc1d4cdd56f87"
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
    "url": "assets/js/app.08e78902.js",
    "revision": "eb158e3ce4cbe117f5b409fcb8bc7823"
  },
  {
    "url": "index.html",
    "revision": "57eaa482ca3b28f8c3dc8e1dac244d8c"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
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
    "revision": "323dff71442044791550ef0ee2919b2d"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "d02581dd4056fb728e6f92c5f3374560"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "4b7e892c2137db1aeb294b1393116fd3"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "69047f07a4625bb84916a51983e1a39b"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "e04da830978a4280219307922c3b4d06"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "bfd85487cb19f63dba58a95e49aa1f25"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "6244457fb55c9232f8833d563b8ce070"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "b51543e3e00d5d1b667408f7a5a6e341"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "72bb0711d10b51e9b01082e59599e025"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "a11d7cd7c217a94e44558d472d3a7cd2"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "40978e109a8b832d8f4677d661d00d3f"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "b895c3e16769e871d5c59c425d253e37"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "79e24309fcda44a8710884c462427897"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "f8acf7d3a32c115d27ee923df7b843a0"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "9d2ff34bc850188f8a20c0508050c03f"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "30c5f2bd2e858edd37c20516629b22cb"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "a7c3915287999ab9a5f04a868a37bf3d"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "b102359eab490258e46758ac46548d11"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a4e3b5ba8909ac626a41cd1fdf3d527e"
  },
  {
    "url": "zh/read-list.html",
    "revision": "48de5151f602e8eebda58078df953dae"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d60b143e41b864184be1bec086ab6451"
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
