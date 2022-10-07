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
    "revision": "07483a5a7b1b4dd6683ec86c295d2103"
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
    "url": "assets/js/10.8992c7f2.js",
    "revision": "de49429de50ad205a11d6a7b00103c0d"
  },
  {
    "url": "assets/js/11.d196c405.js",
    "revision": "86244f5ff6aa3329a546dcc2f7c0c64c"
  },
  {
    "url": "assets/js/12.6c3c4dba.js",
    "revision": "06fb38bc92ec1143db1a9978a204f150"
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
    "url": "assets/js/15.14065108.js",
    "revision": "0655b8f76739018207d3f2f6babb4276"
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
    "url": "assets/js/18.67b6947f.js",
    "revision": "810c815ccb5b4e3f000b15dae253d804"
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
    "url": "assets/js/20.35a334ce.js",
    "revision": "2142c9f13b1836f082a0ac1d09d6c1ed"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.57ef5f3d.js",
    "revision": "eb47639194c8005e1111bb3b45790d1e"
  },
  {
    "url": "assets/js/23.f9dc8e9b.js",
    "revision": "e4e6f45f533dfc7d19534645873f22bb"
  },
  {
    "url": "assets/js/24.0468f13d.js",
    "revision": "503722105c20a8213d6ec79117dd2d42"
  },
  {
    "url": "assets/js/25.2db68ebc.js",
    "revision": "1e04d537f131137be61d2f020752d301"
  },
  {
    "url": "assets/js/26.35f155bd.js",
    "revision": "c09859516133056b45172bed1127ca3d"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.8b8797e3.js",
    "revision": "d3b47c92905660084611e1185e743668"
  },
  {
    "url": "assets/js/29.0342d678.js",
    "revision": "50fe38ad55f29a4fc1084396636b2eed"
  },
  {
    "url": "assets/js/3.49b8778c.js",
    "revision": "5581f22d0624e86c7786f4088ad51325"
  },
  {
    "url": "assets/js/30.11cb9192.js",
    "revision": "1e6bd1135c2578d8ae7af12a9c4e29bf"
  },
  {
    "url": "assets/js/31.35fdcc42.js",
    "revision": "71cfe7d149665f0807e9194622d394d4"
  },
  {
    "url": "assets/js/32.216948d7.js",
    "revision": "0144d7fcd4014852ff1518eb841dd806"
  },
  {
    "url": "assets/js/33.f54296f3.js",
    "revision": "225c1dbfe05a20b2a946f6fbf9ced1ba"
  },
  {
    "url": "assets/js/34.47adefd8.js",
    "revision": "d454da86a1911d30bdfc98c5ef02b80d"
  },
  {
    "url": "assets/js/35.496f327a.js",
    "revision": "e785ac4a10a8be65b072bb61ae16effc"
  },
  {
    "url": "assets/js/36.fa4bff0f.js",
    "revision": "3e2f0bc9355d87d22267d96e17523b0d"
  },
  {
    "url": "assets/js/37.148b2fe6.js",
    "revision": "ef1c85d6718a4aa887e92162831ff4bf"
  },
  {
    "url": "assets/js/38.9d62409e.js",
    "revision": "3a20a482159eb31828d088d01d8391f0"
  },
  {
    "url": "assets/js/39.1509582f.js",
    "revision": "e92b241e9a5f888c740b25c274f180e9"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/40.d8b0b14b.js",
    "revision": "a07fb04ef8f2b097d764548b817ad261"
  },
  {
    "url": "assets/js/41.496e4bf4.js",
    "revision": "0383a18deb2fc19047194db1b576b63a"
  },
  {
    "url": "assets/js/5.5764b1e3.js",
    "revision": "2f637d9e7a7fee15259f97f3fd939261"
  },
  {
    "url": "assets/js/6.11efe41f.js",
    "revision": "8188ae4aba43c16bcb912627bc1bd31f"
  },
  {
    "url": "assets/js/7.43b2851e.js",
    "revision": "a096b48bced6883930b3fe6c4655cb7d"
  },
  {
    "url": "assets/js/8.1d76ff38.js",
    "revision": "ad74f623ed06571582965ca3fc64a29f"
  },
  {
    "url": "assets/js/9.684f7d03.js",
    "revision": "06dc5a2034222d0cd7be68d1532589b6"
  },
  {
    "url": "assets/js/app.8d79bdcf.js",
    "revision": "8ff082a5658753ac00ea6291fb8f7a00"
  },
  {
    "url": "index.html",
    "revision": "eea9c721cda5180ced7750a12310df15"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "ea1e02f7f51c3e36d265591c3fb55f0d"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "284d5e8fcf22bb55d2b07af86e8b46b5"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "a707c1839d1ca16143225dd5e40bca23"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "b044ebb782b6821502093d9248861c93"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "7bc136056a1a6cae6331466d0a403b47"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "c7b42c14e4734403f0bccb1cb99e0bbd"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "a53a9d3813f4a19dd10cc036fd64577d"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "d17c0876aa0b9bb916c79be5475566c2"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "b663480d7e836453b8f799f5da411a62"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "7b7ab00a7173736ecda7e9424af5f34b"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "99d42c0ec5c311e9551035bd4e05a529"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "dde921c16776a15cff35fd121667483c"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "3b78b651ec781d9b24fc08c92a062609"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "e95698174e0f655565a2b2e1201a5ceb"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "a1721c713d9b87af4869d41f24674b7b"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "e8638c3e7c3e337c199cb89953dce43e"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "d4bba8258eba43161e63b2e14b5f5cf4"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "4766bc05d22044faaf6b446126a88fc5"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "14e30403418852ade0ea86afa3cc199e"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "8165fb768c0643c54b1fa34787752469"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "def8d02a692a5be50793d10e6a5b4b9f"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "a5938234aa6fee8e915f3b6e36462af7"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "15cd1aa0956c529c3e9279b71d46cdf1"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "59a13e58d6345c37dd8be427cd6747e1"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "2434ab57695911746ce3ce2526e46f74"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "bb1750eec5e3a623cef010476a21ae2c"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "80d048bdec962dc4f366ae2f89d2684b"
  },
  {
    "url": "zh/2022/a10.html",
    "revision": "d8dcd295e0b36cdcb27804be51b28548"
  },
  {
    "url": "zh/food/index.html",
    "revision": "8a21206dd84626f416a8f6fa2bad1224"
  },
  {
    "url": "zh/okr.html",
    "revision": "73c82d3811947ef3352593e1020e8455"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "49fd2144cd6d3ec8e0091d3b3987c9fd"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "7c98ce13c02b38331136061fabe83f96"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "19c19996b86520e50e9bc87451959368"
  },
  {
    "url": "zh/read-list.html",
    "revision": "53e9a479374caf7a5d5a1e3bb17a679f"
  },
  {
    "url": "zh/task-list.html",
    "revision": "70dab5c378667d60f0509357ae5d72b6"
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
