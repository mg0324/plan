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
    "revision": "ce2fbf20320f9ddb27edd84e82677204"
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
    "url": "assets/js/11.e8a9cde0.js",
    "revision": "4d67e95621d0d0c5bdf843ed35d0bc8e"
  },
  {
    "url": "assets/js/12.08c93651.js",
    "revision": "79ec44a1ed9779c5de8fe057a8b501bd"
  },
  {
    "url": "assets/js/13.1a48157b.js",
    "revision": "86d04628027961e440f5e6b00ddb05fb"
  },
  {
    "url": "assets/js/14.3ab94d6d.js",
    "revision": "b9cd6bebd70bf4306587a58b8d829a35"
  },
  {
    "url": "assets/js/15.986db500.js",
    "revision": "861c882cb078dda6c808e846425b0d00"
  },
  {
    "url": "assets/js/16.24df6b98.js",
    "revision": "3cac84e3f6b51f451ce4a3500ef86183"
  },
  {
    "url": "assets/js/17.c9f3f7dd.js",
    "revision": "c3e1487ed366a90b8cfe30cde571ded0"
  },
  {
    "url": "assets/js/18.7641c7ad.js",
    "revision": "69a38f67203126a8e8c7064b6b6d3e72"
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
    "url": "assets/js/21.cc7eebff.js",
    "revision": "10b643d91f38d213cbb15aee30ab8b71"
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
    "url": "assets/js/24.b69ab85a.js",
    "revision": "0f6e1d75568ac70ddc1b8b2b8dfaf1a1"
  },
  {
    "url": "assets/js/25.5ad81595.js",
    "revision": "dd5495b9ec39acbd287f27a0235cf638"
  },
  {
    "url": "assets/js/26.3633396d.js",
    "revision": "cea531674806afc804ac6ea2b67d0184"
  },
  {
    "url": "assets/js/27.3f9147d5.js",
    "revision": "549051128c1c8ff50d4a3c3416ac4a86"
  },
  {
    "url": "assets/js/28.56d1c751.js",
    "revision": "b79190b6d2ccbeb7fa28afb11f9e7fd0"
  },
  {
    "url": "assets/js/29.0645bea1.js",
    "revision": "7fa4a0259b7fb162bd514fb58c0dcf14"
  },
  {
    "url": "assets/js/3.b271ec1e.js",
    "revision": "1a3db1584dbf233e16a88efdb662155d"
  },
  {
    "url": "assets/js/30.ef42d9b2.js",
    "revision": "edd039cc569ee709116953424f5981f2"
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
    "url": "assets/js/34.0f12418d.js",
    "revision": "3d923b69d8e5c1f0f22bf26fccfb4109"
  },
  {
    "url": "assets/js/35.98f810f8.js",
    "revision": "09119624ae874d65aff9c976723ef995"
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
    "url": "assets/js/5.ae241dac.js",
    "revision": "8f145e13cd03a4500cf8f861f61bb803"
  },
  {
    "url": "assets/js/6.c51aafa2.js",
    "revision": "5ad032ec713cc904d254562641686d92"
  },
  {
    "url": "assets/js/7.c1b3ce37.js",
    "revision": "2931d6ee244290e295caa0dee8ed1e24"
  },
  {
    "url": "assets/js/8.1d6b1195.js",
    "revision": "ac805448f6026cdc616fe9f1dbc21cbd"
  },
  {
    "url": "assets/js/9.9bf41425.js",
    "revision": "8215239e4c16d9fa442b5dfa516560bf"
  },
  {
    "url": "assets/js/app.2ea22146.js",
    "revision": "2ccde4419f98a727fbdaf3760c09f81a"
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
    "revision": "72de6fa6fc7fc668d3fded2f161c9b69"
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
    "revision": "360338b1a8fd3b454ed9d006276ef7ef"
  },
  {
    "url": "zh/2020/punch-in09.html",
    "revision": "ad32d8266d7f76a7a512cacd7ca93368"
  },
  {
    "url": "zh/2020/punch-in10.html",
    "revision": "0579ffa47ddae49b78bec4d92d0379f5"
  },
  {
    "url": "zh/2020/punch-in11.html",
    "revision": "cce3d213f2baa4e3380f66f30da67b3e"
  },
  {
    "url": "zh/2020/punch-in12.html",
    "revision": "26b746d87a57708d53baf708a556ffe0"
  },
  {
    "url": "zh/2020/punch-in2.html",
    "revision": "d50bcb75ea5da6ee1869b234a4d6cebd"
  },
  {
    "url": "zh/2021/a01.html",
    "revision": "73289976f5e9096158e3c6de6c9a43cc"
  },
  {
    "url": "zh/2021/a02.html",
    "revision": "4b5b3612ed69f7d2a50602f329f4376b"
  },
  {
    "url": "zh/2021/a03.html",
    "revision": "689d2a6df888a44ecdae6119608c8ffb"
  },
  {
    "url": "zh/2021/a04.html",
    "revision": "b436ac7f6cf4843de0a767141dab45c3"
  },
  {
    "url": "zh/2021/a05.html",
    "revision": "02c4ba3830fca551b38db80111aa3da1"
  },
  {
    "url": "zh/2021/a06.html",
    "revision": "90c59c698effb37025bb488e20b7e482"
  },
  {
    "url": "zh/2021/a07.html",
    "revision": "6eab370b98943ee4d2a28115b5c92963"
  },
  {
    "url": "zh/2021/a08.html",
    "revision": "d874f1695223af8ffec2e73fb02e5f68"
  },
  {
    "url": "zh/2021/a09.html",
    "revision": "b390b800507eaf7e461d8603bd0bf84a"
  },
  {
    "url": "zh/2021/a10.html",
    "revision": "68d5ed0b7d08cab8e3101028f2974f64"
  },
  {
    "url": "zh/2021/a11.html",
    "revision": "c56a2d1a70cf2b7719fe18ab99f24c5e"
  },
  {
    "url": "zh/2021/a12.html",
    "revision": "f672737fae9db0c69ee0176f05a11218"
  },
  {
    "url": "zh/2022/a01.html",
    "revision": "e0306612a8d9ded39a9fced1707aaf81"
  },
  {
    "url": "zh/2022/a02.html",
    "revision": "d1ece5cc588f7383b2b69c7b712a353a"
  },
  {
    "url": "zh/2022/a03.html",
    "revision": "211f1f40fac2f1fbacafe55bb7ff0d18"
  },
  {
    "url": "zh/2022/a04.html",
    "revision": "2f1e6b679519ef18d8f45e508f5a06ae"
  },
  {
    "url": "zh/2022/a05.html",
    "revision": "0e42f6d30e6cec209368c5ebaeb5d52f"
  },
  {
    "url": "zh/food/index.html",
    "revision": "e020bb93c04483aab7d4c5324884c1d4"
  },
  {
    "url": "zh/okr.html",
    "revision": "6d15e3fdbdd2e1a285c5f43939d1f0e7"
  },
  {
    "url": "zh/play/2020.html",
    "revision": "3771a6b0ff18d25b9240cf1d95a88de2"
  },
  {
    "url": "zh/play/2021.html",
    "revision": "4617da041d6b518f2b47c6206dd5949f"
  },
  {
    "url": "zh/play/2022.html",
    "revision": "0f20dac77e23b022a859b9b599e94a5d"
  },
  {
    "url": "zh/read-list.html",
    "revision": "2f71e64e2da1f41fc531ed8839a0b4b4"
  },
  {
    "url": "zh/task-list.html",
    "revision": "3b7a2fc67a1dba13977561ada90755be"
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
