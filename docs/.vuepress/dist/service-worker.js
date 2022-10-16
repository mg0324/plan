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
    "revision": "7bf074d23de6de0567b7c0abb13b734c"
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
    "url": "assets/js/19.419505e9.js",
    "revision": "06136a20eecc2a9c964accef7203d104"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.6a5a1f44.js",
    "revision": "8fbc65c6fac85109f9448fef03767ff6"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.74b100ac.js",
    "revision": "9972e57d63d677ae2b424ec0430992c3"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
  },
  {
    "url": "assets/js/24.0468f13d.js",
    "revision": "503722105c20a8213d6ec79117dd2d42"
  },
  {
    "url": "assets/js/25.d3e9a014.js",
    "revision": "d99e38a9d06cecf3e098a1b0067d4d47"
  },
  {
    "url": "assets/js/26.ee29810b.js",
    "revision": "1b89662ef11cf0204cc42ef7e7475ffe"
  },
  {
    "url": "assets/js/27.d022f073.js",
    "revision": "dcf6a97b7d748a794c46ef6783d9fa66"
  },
  {
    "url": "assets/js/28.c7675026.js",
    "revision": "e2e9d2cea17499def8268622672d5e99"
  },
  {
    "url": "assets/js/29.5d94daf1.js",
    "revision": "24f823b407fbbbae02a765077b56f23f"
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
    "url": "assets/js/31.d5db5bcb.js",
    "revision": "ae08c82cfa337ffd121c8687ea3601f6"
  },
  {
    "url": "assets/js/32.216948d7.js",
    "revision": "0144d7fcd4014852ff1518eb841dd806"
  },
  {
    "url": "assets/js/33.bd4283a7.js",
    "revision": "a6b2e109497c624ce4b5b64ec23d3ba5"
  },
  {
    "url": "assets/js/34.79b953e8.js",
    "revision": "7546c08f19e8f46815c66cf661244e6e"
  },
  {
    "url": "assets/js/35.3105886e.js",
    "revision": "da1a113103c831894a05e5540c2c4fb6"
  },
  {
    "url": "assets/js/36.d4918f7f.js",
    "revision": "dc407e45e6f485c9dd34e2d910cf37ee"
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
    "url": "assets/js/39.79702739.js",
    "revision": "eda5db379257268f1426e6ad872bcee2"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/40.f4b991c9.js",
    "revision": "afe4207b23b2556e574143c5d430b61e"
  },
  {
    "url": "assets/js/41.496e4bf4.js",
    "revision": "0383a18deb2fc19047194db1b576b63a"
  },
  {
    "url": "assets/js/5.653e4424.js",
    "revision": "7698935dd0051d55f98ef6389ad73b8e"
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
    "url": "assets/js/8.35ab108d.js",
    "revision": "05b3353a09e12d2533f10214122ddc87"
  },
  {
    "url": "assets/js/9.c9ae0805.js",
    "revision": "7d50e743cd696f68051cad902921e4ac"
  },
  {
    "url": "assets/js/app.4558f33b.js",
    "revision": "a481089d86e19825ae5d1bdfadfa3752"
  },
  {
    "url": "index.html",
    "revision": "c67cff791e5fed43369dca9981fc47da"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "c264e600054736316c99b4be4d738b41"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "63d6e26d8791666ff60a997e46c53d16"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "bfcc5cfe1ccd5a38549307ec58fe7d5b"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "470c93b85efcc375efd8be69ca210934"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "171daa7a6298ce27e424f84174a72587"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "297c20d5adddb96c391808870252bdb3"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "5b73f30f7c69e7d9c96cac6a303fa9d9"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "5c0ca9983a622dd9edffc1fc6d69ef7f"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "d07997fa42d7b6c5111a303d912cc8dc"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "8ab9c4420214026b6bb97973e8be62f3"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "5e5148779cf8cf19ead081ab72341fd4"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "bbb54b90a59b3a4f9724115f2abb3110"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "26fc2e0ea5ab53873881d843daa69df4"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "5bcabb9671cbde71246092522408c89a"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "11ab7f83f0580ec31a41ed6916ee7613"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "b9b40dd92e08439a80febd9d544d2d1d"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "d6ba4931716cef268db5c46be782f068"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "2aac461ff6902accde36070de21d86c8"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "6e904b2228c29eeead1ee7e355d8bb99"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "da2cc821e23e3792ce5028d507e05b1d"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "7ab03eb9a7c1a63c06135ab4bc9fa659"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "23f124993a5ccfdc8fabc4e2eaec756a"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "a926668755a72c28708bf3a86626d5cd"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "a1e2b1800a308c45f682d13a4c654dba"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "f2f241664b90b8d461c5df44b91e1430"
  },
  {
    "url": "zh/2022/a08.html",
    "revision": "e18c2c63e8a02a4a039422768a375794"
  },
  {
    "url": "zh/2022/a09.html",
    "revision": "145d5a99f22baac396ad51333f940b16"
  },
  {
    "url": "zh/2022/a10.html",
    "revision": "2dace192cce5e784019ca22aa8f15937"
  },
  {
    "url": "zh/food/index.html",
    "revision": "517abb1856f9a1b4e537f817514e449c"
  },
  {
    "url": "zh/okr.html",
    "revision": "c6dd4bf8a71fea6f90adcdea48bbacd9"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "ce9abe449d6776d31d11862917d96d8c"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "49653daa18520d88e1915fb11de9185d"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "025057dec85116204a4aed75792380cc"
  },
  {
    "url": "zh/read-list.html",
    "revision": "97dc5babc3081bb4b73d5fe1bb43dc57"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d083be81ecc9f6f6e6812009df2d4e2c"
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
