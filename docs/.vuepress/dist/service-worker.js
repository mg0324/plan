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
    "revision": "dc179ab942d2aa356da1efdf67e81960"
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
    "url": "assets/js/10.e6a6f69d.js",
    "revision": "87c99eef9379417825bd9cc14467b284"
  },
  {
    "url": "assets/js/11.bf5c2793.js",
    "revision": "37220a88fb8ebba2fb54d05a18626af4"
  },
  {
    "url": "assets/js/12.0a251158.js",
    "revision": "9a15aab0a773790b36e2031f8ef8db29"
  },
  {
    "url": "assets/js/13.b693d485.js",
    "revision": "303312c3dde9568f01e32fa317b792f1"
  },
  {
    "url": "assets/js/2.c8b48f9d.js",
    "revision": "98ca40730d0e8c97b10c9dd37bdf16fa"
  },
  {
    "url": "assets/js/3.c6b73629.js",
    "revision": "eaf583c12c1ed38520e4aafb781895ea"
  },
  {
    "url": "assets/js/4.509cfac1.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.548a0298.js",
    "revision": "6ce86141be2ed4b41f0cc58cf1008dde"
  },
  {
    "url": "assets/js/6.86837026.js",
    "revision": "5fadf09698c6a630606fcf12c44e3561"
  },
  {
    "url": "assets/js/7.cfe128ef.js",
    "revision": "e7b9830a0e7904e21c7abf4bd347b821"
  },
  {
    "url": "assets/js/8.bc6c01cd.js",
    "revision": "c7a70ab0dfb6d1c347b217a9dc583d51"
  },
  {
    "url": "assets/js/9.f583a9c7.js",
    "revision": "07b717e300fef49bb766280edc65c190"
  },
  {
    "url": "assets/js/app.2d8f3627.js",
    "revision": "288f211f346e3de093d6f43b48cbaa81"
  },
  {
    "url": "index.html",
    "revision": "0655447263a969ee82020ef23cded800"
  },
  {
    "url": "mk.png",
    "revision": "69feb1ebdf6d0913c171ac8995496231"
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
    "url": "res/kafka-mutli-art.png",
    "revision": "e95eea3296d84f88efc4a0426f1f8a9a"
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
    "url": "zh/punch-in.html",
    "revision": "c52400e6e74d233f627b0da87014f6c6"
  },
  {
    "url": "zh/punch-in09.html",
    "revision": "b2c5530b0e627f35353669404e06f2c8"
  },
  {
    "url": "zh/punch-in10.html",
    "revision": "cff8d1443635b3b4c0114480c69eae01"
  },
  {
    "url": "zh/punch-in11.html",
    "revision": "33d90d342104cb6b94c788ce7013bf31"
  },
  {
    "url": "zh/punch-in12.html",
    "revision": "05678745e0b7bb60a891636c5842fc67"
  },
  {
    "url": "zh/punch-in2.html",
    "revision": "1c106d0b76cd13b728158fedeca0ea9f"
  },
  {
    "url": "zh/task-list.html",
    "revision": "dc292a666e3632b63266b500ac796afe"
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
