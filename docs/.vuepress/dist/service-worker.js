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
    "revision": "7278e066a5cef3c181d6f8487cfd7802"
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
    "url": "assets/js/13.b48df0d9.js",
    "revision": "9cf2489cac823d1b204f463d5f679a36"
  },
  {
    "url": "assets/js/14.c22fbce4.js",
    "revision": "681f6a78463904681cf058d3bd0419c1"
  },
  {
    "url": "assets/js/15.83aeab70.js",
    "revision": "edace071a43a04658003c1503d6c5946"
  },
  {
    "url": "assets/js/16.c967a865.js",
    "revision": "87d4b62d87953d21e4c0d069c273f694"
  },
  {
    "url": "assets/js/17.c082681f.js",
    "revision": "3252a370c87ced5936b40d989bf30666"
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
    "url": "assets/js/20.23c5965e.js",
    "revision": "d102d4e26b11a85e551379c41128fc0a"
  },
  {
    "url": "assets/js/21.7a19762a.js",
    "revision": "493ecc9e71c27054daff9a86d3bf69f8"
  },
  {
    "url": "assets/js/22.c91c72a3.js",
    "revision": "f73e131be9aab9fcdcd8d5f9ea1e2037"
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
    "url": "assets/js/25.05232113.js",
    "revision": "bcd2285cc90d116fa5d29dd155613751"
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
    "url": "assets/js/28.93a7b2a4.js",
    "revision": "0a3e7187d0a11f0d11e6a184572a4ed5"
  },
  {
    "url": "assets/js/29.cc9e4558.js",
    "revision": "499a1e7d080fd6a1d92391792a49a91c"
  },
  {
    "url": "assets/js/3.2ab35900.js",
    "revision": "eef835c0889f73f0f26a639c122c711c"
  },
  {
    "url": "assets/js/30.6c99f453.js",
    "revision": "f8b770c31ad2f2108eab25bd24dd9fa0"
  },
  {
    "url": "assets/js/31.fe421729.js",
    "revision": "52641fb632190a345f4b4c0e26a2e612"
  },
  {
    "url": "assets/js/32.70fd5790.js",
    "revision": "bf723568749d6468b1088c6e03870435"
  },
  {
    "url": "assets/js/33.b40540b6.js",
    "revision": "7752a543041914ec35c43fcf4a14c003"
  },
  {
    "url": "assets/js/34.318bd831.js",
    "revision": "15c53287e2a13c2ca654b54bc70658c1"
  },
  {
    "url": "assets/js/35.0893adbd.js",
    "revision": "0591c9491fc232084730efe55dda1626"
  },
  {
    "url": "assets/js/36.0c5853e0.js",
    "revision": "378a260f135f6070bcdf7c31da1a0aeb"
  },
  {
    "url": "assets/js/37.665daaef.js",
    "revision": "d37ea363ed5598b9400791f383540f80"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.c6f24b98.js",
    "revision": "a51398b1feea4488fa845605c18f97d3"
  },
  {
    "url": "assets/js/6.7c4443ef.js",
    "revision": "5a5b97e10d312673cd4052b3b144f719"
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
    "url": "assets/js/9.dde5d6bd.js",
    "revision": "9881279abc4d39754ce3fb1821eb6886"
  },
  {
    "url": "assets/js/app.8ac030fd.js",
    "revision": "6b9f48c22dfa24d4689b001695983dfa"
  },
  {
    "url": "index.html",
    "revision": "cc90c5154379a57ebd6258792ca14e6a"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "zh/2020/punch-in.html",
    "revision": "ca7943609c060bc06de0e18c52ce7ad4"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "e08347900fb3ad2697f821d0b3fa142b"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "d2bebaa0c9014a96ad7a1dee74ea9f3e"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "eeba0b910940fdecbda8b2db7eadf0a3"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "6d575c2e286194111fd3f4628b73aed1"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "d5b4c948060f3d825eda40ee2f6f5194"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "ac56d4f61cfd7174666613e9ee371165"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "2f17886ee264dcfa61e0be9609d84b0d"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "f04179a3f4839efaed36a9eccd8d2535"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "231ccbdb6f6b0114907190481b132eee"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "2802b5baa3af92013866c8c1a2b7a72e"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "efac924ae2777d9c494600e7d7385d99"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "31c6bec128dd395cfd19832b5fd298a7"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "5904bea5c6e5f937f0c6198c4409b516"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "51f2b801608c5a5a55ed0fd0e18f2a1b"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "01fc501b17e58341ff69e2bb3369d6b7"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "644e7d50e330c3cfeb5bb25206911612"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "9203a45127aa402f35d1e6279c317098"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "20cce77046c37abbb390ebfaa7465f59"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "432acd761ea6f999e2ef808761676453"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "1eaf0209fbe92c6b700915effc3579b0"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "52ed5249a9899502229bf43e8dd040f8"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "f306d86db930b431921274f49be37743"
  },
  {
    "url": "zh/2022/a06.html",
    "revision": "657c7d6904d62ee6ec88174f0b6ba3d6"
  },
  {
    "url": "zh/food/index.html",
    "revision": "c42500bb9097c6939e0f21e4df9cc9f0"
  },
  {
    "url": "zh/okr.html",
    "revision": "1c42d9511a53db7eb87dc26e1470a129"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "8937f345acbb03db42505f2c2b0697f7"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "0fb843da0c6823ae050c0b9085953b81"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "42b34a3e453ea66fad339d6fbb2fdc73"
  },
  {
    "url": "zh/read-list.html",
    "revision": "6a8ebd0457b57c11198d9bf294ece366"
  },
  {
    "url": "zh/task-list.html",
    "revision": "84156afc9e09d211155c72d5bbe9b4c1"
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
