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
    "revision": "2c5c83c3412d6665902b402907a5ad86"
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
    "url": "assets/js/12.720bcfa1.js",
    "revision": "a91b541ad6ebc93e571ac2356dfec76c"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
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
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.793b0552.js",
    "revision": "6cc6f1d8ddce5bb0923a982bc11dc108"
  },
  {
    "url": "assets/js/18.ef746a9a.js",
    "revision": "e54fb5f98a977ed20a48332f92092374"
  },
  {
    "url": "assets/js/19.c6c0cb26.js",
    "revision": "caf7d6b96272eb6cf073b2d40671d8bc"
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
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.c91c72a3.js",
    "revision": "f73e131be9aab9fcdcd8d5f9ea1e2037"
  },
  {
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.5476b18f.js",
    "revision": "3b701ef88e76dc463baa36c6250cb069"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.46733b04.js",
    "revision": "3b963c869c2edd6af66c0c3fc4415a0b"
  },
  {
    "url": "assets/js/28.93a7b2a4.js",
    "revision": "0a3e7187d0a11f0d11e6a184572a4ed5"
  },
  {
    "url": "assets/js/29.44d50a7e.js",
    "revision": "a1c03c7fe14a86730fb49145daa57aba"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.f819b5a2.js",
    "revision": "01c0a08b8df9336adef16e8b72e874b4"
  },
  {
    "url": "assets/js/31.102934f2.js",
    "revision": "ca4ee4c2e5bcba747aabb5a51b123474"
  },
  {
    "url": "assets/js/32.6ad6ebac.js",
    "revision": "9ef0e8adeccd44288e410fc4a90624e3"
  },
  {
    "url": "assets/js/33.c3ad2549.js",
    "revision": "cfce1865638ea2e8ff57ba205e5b6b88"
  },
  {
    "url": "assets/js/34.d001832a.js",
    "revision": "02134dffa1db3ba7b21703ed6ab18ad6"
  },
  {
    "url": "assets/js/35.b96b394a.js",
    "revision": "b896e17b076a970d90a7712260079a5d"
  },
  {
    "url": "assets/js/36.27998551.js",
    "revision": "4e36284addfbd890df6095d3221b964c"
  },
  {
    "url": "assets/js/37.f599134f.js",
    "revision": "85a42b1f342b69ea001c5f3da126164b"
  },
  {
    "url": "assets/js/38.bcc6f708.js",
    "revision": "a7cb0668b5dcfcdac1c2d9039b02fb51"
  },
  {
    "url": "assets/js/39.91667a19.js",
    "revision": "a15841c7253f781f5c4bae28e1abd1c9"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/40.742dd319.js",
    "revision": "c9eb774d694a3d2dd2e7aec92bfe9722"
  },
  {
    "url": "assets/js/5.cb07be02.js",
    "revision": "5c9cd839447cdde0d7e0f1e651e73ce6"
  },
  {
    "url": "assets/js/6.64adfb47.js",
    "revision": "2429eda5ba8704fecec76bc301e761ec"
  },
  {
    "url": "assets/js/7.db1dce62.js",
    "revision": "c7fb1dd0e90ca65b6c9738e123142f09"
  },
  {
    "url": "assets/js/8.097eaf99.js",
    "revision": "104bcadb11d9f0b16a156191f433e209"
  },
  {
    "url": "assets/js/9.421d6a26.js",
    "revision": "6b88754560c332319fcd708732f09636"
  },
  {
    "url": "assets/js/app.33a78651.js",
    "revision": "d2c8d877df93f64b484df4b71434aa90"
  },
  {
    "url": "index.html",
    "revision": "34c79c422586c7620739f27550b4f938"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "dba92ecfd85805a15dbac7ae97924cf3"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "d1f0827d00f8d80180bdeeba4fc3ce40"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "008d34fb79e65a422fb07fef1c9338d0"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "28f07c766d974add6b45067506170729"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "59399b17560a30590f4a9caa372df36b"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "417b9a1c0d6d66c139192aa986b8ba8f"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "60b4cbfe83ab542d0092435fa0843a1d"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "816be61963578fd614d565562308dc50"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "497fd1d755095b168006b0c5b70b3698"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "62b5d06d350ee5b36123041a8f753e89"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "b76174836836b81ca083eaa3ed0b7fca"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "f0486a1d2322d3f1ea871b49b5e184e8"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "5012c8cc71c12f5c18f1e1950a1bad9b"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "e1882a298383607afa8cedfc96118ed7"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "77bf52e932db033128a15cd4fb2a2648"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "4fa3a5e1779e250a09da029fd2950e91"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "b22e4470582123782e79180002383834"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "7e580ef85a923d7c8ef35540aede75a3"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "1d0946953acf56d7a5dd1ca8c0da88b7"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "06707af650e30bcea985a5a54db3af55"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "5998939b225691386ae6f42fc059df67"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "288e81450b51b369afc8366840acb698"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "a9d458c4fc6f0a077ac48347f6d9fe86"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "031e8ec77c7497e20fcfac67b44f420a"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "089ceafe2b23dad97f7f2cdee82d02b9"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "e2086a8dc846a546761b666f8c917c91"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "539e6157c897e2907f74fbd59e00f27a"
  },
  {
    "url": "zh/food/index.html",
    "revision": "347bfffb4b92e028c4a827ef58484afd"
  },
  {
    "url": "zh/okr.html",
    "revision": "fc78730e9b6ac5663e8287ce90386e12"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "c99477676194a9bc2584ed99a31c7a71"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "8b4db362be45eb6541ac4ddafe9ebc75"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "0bac4b8003af199cd65a3dff790b9d0a"
  },
  {
    "url": "zh/read-list.html",
    "revision": "91a09a25542809c4894b7f4645a851fd"
  },
  {
    "url": "zh/task-list.html",
    "revision": "a892a4f9d2dd09d33108f67836b7276b"
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
