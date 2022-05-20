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
    "revision": "7371e3c6a713fb760b4729813d24e48f"
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
    "url": "assets/js/10.434b2f1a.js",
    "revision": "48b29c0811149b70712377d90000ae85"
  },
  {
    "url": "assets/js/11.af5e4fba.js",
    "revision": "ee29d6d5a5e675f192d39569e8f37cfe"
  },
  {
    "url": "assets/js/12.52cc3fc7.js",
    "revision": "b943aac2ddef9ba080798a119423dadd"
  },
  {
    "url": "assets/js/13.1247fb8e.js",
    "revision": "7f3bff42ec4d47a54d8a9e261677d9df"
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
    "url": "assets/js/16.7979949d.js",
    "revision": "a85e3817e4b04f1c852757440c09b52f"
  },
  {
    "url": "assets/js/17.42f51d15.js",
    "revision": "df86f38ab76fd5b5963b01f5b39bcb0c"
  },
  {
    "url": "assets/js/18.8a2b7a7c.js",
    "revision": "aaef11a4b325c2f08ede1b492292225d"
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
    "url": "assets/js/20.fec602c9.js",
    "revision": "5ea7c2d44fe3c9f40002a8377ce14742"
  },
  {
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.dad3274a.js",
    "revision": "b7d6f647e65ef1b2ce9e4d9c1b7cba78"
  },
  {
    "url": "assets/js/23.49684edb.js",
    "revision": "17ffc54fef2393b2cb6e11e8633c2e33"
  },
  {
    "url": "assets/js/24.0468f13d.js",
    "revision": "503722105c20a8213d6ec79117dd2d42"
  },
  {
    "url": "assets/js/25.b699f3bb.js",
    "revision": "e241661b585f42bf3eb1c9df09cdea30"
  },
  {
    "url": "assets/js/26.4cf92290.js",
    "revision": "427e4f6f8f05f26b4149eafaa5604c3e"
  },
  {
    "url": "assets/js/27.8df9241d.js",
    "revision": "a96b757c2215cccee817e53f969aa866"
  },
  {
    "url": "assets/js/28.e06c8085.js",
    "revision": "32264968b56766a31a58b035206fb2af"
  },
  {
    "url": "assets/js/29.13a52c11.js",
    "revision": "5db61bf94528c23ae9b6ffc69f82e35f"
  },
  {
    "url": "assets/js/3.e896a0a5.js",
    "revision": "6716d50cf2c26dc65bf6826d32249acc"
  },
  {
    "url": "assets/js/30.e27c98ac.js",
    "revision": "2c05688c761224b80cf07636fc5a04ba"
  },
  {
    "url": "assets/js/31.296eae4a.js",
    "revision": "b9df0aabc9a3071ff9a8c7b5497e241b"
  },
  {
    "url": "assets/js/32.7e8faafe.js",
    "revision": "716bec247f8bb84986ea08dc0580951f"
  },
  {
    "url": "assets/js/33.7a452adc.js",
    "revision": "5745970355cd03d20961aa3b6b7d11d0"
  },
  {
    "url": "assets/js/34.bb722efc.js",
    "revision": "6501b140d7dc42fce485dd227c27e60a"
  },
  {
    "url": "assets/js/35.ab75f5ea.js",
    "revision": "8f40cffd3cb8f0074a77983c888c8ab2"
  },
  {
    "url": "assets/js/36.020bb8b6.js",
    "revision": "373d25b6b48a2c095259fb5ad61f230d"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.058fe531.js",
    "revision": "5c69e4f73bea0bd5849b0200b26fafd8"
  },
  {
    "url": "assets/js/6.ecc7927f.js",
    "revision": "fa731b1ec8838f06bb0fb7f3e22da9d9"
  },
  {
    "url": "assets/js/7.5b54bc24.js",
    "revision": "7f376e60d32df6fee8876ce94a12aa7f"
  },
  {
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.5cd923b3.js",
    "revision": "dd7a0093760f98b3f08ffedb0cd1fcfd"
  },
  {
    "url": "index.html",
    "revision": "9a8c8aeef2c76dea9cb1833d5a2d05d8"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "17725c9398b8de5473ae1cb4dae27456"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "e5a74e8b9e19c2b813d4dc38adb612aa"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "f7521d7da29cf4c8f4e4f059442266ff"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "97ebc56689fa1327d4f53950eedf8f1b"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "f5964cfcc8a4902ecc75cbd3e1f7cace"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "bb1a720101ffc01673ce6644ca7535e0"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "d2f014e7b62ce8b462310be097d4a559"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "d3463e294f96c90c5f7d797d1e38009b"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "4cd826620585e3a23177e1397898d72e"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "02d396a186e354e3bf88ced45ec6e557"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "7d0cef52cd2bf37c8e96a84d0c11eb96"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "a23c3243a79c8f2353aa4ce1a8df8e58"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "354cb982a150c7844e829753b468d362"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "259a2b105aaa5e180e923a90d545b843"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "132327358535b34feabf6b28b7b3f1f8"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "594b558aebac0bd1883912f5ac0a3b9f"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "28490fe1b4fb3fe329495877140c799a"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "b3d6328d789c24a4cdd98baa077d8811"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "3569aadba4b041223d8667f417638420"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "c4a26fbf7db9056bae7d5982bd0e1c70"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "b795530b60dc7f8efea539dddc199086"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "986bc05247ad47c71158dd0761687bc8"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "afdf6ea2f3a0e274c84f41b4f01acece"
  },
  {
    "url": "zh/food/index.html",
    "revision": "36768d354a4f9c07b3c7b23b9f6120b6"
  },
  {
    "url": "zh/okr.html",
    "revision": "68b3b6c5557e92055032c5f2f87e796d"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "f8fdd36db601a6fba19d8a731c54b754"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "5d878555e4ba88ea6b2b3fc3a361381a"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "f4f1edd5e1caffe153244e5426d4db84"
  },
  {
    "url": "zh/read-list.html",
    "revision": "99f097fa2e37e02108449ccadf34cc9f"
  },
  {
    "url": "zh/task-list.html",
    "revision": "835c8f36ba4a25cda15c9a9d08ceb593"
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
