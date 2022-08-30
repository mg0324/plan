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
    "revision": "28b40fe906cae988d3c8d449cad03076"
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
    "url": "assets/js/12.d513f14c.js",
    "revision": "6df876e2fd1535ccfab0d3420468f88f"
  },
  {
    "url": "assets/js/13.600f2bf4.js",
    "revision": "036cf79574e2f783d15e185d875a62d7"
  },
  {
    "url": "assets/js/14.6035896b.js",
    "revision": "f3beb98ba7c4388c0bdea1438bcd8968"
  },
  {
    "url": "assets/js/15.453ee304.js",
    "revision": "d06b9d9b9ea90940257c36cb69b6509a"
  },
  {
    "url": "assets/js/16.2e14d7a1.js",
    "revision": "8c3abd76f651910efeaa5e1ef90d713b"
  },
  {
    "url": "assets/js/17.f008ca2a.js",
    "revision": "64a3ba0db749c44a3768af646b13113c"
  },
  {
    "url": "assets/js/18.e696b165.js",
    "revision": "f65908688cc9740f0dd1c4e916aec743"
  },
  {
    "url": "assets/js/19.f12caa8e.js",
    "revision": "b94c47d58a8c9da892cb7a59083d0016"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.4893b336.js",
    "revision": "be7479a4985e7832f6c9f0a3da127c3b"
  },
  {
    "url": "assets/js/21.5d9a2729.js",
    "revision": "506cdd82c628ecd46049c3c789bd9957"
  },
  {
    "url": "assets/js/22.613db99e.js",
    "revision": "db48f419c723df9303aa092f5ccc3aea"
  },
  {
    "url": "assets/js/23.29ffc596.js",
    "revision": "d1645f7d14175b36f36657994c89fd2f"
  },
  {
    "url": "assets/js/24.c58c93bf.js",
    "revision": "51d3a8764201c8c34a4333c1fd9bcbe3"
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
    "url": "assets/js/28.02d527c7.js",
    "revision": "de2987a3cbe9da2fa1257c476bebc328"
  },
  {
    "url": "assets/js/29.b4ce3bd8.js",
    "revision": "ccdcb5c42b575632bc6aa426f8f4c02a"
  },
  {
    "url": "assets/js/3.43b4fbc3.js",
    "revision": "1cfe5fb39e35d36dbd57c86b04b1e236"
  },
  {
    "url": "assets/js/30.38e14740.js",
    "revision": "f164707cb50c3c43560309545c82086a"
  },
  {
    "url": "assets/js/31.cf64940c.js",
    "revision": "cdc41bc3182fa762b3feb0de8ee00b02"
  },
  {
    "url": "assets/js/32.1b0b8e2a.js",
    "revision": "fd3fa55a2718dcdce05dc5bafb119305"
  },
  {
    "url": "assets/js/33.f2bdafea.js",
    "revision": "6935ea95ae30b53b2065632f5f60afa5"
  },
  {
    "url": "assets/js/34.e7e80cc5.js",
    "revision": "19690cb5c2579c87c675edeb9c1d81de"
  },
  {
    "url": "assets/js/35.3fc5f1c8.js",
    "revision": "f9699b09ba750f9a1817cf682458a5ff"
  },
  {
    "url": "assets/js/36.d685fad2.js",
    "revision": "f2f52474a27f429d73f154ad3640b1a2"
  },
  {
    "url": "assets/js/37.b703ff89.js",
    "revision": "7f5fce2bbaf2d84dc1913efb7e0213e5"
  },
  {
    "url": "assets/js/38.a5697ba9.js",
    "revision": "9e9b75f84f2cd06cbe195556de322b10"
  },
  {
    "url": "assets/js/39.8ad23802.js",
    "revision": "a85c005f9bd6f909b48a3ced4be854b3"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.31ab789f.js",
    "revision": "3cc4d13a1c901e1a7fc98668ce88ef6f"
  },
  {
    "url": "assets/js/6.d94d6380.js",
    "revision": "c4798911d73ed22da2cc93a4c1a8328c"
  },
  {
    "url": "assets/js/7.5539c011.js",
    "revision": "a14f0b3e15b0229bfc41d7d741f31f73"
  },
  {
    "url": "assets/js/8.b8ffd72e.js",
    "revision": "5d2600b2060d7b320ba5672e0b3ff52c"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.86d647a9.js",
    "revision": "c4bb2a1fc1189def94ea9d5829a70082"
  },
  {
    "url": "index.html",
    "revision": "d6aa6b088089ba75b89ed01dd2e06b39"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "60f113d3a76e00aa8127f294fa514cb3"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "0e71ebfd89b630191f705168cf1676e0"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "7e7278f5b36c9990f115796d61e29728"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "0d901d481553f6726838c19b455c3ed9"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "e45ef3b429d096e625561b8a3ca7cb67"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "96fde89fa528fb04ef6fb0a58e4e9d76"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "5b77f5e564ab09a029c3e631763c2d8f"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "2e73b4b7ff5b107c63053f58814ec3ba"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "8e963c7398b3d9341cd78515708723d5"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "8fa2caa05589a0733ad763024aa83aa3"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "f292702d4d0a969326b1bbd53057e6ac"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "631041dcae330cef88b69716e8d28d44"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "458cc82e1b8db619ba503f0f356f3f40"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "9b4a36a2cf89b502eb42573f6c907bce"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "e9026d1f622b7d931bff4a887cb064be"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "855638e952c2d972a1063ff5feeada76"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "0197268f527604760eb2caaa312f41c7"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "6d40b03c0a3fe09e5c1853febe76d304"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "b508aa32d7479e08c07e8f616caa0b88"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "6bd97f58d28f9f86f1a71fdca47230cf"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "5c8de8ebeaa0e3abd2e2aec9f6774437"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "8e33a4f532e396ed8c295f5ae551a963"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "a7364041b555ddde3452bfb0c5daff9c"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "59ff1bf886c2d1f80d22c0895c22ae72"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "30a91215827bd540ade4199e222653f9"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "653c0b1d53a9c4f4e8ea312e806599cf"
  },
  {
    "url": "zh/food/index.html",
    "revision": "e3147bbc36191404a82af17879ca1558"
  },
  {
    "url": "zh/okr.html",
    "revision": "a8ee3008596c11dcffbc5a3d72baa4f8"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "df8e960fe77e935b24a30bbb0c179d4b"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "617ab6a937baf654075710aef7d3d72b"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "4360375169889ea7949398decd746e0b"
  },
  {
    "url": "zh/read-list.html",
    "revision": "24c4c5807d12ce8b11b06b684c2b7c76"
  },
  {
    "url": "zh/task-list.html",
    "revision": "10c8c18057eed4fb6f9b307d45655bd2"
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
