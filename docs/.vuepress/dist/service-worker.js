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
    "revision": "4ef8be92663456eb851dd5c136003185"
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
    "url": "assets/js/10.31f2b020.js",
    "revision": "a3f31c84d4983f14a2aa7fb26b841bf6"
  },
  {
    "url": "assets/js/11.065f8db9.js",
    "revision": "697f3029f88c91aa35366d8bd05524db"
  },
  {
    "url": "assets/js/12.52cc3fc7.js",
    "revision": "b943aac2ddef9ba080798a119423dadd"
  },
  {
    "url": "assets/js/13.f0f93d5e.js",
    "revision": "a67bd933a6d06f73a7579732d3c9ced5"
  },
  {
    "url": "assets/js/14.2ca74078.js",
    "revision": "e93447a182871704d50c863a2e282573"
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
    "url": "assets/js/17.671cbba3.js",
    "revision": "0130df8244b4b4910821401ebd2a6b18"
  },
  {
    "url": "assets/js/18.7641c7ad.js",
    "revision": "69a38f67203126a8e8c7064b6b6d3e72"
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
    "url": "assets/js/20.fec602c9.js",
    "revision": "5ea7c2d44fe3c9f40002a8377ce14742"
  },
  {
    "url": "assets/js/21.a924b314.js",
    "revision": "a28a0be27781411908b5f834c777c020"
  },
  {
    "url": "assets/js/22.57ef5f3d.js",
    "revision": "eb47639194c8005e1111bb3b45790d1e"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
  },
  {
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.96ae0d7e.js",
    "revision": "11da380c9047918f6757bcb046f876b0"
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
    "url": "assets/js/28.45cba0e3.js",
    "revision": "7d916591ac91c208536c85c6f0822474"
  },
  {
    "url": "assets/js/29.0342d678.js",
    "revision": "50fe38ad55f29a4fc1084396636b2eed"
  },
  {
    "url": "assets/js/3.0471bc83.js",
    "revision": "27369b997179a7e4664a27b2bdc5b7bf"
  },
  {
    "url": "assets/js/30.8db2a195.js",
    "revision": "63710f242269e663ed2167040bac3660"
  },
  {
    "url": "assets/js/31.35fdcc42.js",
    "revision": "71cfe7d149665f0807e9194622d394d4"
  },
  {
    "url": "assets/js/32.d66ecd04.js",
    "revision": "0ab86c23dcc56bb5623d2751fa0294d6"
  },
  {
    "url": "assets/js/33.c3ad2549.js",
    "revision": "cfce1865638ea2e8ff57ba205e5b6b88"
  },
  {
    "url": "assets/js/34.6e574d56.js",
    "revision": "117895b924242d9528c43cb1abf40fb8"
  },
  {
    "url": "assets/js/35.7f9f7fb3.js",
    "revision": "99d29f261841f6557ed29ae925bcf28e"
  },
  {
    "url": "assets/js/36.7b8730e5.js",
    "revision": "1b33a6137036fbb1a19cd98c7ecf0839"
  },
  {
    "url": "assets/js/37.3396480f.js",
    "revision": "7c7604f0ae373950738b0194c8537a35"
  },
  {
    "url": "assets/js/38.53785421.js",
    "revision": "588cea8cd3c1a7e310383bc84b8a803f"
  },
  {
    "url": "assets/js/39.41f20a25.js",
    "revision": "18178e195d4080d92e50c1a2b7a51cbb"
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
    "url": "assets/js/5.2fdca655.js",
    "revision": "b16f04a7ffbf16ea8331e0791cd04fa8"
  },
  {
    "url": "assets/js/6.64adfb47.js",
    "revision": "2429eda5ba8704fecec76bc301e761ec"
  },
  {
    "url": "assets/js/7.43b2851e.js",
    "revision": "a096b48bced6883930b3fe6c4655cb7d"
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
    "url": "assets/js/app.e9061798.js",
    "revision": "2d6585f59fd4ccf64274ce1b41cf626c"
  },
  {
    "url": "index.html",
    "revision": "b46033e367735b0fae48d2446b9871e6"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "d91b630100dace963dccda9e075c01f2"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "a7879f70ccb2966e122ff3b704a8d6de"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "6002cea96dcd8654c50c40f9415a5622"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "2bf1abf5d507ce77989344a8f793e9f4"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "299a06ba684919fd9e4010f1176feba5"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "7daacfbb135a072dc8bfe35ae8b98083"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "8cd43924b6633b6979f1ad3cc8974970"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "dfa8529151621ce7af1f869582b45d82"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "91d27dfae8a44c1feb1bf3f01f85a898"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "302168de2f8fa8a71f71fa8647207bce"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "3ab94142c45e5d1fbd17cb45f40bbf65"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "f21269520e82164787c31b1d53495d14"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "6e4ef9d7df5e9e02d31b315cb5c2b5a7"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "d6405bb5315183f8856f81c2985e1349"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "a5efc051a7c51fe1b5fc6bd556c66f8d"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "696a3797b427b0f57690bbcb601cfd61"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "ecac3eece865b9277158f56638c9bb08"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "befc23f4e8a9ad6dab93278f9a4e0ec8"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "5cd0da23c0b9c3286d8e9566b482adb4"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "db84bbe0a2efb88a815b4e759c11c2d6"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "b88d38e83b53e362603ebc8f1bb250b9"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "c7e8d3341cdcb1e1f22d8d2bf25d532b"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "711bd57133f60a3f01a79f191a2dd011"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "ec5e74397ebee81ff60f15d8ec5dcfd6"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "0a6562c2c924802e499083f86343156b"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "b3c94803b6eb92331a7e326abece6e16"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "bdaf250114e073aa9e39faf34e2f83fc"
  },
  {
    "url": "zh/food/index.html",
    "revision": "f7cc2fb566bfe001539032957f8eeb69"
  },
  {
    "url": "zh/okr.html",
    "revision": "3a4dad70c756d4e742d4177330976034"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "2fd5782843f3bb5ec149487321bf455e"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "3a8452a42a8c3057bf83a580c2653228"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "4538803821b4c2b00e553951abf62b1a"
  },
  {
    "url": "zh/read-list.html",
    "revision": "3381631c96d5edabe5a0b874585b97d9"
  },
  {
    "url": "zh/task-list.html",
    "revision": "1a96b2947ab26a7f85d387ba5e8ce91e"
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
