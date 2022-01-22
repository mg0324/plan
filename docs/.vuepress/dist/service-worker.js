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
    "revision": "eaf79a88d4e662eb297384f9a83fbaca"
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
    "url": "assets/js/11.d4629f2a.js",
    "revision": "83746c85108ab8be89ab098c2c549f8b"
  },
  {
    "url": "assets/js/12.08d038b8.js",
    "revision": "e277cd3d22e8ae6380e5928a734cb4a5"
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
    "url": "assets/js/15.7540cb15.js",
    "revision": "bb033b111e5cbc342b12bf7bd81dd5e9"
  },
  {
    "url": "assets/js/16.b6b0ca7d.js",
    "revision": "0d7b111d77b12b2c135966061ab84964"
  },
  {
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.7641c7ad.js",
    "revision": "69a38f67203126a8e8c7064b6b6d3e72"
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
    "url": "assets/js/22.f4c56f23.js",
    "revision": "0ba06dde2da4de6ccf5c4c161f43e684"
  },
  {
    "url": "assets/js/23.f6675628.js",
    "revision": "759b784c3944c63e1616a104a9da0d5f"
  },
  {
    "url": "assets/js/24.f79a46c3.js",
    "revision": "2c3709141689ef611147b30fcd21cc38"
  },
  {
    "url": "assets/js/25.34525888.js",
    "revision": "3c31fd0b9c955c85d77b2b7b992c593e"
  },
  {
    "url": "assets/js/26.9aba14f8.js",
    "revision": "d90072f4b685c239b903938bd6b5e75c"
  },
  {
    "url": "assets/js/27.3736fb78.js",
    "revision": "9e8b3d7ad9569828004c494d58d93408"
  },
  {
    "url": "assets/js/28.073f28a1.js",
    "revision": "99ccf2328dc51a388fa5fcc7e9b4db51"
  },
  {
    "url": "assets/js/29.80d12eb7.js",
    "revision": "60995b1ca16d0e7829b23583fc2e1dad"
  },
  {
    "url": "assets/js/3.8cd73dca.js",
    "revision": "51d27ddba08938c9c7a4c7255ae06bad"
  },
  {
    "url": "assets/js/30.369e82af.js",
    "revision": "623d8028d68950394ea4d07718beb8c5"
  },
  {
    "url": "assets/js/31.4d6215f8.js",
    "revision": "7c62ceb1feaf2e8ba6d0377918ce6910"
  },
  {
    "url": "assets/js/32.743666f5.js",
    "revision": "670654a4016f46cae4d32efc3d5e60f3"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.c36ac90e.js",
    "revision": "50046c36e7728d4c81f8edeb0fcd6dcb"
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
    "url": "assets/js/app.a2401abf.js",
    "revision": "b9bf13a4f210c82ee782e35c61a8780f"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "3b754323d7c6b502142e812be7fa3ee7"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
  },
  {
    "url": "okr/okr-1117.png",
    "revision": "a0713a157864d9282d8b834baa5b304c"
  },
  {
    "url": "okr/okr-1121.png",
    "revision": "b59d353dc6f51add7a7b1d37a1208b5c"
  },
  {
    "url": "okr/okr-1128.png",
    "revision": "19fa4931c32c6dda08af3c4650334de6"
  },
  {
    "url": "okr/okr-1211.png",
    "revision": "e89720e3469769535faeda8e5316ba18"
  },
  {
    "url": "okr/okr-2022-01.png",
    "revision": "7098486a4209ef17a5e2141d2db0ff47"
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
    "url": "res.2021/11/k3s-rancher.png",
    "revision": "56dd2cccb03d4412acec48499de01792"
  },
  {
    "url": "res.2021/11/k8s-dashboard.png",
    "revision": "b6984999f87d23966313f3a72f4c39fc"
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
    "url": "res/main/homeplan.jpg",
    "revision": "324f5f1b07afe528d76cf4baa9f5c662"
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
    "revision": "13e01e8cf1cf4feb03a3243ba914c5d2"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "4cf24ca37f88d69b7f5fea15282fab1b"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "364192b13bd2ebf13d078ff2c965af3e"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "ab51f7638c53759dc72975493f38fba6"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "e17dd0eb92ece5a53a82f28713d86b02"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "7817a3bbb105b6f0b73e7c5eeeca52ec"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "2eae2783b51201e50e4872cb1a9e7843"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "d9a77b7a493889757718e1cf72f9b431"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "e814b2135cec4c5d02c06171da662c40"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "a8c3ceaf503acefd1eaf4339dd0f18be"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "e8b439db1e7eac3d7c385ac93a8b14e7"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "020ac9ec45eb5455175a19bccb18b53a"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "cb8c3c3b253def7863055f2b227c43cb"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "b326ea26093fdbbb4f983708d303cc37"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "7620eae105626616283d9256303f2302"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "7b20e3d7a21fcaeca49b8f097e1e54cf"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "c05502eb74b59472c6e1ac98b3500a21"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "a1c0ea93f67c8752fd6dbb4c8c9c9e34"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "3c74efbea5c70d76ffa096ecd8b74897"
  },
  {
    "url": "zh/food/index.html",
    "revision": "87a4a14a346561889fc80fdc94cf3df6"
  },
  {
    "url": "zh/okr.html",
    "revision": "4d2ca706c6bb43b5d7f9e99191ae0679"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "18d1995297b0ac84272869e38f58faff"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "08b7436382e2e242e329392f4dbcce23"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "d32b75ed3df4bd1c8f4df1ebbac2b8fd"
  },
  {
    "url": "zh/read-list.html",
    "revision": "5024c499a72cff5a4c6f0319eae83666"
  },
  {
    "url": "zh/task-list.html",
    "revision": "d1dee4f03a242c7bb79be1397f37d07c"
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
