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
    "revision": "5c0a111c398711f3c98c0a25be44b815"
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
    "url": "assets/js/12.727d5c95.js",
    "revision": "3411034a4a6afcf3018947c3b8a53a28"
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
    "url": "assets/js/15.14065108.js",
    "revision": "0655b8f76739018207d3f2f6babb4276"
  },
  {
    "url": "assets/js/16.85c84d08.js",
    "revision": "e656e00cb94b5384dd989a1439eb39f3"
  },
  {
    "url": "assets/js/17.87da9597.js",
    "revision": "91f8f1ae7cb9864e41fcfc45de08f2dc"
  },
  {
    "url": "assets/js/18.fa2bad86.js",
    "revision": "b4337936b5619625003862ea187cb212"
  },
  {
    "url": "assets/js/19.1f96b062.js",
    "revision": "aed943d320b7aaf2f89ca608c33622f9"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.66d40738.js",
    "revision": "3be0c7bce31d753878f8c7c4ead939c9"
  },
  {
    "url": "assets/js/21.afaebaa8.js",
    "revision": "ec7ad3aa6798ee1af1ba02a10748a236"
  },
  {
    "url": "assets/js/22.0376aa90.js",
    "revision": "ddabed1c4e1d0981ddd662152803c398"
  },
  {
    "url": "assets/js/23.2bca3a61.js",
    "revision": "b46f9a29abc38d0273c719e8821353f2"
  },
  {
    "url": "assets/js/24.d4bf7ff6.js",
    "revision": "8d2b524ace0adc26622fbadfcf8193c0"
  },
  {
    "url": "assets/js/3.9945f049.js",
    "revision": "b50a4f6d22100981b3115b910aea00a3"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.fa560453.js",
    "revision": "3337eb77d02af689d82008afea3d4ad2"
  },
  {
    "url": "assets/js/6.192563a5.js",
    "revision": "45e35c7c5656490d72cc54230978fc19"
  },
  {
    "url": "assets/js/7.74936d13.js",
    "revision": "5ed0b707c03ecc74347d165b20b21159"
  },
  {
    "url": "assets/js/8.454a72db.js",
    "revision": "706ef9e37a5594d1fe1c0713577e897f"
  },
  {
    "url": "assets/js/9.6295de05.js",
    "revision": "3bf8d7349a7e0037929f5d8757217cc1"
  },
  {
    "url": "assets/js/app.d4eba125.js",
    "revision": "53598d181b3bb4fe76f4eb0e5cbeba2e"
  },
  {
    "url": "index.html",
    "revision": "5e9af1811710b52110651523fc56792e"
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
    "url": "res/mango.png",
    "revision": "aa27f8181c9bd52ccad37aafec4dfd89"
  },
  {
    "url": "res/wmdjz.jpg",
    "revision": "e479b3b03228230d9adcf538e1b839fb"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "401a2e554c3bb8e0c04a846a5d6a2d5d"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "80f7381633cb910e714de27b1a2c1a20"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "0f5aed972c0aa9214c6abf47c4b22e99"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "f57266693cfc4e63c05c89f9a653be11"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "30e6002acc2d5991364a9a132eec3fc1"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "3c252e7478bac33070db0c46b6b0c809"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "38eec5e96c59484a5179e253981f300a"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "9078c012c97725fb318adb2d5fadc60b"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "ceb2b51bff7d6465eb6db61cffd44483"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "6fdf2d2fdbbe2f2123818271445ae70d"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "e0d28486bb1b2a613576a721f03dac32"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "37127dd5956b9a9b2f9ae8bd317de746"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "25e50ed76ddad04d3b816c23635eeb9f"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "e06ed07be8b4d5fb62394bf994266ac1"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "6577595f2e002270a6ed8a861b667705"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "63f6f95043dda841c78c648cd42b829b"
  },
  {
    "url": "zh/read-list.html",
    "revision": "7afd8742a96d172f4b2448f16050ff18"
  },
  {
    "url": "zh/task-list.html",
    "revision": "2cecb3c7b39575d3113a0d7e01b7d019"
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
