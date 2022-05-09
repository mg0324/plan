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
    "revision": "94b7bde5095744b72ff2aecae0051bf4"
  },
  {
    "url": "ahead.jpg",
    "revision": "cdff059f63107aaaf311766c01259ca5"
  },
  {
    "url": "assets/css/0.styles.6a589786.css",
    "revision": "197ae22fee04c59fb7eebed565d28d4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.71f2ea8b.js",
    "revision": "4b9883a54c3067739e090f87e32cbbc7"
  },
  {
    "url": "assets/js/11.dc39268e.js",
    "revision": "f1a9b488e72e4e03c24b2df7b3e72298"
  },
  {
    "url": "assets/js/12.08c93651.js",
    "revision": "79ec44a1ed9779c5de8fe057a8b501bd"
  },
  {
    "url": "assets/js/13.f19b5928.js",
    "revision": "bb14f6a4798ed0ded268e9078af755ff"
  },
  {
    "url": "assets/js/14.cb1684da.js",
    "revision": "e0e645b69e8e14fa61ceaa09de96fee6"
  },
  {
    "url": "assets/js/15.0854630f.js",
    "revision": "c2ed38e818c36c5455ef94923d8ec49c"
  },
  {
    "url": "assets/js/16.327a4f14.js",
    "revision": "680430fdc65cb37672ee64c60c5dc22b"
  },
  {
    "url": "assets/js/17.2446e29a.js",
    "revision": "21508913d32ea74b145e5cd119e14313"
  },
  {
    "url": "assets/js/18.ac0ce5ab.js",
    "revision": "35d024616f21c18cb0dcaf1cf0d31bfb"
  },
  {
    "url": "assets/js/19.e52a5c95.js",
    "revision": "a3b4fbf7f66f2d58f0bcfe6ff360a1bb"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/20.e7122fe5.js",
    "revision": "7dd5b8d12787b924d0148af901006ce4"
  },
  {
    "url": "assets/js/21.ce174809.js",
    "revision": "843aadbfae79234052de496c8b37f2bf"
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
    "url": "assets/js/24.d3640453.js",
    "revision": "ca1621bf3522c71d8796bffe68704d14"
  },
  {
    "url": "assets/js/25.5624ff17.js",
    "revision": "b65fed3c396976e63ab00e64dbafdb78"
  },
  {
    "url": "assets/js/26.a634bb8e.js",
    "revision": "8d53d6f62e9b1da61706d9a53d3a02e3"
  },
  {
    "url": "assets/js/27.f25a33ad.js",
    "revision": "8430864511e5eaa2d51d9fcd5c4b18a1"
  },
  {
    "url": "assets/js/28.59e5d945.js",
    "revision": "b9338d5f253bc6eb9721317981aa4ba5"
  },
  {
    "url": "assets/js/29.3731cb00.js",
    "revision": "2932a9c4990e775dab83565326249636"
  },
  {
    "url": "assets/js/3.b271ec1e.js",
    "revision": "1a3db1584dbf233e16a88efdb662155d"
  },
  {
    "url": "assets/js/30.b80c4968.js",
    "revision": "0720a8abb7ce0d3ea8790de3620d5ba1"
  },
  {
    "url": "assets/js/31.af4db38c.js",
    "revision": "7904c312719e590d6352ffa341b1920a"
  },
  {
    "url": "assets/js/32.fd3d8997.js",
    "revision": "a9c3af3ede2f931a54332cfc06265eb9"
  },
  {
    "url": "assets/js/33.d2738082.js",
    "revision": "4b86860c3683b6a2d27a9cca5bcecdf6"
  },
  {
    "url": "assets/js/34.d55ae83d.js",
    "revision": "9ac92463426bf521de0f1d180674f91e"
  },
  {
    "url": "assets/js/35.8a660e65.js",
    "revision": "68acd98315ab6481559726c199dc59c8"
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
    "url": "assets/js/5.1d714966.js",
    "revision": "8fa1c77338d57a41c1155487bb8fb12d"
  },
  {
    "url": "assets/js/6.a173c061.js",
    "revision": "98078a9995db23f594ddd1171bdedfa1"
  },
  {
    "url": "assets/js/7.6eb4a849.js",
    "revision": "e0079e1d011443d6188369eccc265c7d"
  },
  {
    "url": "assets/js/8.4e82aab4.js",
    "revision": "c7a70ab0dfb6d1c347b217a9dc583d51"
  },
  {
    "url": "assets/js/9.cf24111d.js",
    "revision": "07b717e300fef49bb766280edc65c190"
  },
  {
    "url": "assets/js/app.a4b2f2f6.js",
    "revision": "5f37f3dbad59f998b19bcfeb024524c7"
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
    "revision": "d4cc63957d3c4a9d372f816cfcf9a330"
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
    "revision": "d85749f19ab6fbd0be9a89d043e41585"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "f4f79e5688c9c205ddab45dd60c4487b"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "443090e116386eee9cee3485b5867136"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "d6a589f3a7d511a44b081e8cd5070552"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "4b1deb77fb4017c3103f5eaf28531ea8"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "df08373d97953a16051a0b3015e7137b"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "c50b4fd0677b7172709ce221b0a8ade9"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "582767497e90a3378357f84bfea71803"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "ab1ed194a9fa28471c3da4322d491b07"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "98321def37332d17c2892d34764d5214"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "c73d8b8c84ed36f00b66e0ae16df7dfe"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "2da02867d49a63349695a568811c7265"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "37471b19a9260cd08c3155b2f402b462"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "1e25a7ef787742cf6053c13c8c650c6a"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "e61a3b4bfdfbdf579ac2e8725ac9aee1"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "3765a95031e75f3a51275f3b62ffc1cf"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "21d0a037848268ad522ac006966ca47d"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "4961b16162d26f0bdb2441033351a71c"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "b04c76b87667e4aab575dd82ff5df3f6"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "e47883b184794471d83cc64921c6335b"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "575e62d777c0983a4e8a0fe09da3b199"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "d8cf3cf06472734b0c45efb711adb594"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "08a604f1f9208943e9840644db8024ad"
  },
  {
    "url": "zh/food/index.html",
    "revision": "ccd60115e21173282fb7bc3b9b089a20"
  },
  {
    "url": "zh/okr.html",
    "revision": "e9fc5a522fbc1c733e138c3b8486cebd"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "6efc0955f9273d0eb09dc331368c58fc"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "7f2d183faf2a7a9f1e98db589ed5dcc1"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "1f6508a2403f100d7ad3034d84d16a8d"
  },
  {
    "url": "zh/read-list.html",
    "revision": "b89804a059b2a993f606a5bcf41067fd"
  },
  {
    "url": "zh/task-list.html",
    "revision": "561014dd0696a798f6724987705943b3"
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
