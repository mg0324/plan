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
    "revision": "1a582b908d94f697b76bfcd2d2cd5c3a"
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
    "url": "assets/js/10.aaf8fc17.js",
    "revision": "b5ad4c7f2e7ba541306027c0f9d08f3b"
  },
  {
    "url": "assets/js/11.d4629f2a.js",
    "revision": "83746c85108ab8be89ab098c2c549f8b"
  },
  {
    "url": "assets/js/12.727d5c95.js",
    "revision": "3411034a4a6afcf3018947c3b8a53a28"
  },
  {
    "url": "assets/js/13.68ce4690.js",
    "revision": "ecf3e985cbb4aa9c805e2b74aefea99a"
  },
  {
    "url": "assets/js/14.e2158937.js",
    "revision": "a27a76509d361317d85ef4c19b9a188e"
  },
  {
    "url": "assets/js/15.1f58fb99.js",
    "revision": "11972b798ad77bf72c88f374ff4da114"
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
    "url": "assets/js/18.ccac4d4a.js",
    "revision": "84f59852cc568764d28854bb3758d727"
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
    "url": "assets/js/21.fab1a2d3.js",
    "revision": "7843c6b48ff4ffb42e5e56c284609f37"
  },
  {
    "url": "assets/js/22.e2bbca0b.js",
    "revision": "eacb411948bf6242f5691360b85f44fb"
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
    "url": "assets/js/25.077386f7.js",
    "revision": "cdfdb13148a3a5c80ae113467a1ffac6"
  },
  {
    "url": "assets/js/26.e089f7e5.js",
    "revision": "f115c094ee7c927521118034f8457d16"
  },
  {
    "url": "assets/js/27.a82be3a1.js",
    "revision": "ddccbe17115c0d5a32d3034bc5067d84"
  },
  {
    "url": "assets/js/28.38f4f2e7.js",
    "revision": "16c05c793eb949ab5a5dcac037be56af"
  },
  {
    "url": "assets/js/29.f52803b1.js",
    "revision": "baa8bb7c2d436c135621ea2e4f09ff45"
  },
  {
    "url": "assets/js/3.60bb5ebb.js",
    "revision": "2d4a5238d6da95093cfc613bcfbd0868"
  },
  {
    "url": "assets/js/30.2e6b4797.js",
    "revision": "a4dcbfabba79da478c3db0389925e534"
  },
  {
    "url": "assets/js/31.06697603.js",
    "revision": "053b2589d61c9099aa6f92d221fed817"
  },
  {
    "url": "assets/js/32.aab797cd.js",
    "revision": "0592e7544d11ef020c2984d3cd009480"
  },
  {
    "url": "assets/js/33.967bd580.js",
    "revision": "83d0a5d7b6e28bb484f4cc2da004e824"
  },
  {
    "url": "assets/js/34.9b10fb58.js",
    "revision": "b2566d998e2061044bed442462e8a71f"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.5fe4d682.js",
    "revision": "2c0d1a41a4b2d1f9685a49b64449db32"
  },
  {
    "url": "assets/js/6.28746898.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.18c6bea6.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.32523789.js",
    "revision": "22d4b7ad00ba2bd85d718998e5225b4b"
  },
  {
    "url": "assets/js/9.8989e22c.js",
    "revision": "47e91820d48d4484f250279083fd440c"
  },
  {
    "url": "assets/js/app.462a37da.js",
    "revision": "fcb3a645f5870d0567d7cd73fd067fac"
  },
  {
    "url": "home/homeplan.png",
    "revision": "a997d349a141c17d9a0aee0c1f37777d"
  },
  {
    "url": "index.html",
    "revision": "dad0b83301e8903e61dc935459443910"
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
    "revision": "ca02d02de5deaa6b7fd4e354e76418ba"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "55473aee454ce99660c6164bc1a84809"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "83e7726340ba591c4425c2ecc5aa8f52"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "de33ef55c650484d127a5d41f96bfac5"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "6b16204d6bd0a4d2574ece13bf7df12d"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "1272954d95188938e114b633a2d85535"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "cd21fd048a1d2bdb78c4acb1c9f82afd"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "bf3ee4ad6b27ed9c035668f09eafc53b"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "12c85193c657246efe6bfb5c6d4a1af7"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "047f6313c4842bac0fa7077b5221996e"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "b2bf7a7f8b862ee9d5d2168589ccfebe"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "f4fb92786d39bf6a45e70df1c382d99c"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "7da31661202cfdd5fcd9362e2ef29ac9"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "5ad66302d2ed0f1e1ef366bc8be5d62f"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "4e2c602982b48978632cacb858e03c34"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "c990fc7949a91ff3bf224a4d26dfb8c9"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "982e18fb8a61fd06d6e85587e18bd95a"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "300da7cb71713c72b4f14db78a40feaf"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "a3f262aa9c648422b8fed129c37fb635"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "e58973ea608e64f08ca7980f3c63b7b2"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "115490362a0f5add882b068f030fc24c"
  },
  {
    "url": "zh/food/index.html",
    "revision": "ae51a4bed79b4d68003e7eb3decfa6db"
  },
  {
    "url": "zh/okr.html",
    "revision": "62b2bc2c4ccd0c68097520de6104dce0"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "10c2076afb3162fc236cc4dbfcb71545"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "246c7591e784ca4dac8d3111c309c0ca"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "afc4280458f88869f4c716e53b58957e"
  },
  {
    "url": "zh/read-list.html",
    "revision": "75bff5f8b43a102b8063f90896cfff47"
  },
  {
    "url": "zh/task-list.html",
    "revision": "7029b7e0eadfedd8f897c8ec13dd6645"
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
