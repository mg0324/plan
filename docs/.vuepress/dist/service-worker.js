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
    "revision": "b00ee3f738bdaf8d788b7e10071655f1"
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
    "url": "assets/js/10.75ac6ef5.js",
    "revision": "b9e38dfa3d7b166e8206a60bd2215f29"
  },
  {
    "url": "assets/js/11.b4a9fd11.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.a59f8819.js",
    "revision": "8a5ef89e5cdb2b279513e9019a5fef62"
  },
  {
    "url": "assets/js/13.28b0cb41.js",
    "revision": "6be50b9dab59e2dd5b20418e19e8fe5b"
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
    "url": "assets/js/17.179dae3d.js",
    "revision": "c5488934f4d8b4eccc885c7775f1f244"
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
    "url": "assets/js/20.8e611342.js",
    "revision": "224e6b9ba6344c0199f62c3aba658c20"
  },
  {
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.8d5e85f7.js",
    "revision": "322e7c3d614d4fa89c96e9f4300e7b96"
  },
  {
    "url": "assets/js/23.adeeb64f.js",
    "revision": "eef7d4b9e31de5d99de28b00798da555"
  },
  {
    "url": "assets/js/24.a2d78d9e.js",
    "revision": "23961d48c9d3664ee295f7377757001b"
  },
  {
    "url": "assets/js/25.2ac66070.js",
    "revision": "652f978423f524d971b448467c8df41d"
  },
  {
    "url": "assets/js/26.7b8f194e.js",
    "revision": "52c23107afc6bcedfa3d55858bf2ba12"
  },
  {
    "url": "assets/js/27.ba0c7edd.js",
    "revision": "4ff289eed7e4895498a2e0c1bd8ab2c5"
  },
  {
    "url": "assets/js/28.bd150137.js",
    "revision": "340f65315b5e5d4bda614d866accee11"
  },
  {
    "url": "assets/js/29.60dbdc26.js",
    "revision": "2ae097b35aa16b553bd8863967c43b72"
  },
  {
    "url": "assets/js/3.6344c3f6.js",
    "revision": "b49df939339b71048e1167b1db75286b"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.dc16705d.js",
    "revision": "83315e1a98f5ef56cfd167739544edf7"
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
    "url": "assets/js/8.2a650cbc.js",
    "revision": "c20ec6fcc4f604c789877aa83db0eb17"
  },
  {
    "url": "assets/js/9.822cf4ec.js",
    "revision": "51838dc526573a0952f84e1e20573edb"
  },
  {
    "url": "assets/js/app.efdca5f1.js",
    "revision": "6373687437540d07da641741fd48cbd7"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "ca96d1c1ca225e3e38b25fc4d7612b77"
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
    "revision": "33de1b39d6007ed48a61778ef892b584"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "d6bf538defc482824c7d97acc5a2ac73"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "91a041712bdb0824a4b15de62b002dd9"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "a00ddb9ded01a2e2f05f4bec43076a16"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "8524e20de36351c4fb4d583a85a70b27"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "4e2ec54971a058ce0cbd21a88a0a0f03"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "3090855079b5c7e4bc1aa8e3ecdd3a09"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "1b14b276b417232a12243d3817dab4e7"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "6607e4f34431a006b898154b12608271"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "14d5ebb64c009eaf190f4d97c2af4504"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "dde0639bb1f8b619c51ed79ba38ae2ba"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "731c342f10c321a77df8380a0d30e9b2"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "d88b24242d798092d05ef9f1ffa73790"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "9e8d9ec5ee2d77e2acf7eca3a30ba931"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "4768dd4c8bfc57dc82116de23c3d228d"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "0861e1ccc892350767a997dc755154cb"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "3db8f9847cab844a8d0d43b9ea45a8ff"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "dd9667ddc3b0e810df3fe3a51a376fae"
  },
  {
    "url": "zh/okr.html",
    "revision": "b91c45f4f00648408367c92690200e86"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "d216f4c581c9b053f1243a02b41867d7"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "981b1029007664228a5cc91d567022b7"
  },
  {
    "url": "zh/read-list.html",
    "revision": "670e3a55e2f211fa1a518f2a97d59a8c"
  },
  {
    "url": "zh/task-list.html",
    "revision": "eca3d301e6f3cbb5a89ca1339b08f77a"
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
