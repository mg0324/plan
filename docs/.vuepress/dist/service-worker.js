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
    "revision": "5015b5b731c6c741d4a9803463ba2536"
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
    "url": "assets/js/11.b4a9fd11.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.9120afa5.js",
    "revision": "4a430da513b9010243e560918bb85aea"
  },
  {
    "url": "assets/js/13.b48df0d9.js",
    "revision": "9cf2489cac823d1b204f463d5f679a36"
  },
  {
    "url": "assets/js/14.38a12dbf.js",
    "revision": "e87a5a2649ab9164e54c28d075c5256a"
  },
  {
    "url": "assets/js/15.8916a1ef.js",
    "revision": "16e1d9e80c48b7183b8a46c6acabc867"
  },
  {
    "url": "assets/js/16.c967a865.js",
    "revision": "87d4b62d87953d21e4c0d069c273f694"
  },
  {
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
  },
  {
    "url": "assets/js/18.d6ef3d73.js",
    "revision": "64dd128221250da8decdae196fea168c"
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
    "url": "assets/js/20.845ebcec.js",
    "revision": "d3a4f5851531dbd2c343cbe1c2d37dd6"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.e54a27b2.js",
    "revision": "d04ba3c0dec2e1c8c1cccc1b2e090d98"
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
    "url": "assets/js/25.89342b38.js",
    "revision": "548237d11fc7448e4367d88b6876c622"
  },
  {
    "url": "assets/js/26.d03312dd.js",
    "revision": "bdff56d65b674bf7f05579f689356116"
  },
  {
    "url": "assets/js/27.45315757.js",
    "revision": "f51770fac18aac0aca173c485e7615d0"
  },
  {
    "url": "assets/js/28.fdb1d72a.js",
    "revision": "6782beb4d2e4b3f1d18a36be92fa1c6e"
  },
  {
    "url": "assets/js/29.d0817017.js",
    "revision": "b53d76ae3dce3b896a6afc3cc778a5be"
  },
  {
    "url": "assets/js/3.d4d3657d.js",
    "revision": "abbbc4d1ebc7740b2b930aede75dc090"
  },
  {
    "url": "assets/js/30.30c1dc28.js",
    "revision": "12a8a2ee7988bb703cf73d646a32992b"
  },
  {
    "url": "assets/js/31.c28c9d95.js",
    "revision": "fa2eb7f96ab24a4ff1b3d1ffeb9ce217"
  },
  {
    "url": "assets/js/32.5e988a7a.js",
    "revision": "854e76c7c2c2114135fc04c2cb764fa3"
  },
  {
    "url": "assets/js/33.6304c9bd.js",
    "revision": "4dd8f60b9a7a9db64eb89abf5567c29a"
  },
  {
    "url": "assets/js/34.351a5da4.js",
    "revision": "c9874de342896ca156629cd5c37808b5"
  },
  {
    "url": "assets/js/35.7884e629.js",
    "revision": "14df335d544d29ffdec8f3ededf22ed0"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.02f76486.js",
    "revision": "3aa641192f54b4007e2e8e43d189c693"
  },
  {
    "url": "assets/js/6.7b2142a6.js",
    "revision": "952d7d2d04da9abf8ede969fcc2d4a19"
  },
  {
    "url": "assets/js/7.36dd57ba.js",
    "revision": "cf15d2321c89132d52b0497d022cf9d4"
  },
  {
    "url": "assets/js/8.c59e7ff3.js",
    "revision": "0ed322230d0f021727de1ad86c895d52"
  },
  {
    "url": "assets/js/9.822cf4ec.js",
    "revision": "51838dc526573a0952f84e1e20573edb"
  },
  {
    "url": "assets/js/app.3766cbcd.js",
    "revision": "ae741fe69cfcd98fa37716df146876d5"
  },
  {
    "url": "food/blcf.jpeg",
    "revision": "b10f3f7c3e26100f3dcb4c9441716d8f"
  },
  {
    "url": "food/cm.jpeg",
    "revision": "d7b37bae591c4ea61f53495a203d4a39"
  },
  {
    "url": "food/jj.jpeg",
    "revision": "f5d3de72dacd5763324dc03ce56493e5"
  },
  {
    "url": "food/jtbz.jpeg",
    "revision": "f55281483466a7c7d29e99094ec4613a"
  },
  {
    "url": "food/mlt.jpeg",
    "revision": "4dde4c9caa479bcbea9251fdf9bda675"
  },
  {
    "url": "food/tdbxgjt.jpeg",
    "revision": "d6eba8fcf4f9d1f84df10043c9700327"
  },
  {
    "url": "food/tdgljf.jpeg",
    "revision": "8873264a065597f21f83747f5a56f679"
  },
  {
    "url": "food/zjm.jpeg",
    "revision": "a1d5cc85698eea5554f9829aa24bc0b5"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "39886b928547c495507094432d9d3c73"
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
    "url": "okr/okr-2022-03.png",
    "revision": "61ad782da867400a5dfc5728e6e22668"
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
    "url": "res.2022/02/haoge.jpeg",
    "revision": "3d8e45b3514c68abcc32a6cc5b8e9167"
  },
  {
    "url": "res.2022/03/leetcode.png",
    "revision": "fd2aadb232af37f0daf49a89dba7b155"
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
    "revision": "05580b7ac1c259df3f8ac7ab2db78181"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "7a9216d245eaf0360f415c17e36ad3c3"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "6d4b06394b8bea31c81cc83dbf633a3e"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "92a17072d0108495dc3417b4dcf41014"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "cb9c90d04046f9fccab68a81568ae3a8"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "d919a5fbde05843a003cceca45ac9586"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "e873358e55c601ddb2347e167b73ac7b"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "2f40ace16a25370cdfdb0d7cdce799c0"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "15708f0c60289fdf93a555879bd0444a"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "867f25b40d0e3455ae3f9175c90beba2"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "263e4f7cc663e84d74dbe8e3cc700e82"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "41d64938685a858f0359a1adb7f4b770"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "157ce4074a50802c98b3ba50f1a752f1"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "dc29953de02ba4fd32e75deaf4f086ac"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "f7c1a4c67ef85fbef2d89feecb345c55"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "6259747eaa5a2f2e30408271d74a7082"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "719d0d8dbe1e15d63e834d586f2a24af"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "dfa6440fc5f9b6a42004c5730e5a1216"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "6336e2ebd8f926818da28eb3e9dbee5d"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "7948bfda50ca007ef6c0da8b399f1925"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "5cf40dff2efee257e45797842fc37efb"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "ab0bc90e3958806c889c281064a65e97"
  },
  {
    "url": "zh/food/index.html",
    "revision": "4bde0a2884da34e93be25f7f8a1b4179"
  },
  {
    "url": "zh/okr.html",
    "revision": "1359a309878e642c653cc8c3dead1ceb"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "7e5ec5694497450d438c210cc515974e"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a28d991deaa384d38747d2d2cf721847"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "db680b19fe5e468d547b42ec92f67bb0"
  },
  {
    "url": "zh/read-list.html",
    "revision": "63d0afd79e7263dac54f4021dc6026ad"
  },
  {
    "url": "zh/task-list.html",
    "revision": "f4651942687cf66a128d5d2f4c4a5bdb"
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
