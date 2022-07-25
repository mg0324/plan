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
    "revision": "d8b88a893355897e5a3f83824b2bbb0b"
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
    "url": "assets/js/11.a08005b0.js",
    "revision": "6f93644375469a330b9c09c74f564ef8"
  },
  {
    "url": "assets/js/12.6c3c4dba.js",
    "revision": "06fb38bc92ec1143db1a9978a204f150"
  },
  {
    "url": "assets/js/13.79d1fbee.js",
    "revision": "4e416e589ead5a29d65552a399049b2e"
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
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.222313c9.js",
    "revision": "1f2569dd70fb467979246c25cfb91a31"
  },
  {
    "url": "assets/js/19.56063d2e.js",
    "revision": "2e7b06df7ebed3089c58257da2e81cfa"
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
    "url": "assets/js/21.ce401302.js",
    "revision": "1a840705c01dd4794234d3608105ce11"
  },
  {
    "url": "assets/js/22.9f9aff64.js",
    "revision": "0bd85307b26ad5f48b2aca7cda3f71dc"
  },
  {
    "url": "assets/js/23.1f8e50b7.js",
    "revision": "e71ca3d822cdab7ff65eb4fd8f2758a3"
  },
  {
    "url": "assets/js/24.026d37d0.js",
    "revision": "f5c6edf54208703fd35fc078d253ff4d"
  },
  {
    "url": "assets/js/25.d82e4efc.js",
    "revision": "37ec4a67669fabafb112f2e8f710fa4d"
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
    "url": "assets/js/29.8a444b65.js",
    "revision": "12cf52206728fcae2a6752be49dcb5e2"
  },
  {
    "url": "assets/js/3.ba9b2627.js",
    "revision": "3b0cb087d25cfb57f7d553add3f18f3f"
  },
  {
    "url": "assets/js/30.11cb9192.js",
    "revision": "1e6bd1135c2578d8ae7af12a9c4e29bf"
  },
  {
    "url": "assets/js/31.76b96ab7.js",
    "revision": "7a6a2f79d1c0faa0c0e01d8666bd3f2c"
  },
  {
    "url": "assets/js/32.e35ce6d9.js",
    "revision": "4973e1137bfb1941ac005ccfc07198c3"
  },
  {
    "url": "assets/js/33.1144bc10.js",
    "revision": "3850d0baa68b7996b4d0f3f59d288b1a"
  },
  {
    "url": "assets/js/34.459d4e9b.js",
    "revision": "03a4654cb62859dee5aaa35a9dc67fd0"
  },
  {
    "url": "assets/js/35.56466531.js",
    "revision": "f260b0dda07969953fc1425b76a9d673"
  },
  {
    "url": "assets/js/36.216b9e65.js",
    "revision": "4fbb16b0db3888e83da8dd61b9aa7e8f"
  },
  {
    "url": "assets/js/37.44ffd768.js",
    "revision": "ce718aa9114d14be67bbc81497cc072e"
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
    "url": "assets/js/5.2627cde0.js",
    "revision": "ef01b062da814bb74d71025f2505a8bc"
  },
  {
    "url": "assets/js/6.ecc7927f.js",
    "revision": "fa731b1ec8838f06bb0fb7f3e22da9d9"
  },
  {
    "url": "assets/js/7.db1dce62.js",
    "revision": "c7fb1dd0e90ca65b6c9738e123142f09"
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
    "url": "assets/js/app.42c7190f.js",
    "revision": "f948450ace01fec19c50aea31a8913d8"
  },
  {
    "url": "index.html",
    "revision": "dd26e9b4aee693bfccbd182a2ba39cb0"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "43096ab274f63b5a3b7814df303b7c58"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "729606f6f33cde8b73e3a4669b7e440d"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "a17d8b721582cd592f61e2d58a953d6a"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "ed60f440c0825cd4aa90111df60347a9"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "01bceafbe96cea94da04e6308596c2ae"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "475176c1fe7ba514d61eaacc7a844225"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "814d0139a852405aedda6edc7b4ea580"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "32b187ce94229f3e513a11ea1cbad634"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "4e1da3c81a1dbf0d277323f10124745c"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "5be26e6a2e3dda555ab1b95362b4f897"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "a6cf77ff635f204f0aeefbe5689e3b69"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "7ffee98fe049c6a78cf646663fdda880"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "481d6e9830dd7d34161964b0ae7c07ea"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "0f9e2382e7ac008fbd300d975418c171"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "c9e1321053bd539e62e96faf52f6dd2d"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "6e4d1d8c0329e5b54b2539face523548"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "8c316d747afb92752f6d258d65bdcb76"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "c2e88e891e4174685f0f127602f3d4c1"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "a1b7e312efe592cb92f822d2899a8bfc"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "29d163de0d06b6eca1854d160e160053"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "50cf63e8f1633d7adc7b6365e06ffa76"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "73fed18b6950286a9fd7dbfe51af4891"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "e16823791593dd733b1908b820963ae5"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "89c0a983b5621cb64d358979d0957b0d"
  },
  {
    "url": "zh/2022/a07.html",
    "revision": "bbfc317f1202558163edd01c2ab2a59e"
  },
  {
    "url": "zh/food/index.html",
    "revision": "b609e67b12c89867463589b7664423a7"
  },
  {
    "url": "zh/okr.html",
    "revision": "499ddc32b8dd70f6db9662d11542ea18"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "e35c924e9d17b850cdf9b24fabe5f7be"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "b6cfb67301b5f5779a15f8f1da03403a"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "5cf8592cbbb254af8a740e0c8decac5c"
  },
  {
    "url": "zh/read-list.html",
    "revision": "2dae291bc546e820644b6072c52b3797"
  },
  {
    "url": "zh/task-list.html",
    "revision": "408729815d78183f4086f16407421f9f"
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
