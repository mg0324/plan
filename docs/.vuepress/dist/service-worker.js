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
    "revision": "da4c9b405fb8d79cff1b8d005d8b8c72"
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
    "url": "assets/js/13.b48df0d9.js",
    "revision": "9cf2489cac823d1b204f463d5f679a36"
  },
  {
    "url": "assets/js/14.4d0ed21a.js",
    "revision": "807eb9abb8e16927cd5068b716bb0843"
  },
  {
    "url": "assets/js/15.04ab7050.js",
    "revision": "b8220ad1e2cd2f5d07bd22269ca47882"
  },
  {
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.671cbba3.js",
    "revision": "0130df8244b4b4910821401ebd2a6b18"
  },
  {
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
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
    "url": "assets/js/20.1e351ac1.js",
    "revision": "65b178710eff8b544cb5baefdb821d04"
  },
  {
    "url": "assets/js/21.c11cfeef.js",
    "revision": "fbc6ba3984861eb95e242163a1078feb"
  },
  {
    "url": "assets/js/22.df8f5206.js",
    "revision": "bab09d7b504bb8502941c700015f9b40"
  },
  {
    "url": "assets/js/23.342554ca.js",
    "revision": "64f46e212c04aff4d2f225cf3e4bf856"
  },
  {
    "url": "assets/js/24.7ca80c48.js",
    "revision": "085ed6e2b9ea5e76511f50702a5cd432"
  },
  {
    "url": "assets/js/25.12e129c9.js",
    "revision": "996cfbb0e11000af5e13d29d222e3e10"
  },
  {
    "url": "assets/js/3.3b75f22e.js",
    "revision": "d17c45b45cd2172f5d42156dbe3ee623"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.e35b89b9.js",
    "revision": "29175a9c7feb88dded59a2565d67ab31"
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
    "url": "assets/js/9.bdc34f92.js",
    "revision": "b4fa78b680b7008b2346d269ce35799d"
  },
  {
    "url": "assets/js/app.abd40356.js",
    "revision": "51d32b8c3955c1ec5644fb5e0b7fac5a"
  },
  {
    "url": "index.html",
    "revision": "48c8c5ef1b78d2f5050b178770bc878f"
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
    "revision": "5f71c68bde3b925fa218f0a8309e61e0"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "bfc8ac965e7c4cdf5a0c8c94cf732d41"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "1066c8305a35423b7726e053aa80230e"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "6203e21f07df044132a5ea59b63f0a33"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "a96eee1f834d7a159c14181433c4cf3d"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "9e7d4617d57d0b6a5648b26dee8e0749"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "33cd1419ae16021a66489be1dad5d179"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "72c605e4c15236f9e276309d8e19012a"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "8aa86153949dad615bb273d6ad9bae8e"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "26d65c909ca4cfc84571a701576b8c1a"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "f3d624a708969493a7c967dc1844aab3"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "606fc4f17112fd08a29301a127bacbc1"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "2cf4de49274f70f86860167f25d44153"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "293962dc0c9220ed62932b63a45ed721"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "0ac346599a8d5bcd9bbfeade61bdab41"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "3c039c0ae199439f7c0540e23a86e641"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "b2fae4aab8cdb5e8ebb34c12b1f70b19"
  },
  {
    "url": "zh/read-list.html",
    "revision": "217bf378bf9017f03e7220d6f924438b"
  },
  {
    "url": "zh/task-list.html",
    "revision": "efa04c560e9fb20b59c6407e66a39613"
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
