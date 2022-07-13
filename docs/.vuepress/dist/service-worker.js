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
    "revision": "74ff6b77d190c63e120d9f04d7273b05"
  },
  {
    "url": "ahead.jpg",
    "revision": "cdff059f63107aaaf311766c01259ca5"
  },
  {
    "url": "assets/css/0.styles.6a589786.css",
    "revision": "197ae22fee04c59fb7eebed565d28d4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d34f9a7.js",
    "revision": "402fc07a2e3421c38c4c95aa7a33195c"
  },
  {
    "url": "assets/js/11.b214362c.js",
    "revision": "31d4657b75428dbbaccb54cb5a30bff0"
  },
  {
    "url": "assets/js/12.7bd034f2.js",
    "revision": "3355394fed6418d54669795ea9de9b23"
  },
  {
    "url": "assets/js/13.2f423103.js",
    "revision": "fadeebd65c975b218a57fdfd9edb2808"
  },
  {
    "url": "assets/js/14.6035896b.js",
    "revision": "f3beb98ba7c4388c0bdea1438bcd8968"
  },
  {
    "url": "assets/js/15.18ac8560.js",
    "revision": "8b6033f4b600d45be8900be3e33f4ce1"
  },
  {
    "url": "assets/js/16.17fada4c.js",
    "revision": "92ae3f3610cfea8f72f4f4e1b54f2c22"
  },
  {
    "url": "assets/js/17.2446e29a.js",
    "revision": "21508913d32ea74b145e5cd119e14313"
  },
  {
    "url": "assets/js/18.7ffec341.js",
    "revision": "a3fb04acc84977f626169c987e5df0f9"
  },
  {
    "url": "assets/js/19.35e2f091.js",
    "revision": "ea29d4181db825efd50fc71b12b84b8b"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.28ec65aa.js",
    "revision": "60497875e0ef613b0b12abe862958b7d"
  },
  {
    "url": "assets/js/21.5d9a2729.js",
    "revision": "506cdd82c628ecd46049c3c789bd9957"
  },
  {
    "url": "assets/js/22.0deb24a4.js",
    "revision": "9f277b19e0dde19a99b3f067d1acfc71"
  },
  {
    "url": "assets/js/23.e3773f37.js",
    "revision": "bbd8878046f95e39a0b33f3af43e8322"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.13193953.js",
    "revision": "3806866206b25a830469f35c5cf591d9"
  },
  {
    "url": "assets/js/26.7cae231d.js",
    "revision": "dbafe39bac274beb724d1e4babf575c6"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.0578f31e.js",
    "revision": "d3affd396228824b9c27936f23f1e903"
  },
  {
    "url": "assets/js/29.9653e05c.js",
    "revision": "d6dc6840cfa31366ab335b445ebdbb3c"
  },
  {
    "url": "assets/js/3.43b4fbc3.js",
    "revision": "1cfe5fb39e35d36dbd57c86b04b1e236"
  },
  {
    "url": "assets/js/30.d40633e0.js",
    "revision": "e7dee4b0381d0bc3d6312a6111e8b9c5"
  },
  {
    "url": "assets/js/31.ec1b4139.js",
    "revision": "59dd67ca7771d3d4ba5335ca057a5c48"
  },
  {
    "url": "assets/js/32.7a8d304b.js",
    "revision": "b6f775bb1579c841ad4c79991a0523ad"
  },
  {
    "url": "assets/js/33.ad170d8f.js",
    "revision": "b00cf1f2b5b416f58eaf9fd6850e0320"
  },
  {
    "url": "assets/js/34.6379aca9.js",
    "revision": "c3ce1cc60cd5dbbdf70735751b697d46"
  },
  {
    "url": "assets/js/35.2416605e.js",
    "revision": "ee364126cba41c95563ed85b6d0676e0"
  },
  {
    "url": "assets/js/36.83de6193.js",
    "revision": "1d54e54fb4e338e00c8e2dfb398d52f7"
  },
  {
    "url": "assets/js/37.f3f49b0f.js",
    "revision": "1fd19347628d47376f754cad93a565be"
  },
  {
    "url": "assets/js/38.8651ebba.js",
    "revision": "1936e392aa1b3e03be0445ece9a08074"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.8cf7ed1c.js",
    "revision": "abde0c50eefeaaa08c8eda010d80f210"
  },
  {
    "url": "assets/js/6.d94d6380.js",
    "revision": "c4798911d73ed22da2cc93a4c1a8328c"
  },
  {
    "url": "assets/js/7.51986a71.js",
    "revision": "6bfe0cd57b27d0ac1c21bbc2de814479"
  },
  {
    "url": "assets/js/8.0fba68c3.js",
    "revision": "fc0e517f59d2edf6f9b5278cc95f73d3"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.74fa559d.js",
    "revision": "53f4ea6c0c2f8977212147b97ca87a74"
  },
  {
    "url": "index.html",
    "revision": "d2f50bc170d8a8f9baa1d46d889e2173"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "1fd2144c7c8b5a9780397ae7a82a807f"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "e1c871f8d75591d1ae84934a45adb530"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "a5afe9baceb3bcb55b917e4877da1e3d"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "34317cb96520e4841b542490182f541e"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "4c85d7a01001d7ca1a893f5ecadc34db"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "e24fe1ec64734d1c394e72381a1e349a"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "00287f29f4dd686e8743f6f640a5732f"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "b521010f15b37aba00578eda5d76cbe8"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "8bd378ecb86dda49d5e78969305ecba3"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "8fe1048a6a551124459106d24fd62562"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "4ec6e84b32514dd0afaf2d80253c18ba"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "1545a4205eb3bd8c525d45a62422b4bc"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "80a15f63372affe50442771974f552be"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "ef9227a8a5637ed3a3aeee74c07a6ee2"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "ddbbc72b36178812be18d230e829b392"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "dec85ae4e70d5891f1fb74eecce865c4"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "8c2c710a9ad8e38abc4e766d024c0de4"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "044a60bbf92e02516f4f98e84bd15385"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "948d19973da783a96d561714a1358f56"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "f4da62c720be0ca55b03ec992892e13f"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "9f8ade84678b46d685ff51bc07adc0a3"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "5ed6d7d6dfe89e5de5ab629f4965d7d1"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "e59c174131e68b621a245c5da1ddde05"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "afd9192a8c12428c1791cbe869e9d45f"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "9723e1d4316a0b2bd09f218043c77ee6"
  },
  {
    "url": "zh/food/index.html",
    "revision": "871ea80a115eddb254a9befa550aaa44"
  },
  {
    "url": "zh/okr.html",
    "revision": "96c2365bcacaf1bd8a005ad9564d67ab"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "368d6187d6644766bb86203514d6d2f5"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a2ad8be5f44251798fe8cfe19e7957ce"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "79a345c1c02b651816aaf424b5842ce6"
  },
  {
    "url": "zh/read-list.html",
    "revision": "6788866fb4dd2dbb6bfded356f273727"
  },
  {
    "url": "zh/task-list.html",
    "revision": "37ebb4472f32c5efcff10dc05535505b"
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
