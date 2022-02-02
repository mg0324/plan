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
    "revision": "0bff3a75c2d5ab5f14524990a682d971"
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
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
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
    "url": "assets/js/17.5831d497.js",
    "revision": "e48826520a0a491561ea9b3636e02dc5"
  },
  {
    "url": "assets/js/18.aa1ba09c.js",
    "revision": "1a291066cddef390575c934e75a5655f"
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
    "url": "assets/js/21.7a19762a.js",
    "revision": "493ecc9e71c27054daff9a86d3bf69f8"
  },
  {
    "url": "assets/js/22.e54a27b2.js",
    "revision": "d04ba3c0dec2e1c8c1cccc1b2e090d98"
  },
  {
    "url": "assets/js/23.e9bed8fa.js",
    "revision": "cf10311bfa077a8963d3103cef3a6f04"
  },
  {
    "url": "assets/js/24.b0ca366c.js",
    "revision": "d45c160c69305f2c74447b2d46d3a2aa"
  },
  {
    "url": "assets/js/25.f8c5c3bc.js",
    "revision": "f6f715295b63c2afa514beb175067076"
  },
  {
    "url": "assets/js/26.51203217.js",
    "revision": "eed5655dbcae0cb2f53c578f736f57ea"
  },
  {
    "url": "assets/js/27.ed2ca0aa.js",
    "revision": "849148146a27c2f4a9e4ff7f300f05c8"
  },
  {
    "url": "assets/js/28.9d846b55.js",
    "revision": "4ac1aefa47423304043961fd2da8c8d5"
  },
  {
    "url": "assets/js/29.eb8e9a53.js",
    "revision": "e4bc725b2a97fbe82ab0dba8d77f8784"
  },
  {
    "url": "assets/js/3.49411e37.js",
    "revision": "be0b54a33bb87e23e0d61430ca8c8c63"
  },
  {
    "url": "assets/js/30.7cffb0d6.js",
    "revision": "5382cf05e2209d424ab68e05528dfa5e"
  },
  {
    "url": "assets/js/31.85534479.js",
    "revision": "bc97677c6dd938040c163cd101ea71eb"
  },
  {
    "url": "assets/js/32.60c13f9d.js",
    "revision": "3cb2a8c0cdaa73c59760121a4bed3fad"
  },
  {
    "url": "assets/js/33.5727c430.js",
    "revision": "3b1b0172bb62a7da88beff72c5609fb8"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.f01b9117.js",
    "revision": "b7dd812f9a2bb3c6f3f5b7346a203639"
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
    "url": "assets/js/app.213438d4.js",
    "revision": "c718065ca16af224df44684da99b2074"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "c3872f38c59d1bde6ffea2d3951fcaa4"
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
    "url": "res.2022/02/haoge.jpeg",
    "revision": "3d8e45b3514c68abcc32a6cc5b8e9167"
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
    "revision": "6336d5060140038cd41484554c62577e"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "2cf285abc7d55c2c33deb630c94be26f"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "b7a09dffb85e6a72596b8b4881da8df9"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "2f3493c6e7f616c96a3b615f39d5f354"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "c130d6e950f9891d8f03662be3e1b32d"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "c3516bf6bb27d84cfb05406f56349264"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "6555589cdde431657c60c81274af59f5"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "03f8504f57f908b26e3c41be8a974547"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "4787064314f11d80ab6f117660b5b855"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "86eb58d356eed0b3b6c1045cb1bdd615"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "faaee2ba1db740c7fd77643c022fdea1"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "44d2a314ddfff5c1fb63988c4d7c23e1"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "937a62ce353d4518cd03dca3c6a24e47"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "498402c963d13b3710cc24eba8a06e42"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "754401fbb8a0aaab95bea838e3d3cbd2"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "54e3944802b2ab6811dbf587b2a3fd0d"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "4a3e9bd012d5b66addcad684fd0fcd55"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "706a9c9f5220160943ea94dd00a3239b"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "27572c59ffa619428d233ccb5175dbd0"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "f91d8a38b5cf789a603fb59ff7b1353e"
  },
  {
    "url": "zh/food/index.html",
    "revision": "b1b7fe26ade8c429a36b42d72631f331"
  },
  {
    "url": "zh/okr.html",
    "revision": "29320602973568d4c8755bd53cd2ea16"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "aa61f5b493f142a01710eba11d1d969b"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "a58f2cb4af4652c6ed3fb381e2e94f80"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "4b0492b88209e0d690b4c6aa3655b928"
  },
  {
    "url": "zh/read-list.html",
    "revision": "489bcab8f930fcc5e0c59dee9e088155"
  },
  {
    "url": "zh/task-list.html",
    "revision": "dd7fdd1f887edf400478a3c7d1d44d0c"
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
