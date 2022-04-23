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
    "revision": "0be596df4301563d8e15593655c1c916"
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
    "url": "assets/js/10.a63110d5.js",
    "revision": "a4fa04628e9f5bce3593ff22a13a6f12"
  },
  {
    "url": "assets/js/11.f2795cfa.js",
    "revision": "850519b89ed40dee5bca44cc857f4a68"
  },
  {
    "url": "assets/js/12.c31ed476.js",
    "revision": "c5f308feeefc5d6c3b1b51d7d2ce4533"
  },
  {
    "url": "assets/js/13.ff40e81e.js",
    "revision": "d9ebe6e2b02f6a8e423afc04ccebe8f6"
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
    "url": "assets/js/16.7966af44.js",
    "revision": "4a6e9516db85c6c097ff1a6d852547b1"
  },
  {
    "url": "assets/js/17.87da9597.js",
    "revision": "91f8f1ae7cb9864e41fcfc45de08f2dc"
  },
  {
    "url": "assets/js/18.ccac4d4a.js",
    "revision": "84f59852cc568764d28854bb3758d727"
  },
  {
    "url": "assets/js/19.abe69fa3.js",
    "revision": "c05fbc60ecf020004a123ee0382ca2aa"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.35a334ce.js",
    "revision": "2142c9f13b1836f082a0ac1d09d6c1ed"
  },
  {
    "url": "assets/js/21.c89c203a.js",
    "revision": "2a3f60d63ba1f66807387a49bca42611"
  },
  {
    "url": "assets/js/22.0d651603.js",
    "revision": "a437412b5912a8246c950873cced89b0"
  },
  {
    "url": "assets/js/23.bd8ba8a4.js",
    "revision": "245d3192d725148a6210e37c4a2cf7a2"
  },
  {
    "url": "assets/js/24.df1cc411.js",
    "revision": "86451a5f3915a63b0d535d9ba2157daf"
  },
  {
    "url": "assets/js/25.c4129bdc.js",
    "revision": "92d0be2acd6872a7d90c0d6b8132a5ea"
  },
  {
    "url": "assets/js/26.dd8ceaa0.js",
    "revision": "bdbbf4d6f5f8629931e6367817c921a4"
  },
  {
    "url": "assets/js/27.3f9147d5.js",
    "revision": "549051128c1c8ff50d4a3c3416ac4a86"
  },
  {
    "url": "assets/js/28.7e4ad4e1.js",
    "revision": "8ba6ebcfb141c2155a912c7dcf8f7d16"
  },
  {
    "url": "assets/js/29.9ad32d1a.js",
    "revision": "3c388a7fe3eb9565f923f4c43a1de688"
  },
  {
    "url": "assets/js/3.d4d3657d.js",
    "revision": "abbbc4d1ebc7740b2b930aede75dc090"
  },
  {
    "url": "assets/js/30.c7f1277d.js",
    "revision": "731e381e9c06f3cb326f396171f3f34b"
  },
  {
    "url": "assets/js/31.81ec2412.js",
    "revision": "f400e65ba6a589378e3cfadde82425f7"
  },
  {
    "url": "assets/js/32.5f7d6df2.js",
    "revision": "5846b6ad63d010a1a2a44a83ac4f7576"
  },
  {
    "url": "assets/js/33.0a805458.js",
    "revision": "18d6a6d4ff856ca9bbb1a624f3a40dd6"
  },
  {
    "url": "assets/js/34.bd1415ed.js",
    "revision": "52f9219e16c96dffd159f2ca8b99d796"
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
    "url": "assets/js/5.b4f70700.js",
    "revision": "f13cf0eaeb4c179a3364702ba4846f8c"
  },
  {
    "url": "assets/js/6.436dcb31.js",
    "revision": "59378142fc954f2368bd2cb10858a0cb"
  },
  {
    "url": "assets/js/7.c1b3ce37.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.a00591b8.js",
    "revision": "f260a1daafaecd77fc97ea5cf5b58ed7"
  },
  {
    "url": "assets/js/9.3e3a6e44.js",
    "revision": "827d4ceb35623c1d67ae584b80ab7649"
  },
  {
    "url": "assets/js/app.ee9662b1.js",
    "revision": "2bf1550b96f439a8695bb9d0f86c26b1"
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
    "revision": "445ac47c598015c2a21b8dace8556e17"
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
    "revision": "94f3fd4ce0e759f294cb3396ef4073c8"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "bc37ec352cc287f9f47553f0be07c350"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "351e1bf20df72a14599bcb1c9252c3c1"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "abee1b4e72cd79cbae8bf90fd7f3429d"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "9618092924a6417db28e5dc23901cc47"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "a6e3c1433eb4cf5773542e06c1c00045"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "7d23a30e4a67c250c91e486f30654253"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "70b6730245fe068c205b259035407a18"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "3f68949e9b3d20f8f61e61030725c40f"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "60c5d25a65869fa84134d2c5793ae7e8"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "48c2948ccf9f72066d1b43c510d5d532"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "82b28b37937f8bce79a0ee6675da2ba5"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "2fd640f8cd14deab5d9cbfb6c3ee1e91"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "a9a80710ed61e21ee0c361ca1bcc2bee"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "c7e681cfbc716ea3785e46eba4ef54a3"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "6b70c01729f9a721bf06d2a52d4dbaa7"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "2fdb905bf35840c4e3a2075161765dbd"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "91a2b06300dd094efaf555d5f327602f"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "61cbaeecd8fe9ac121bd62af44663ac9"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "042b8cfaa5e0029fe99dcd03cb7ecf26"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "54ea74a252e1acacd5f8678c96af73c1"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "fd891216c049be89dd0cbcb34016476c"
  },
  {
    "url": "zh/food/index.html",
    "revision": "24b4321fdff0248613da3c63650d02f5"
  },
  {
    "url": "zh/okr.html",
    "revision": "ec18eee93d7bb058a9cc2fbda8cc2de6"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "9503502a34db87d492f920571b55c27b"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "9de9951cb046959537ac1f45581337dd"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "641c48de70c264f70e3ac6a02a40a582"
  },
  {
    "url": "zh/read-list.html",
    "revision": "7fa763650560c8eb18e3863c2780ebcb"
  },
  {
    "url": "zh/task-list.html",
    "revision": "7259d2f69e064d9d8b81aaf44caeeb70"
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
