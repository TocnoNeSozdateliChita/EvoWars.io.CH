function mobileCheck() {
  let _0x187643 = false;
  (function (_0x3eafa4) {
    if (/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|ipad|up\.browser|up\.link|webos|wos)/i.test(_0x3eafa4)) {
      _0x187643 = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return _0x187643;
}
;
var isMobile = mobileCheck();
if (partner == "poki" && !isMobile) {
  $("#fullscreenArrow").show();
  window.addEventListener('resize', function () {
    $("#fullscreenArrow").hide();
  });
}
var CPMAdsValidatorArray2 = [];
document.addEventListener("aip_consentapproved", function (_0x15cbb1) {
  consentFinished = true;
});
document.addEventListener("aip_consentrejected", function (_0x30b0f8) {
  consentFinished = true;
});
function downloadScripts() {
  window.userLang = system.userLang;
  if (getCookie("lang") != null) {
    window.userLang = getCookie('lang');
  }
  window.serverTime = system.time;
  window.cdnList = system.cdnList;
  window.clientCountryCode = system.clientCountryCode;
  window.clientCountry = system.clientCountry;
  window.clientContinent = system.clientContinent;
  if (system.christmasTime == true) {
    window.christmasTime = true;
    $("#loading .bg").css({
      'background-image': "url(\"" + cdnServer + "images/loading_screen_xmas.jpg\")"
    });
    $("#loading .bg-blur").css({
      'background-image': "url(\"" + cdnServer + "images/loading_screen_xmas.jpg\")"
    });
  } else {
    if (system.easterTime == true) {
      window.easterTime = true;
      $("#loading .bg").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen_easter.jpg\")"
      });
      $("#loading .bg-blur").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen_easter.jpg\")"
      });
    } else if (system.halloweenTime == true) {
      window.halloweenTime = true;
      $("#loading .bg").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen_halloween.jpg\")"
      });
      $("#loading .bg-blur").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen_halloween.jpg\")"
      });
    } else {
      $("#loading .bg").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen.jpg\")"
      });
      $("#loading .bg-blur").css({
        'background-image': "url(\"" + cdnServer + "images/loading_screen.jpg\")"
      });
    }
  }
  if (system.birthdayTime == true) {
    window.birthdayTime = true;
  }
  function _0x33d753() {
    const _0x2a4dee = [];
    for (let _0xfacebe in window) {
      if (typeof window[_0xfacebe] === 'function') {
        _0x2a4dee.push(_0xfacebe);
      }
    }
    return _0x2a4dee;
  }
  const _0x7af0f7 = _0x33d753();
  let _0x482ebb = [];
  for (let _0x5be4d6 in window) {
    if (typeof window[_0x5be4d6] === "function") {
      _0x482ebb.push(_0x5be4d6);
    }
  }
  var _0x6ccb8f = 0x0;
  system.loadScripts.unshift("lang/" + system.userLang + ".js");
  for (var _0x40a080 = 0x0; _0x40a080 < system.loadScripts.length; _0x40a080++) {
    var _0x115e06 = cdnServer + system.loadScripts[_0x40a080];
    var _0x229d1b = false;
    if (_0x115e06.indexOf(".css") !== -0x1) {
      _0x229d1b = true;
    }
    _0x115e06 += '?' + system.lastModified;
    console.log("Loading: " + _0x115e06);
    var _0x112a45 = {};
    if (_0x229d1b) {
      _0x112a45 = document.createElement("link");
      _0x112a45.id = _0x115e06;
      _0x112a45.rel = "stylesheet";
      _0x112a45.type = "text/css";
      _0x112a45.href = _0x115e06;
      _0x112a45.media = "all";
      _0x112a45.async = false;
      document.head.appendChild(_0x112a45);
    } else {
      _0x112a45 = document.createElement("script");
      _0x112a45.src = _0x115e06;
      _0x112a45.async = false;
      document.head.appendChild(_0x112a45);
    }
    _0x112a45.onerror = function () {
      alert("cannot load file: " + this.src);
    };
    _0x112a45.onload = function (_0x50c668) {
      _0x6ccb8f++;
      if (typeof this.href != 'undefined') {
        console.log("Loaded: " + this.href);
      } else {
        console.log("Loaded: " + this.src);
      }
      if (_0x6ccb8f == system.loadScripts.length) {
        console.log("Finished loading scripts");
        for (let _0x511ae0 in window) {
          if (typeof window[_0x511ae0] === 'function') {
            if (!_0x482ebb.includes(_0x511ae0)) {
              if (_0x511ae0 == "keysAction" || _0x511ae0 == "rewardedAdFunction") {
                continue;
              }
              Object.defineProperty(window, _0x511ae0, {
                'value': window[_0x511ae0],
                'writable': false,
                'configurable': false,
                'enumerable': true
              });
            }
          }
        }
        loaderFinished(system, _0x7af0f7);
      }
    };
  }
}
var siteHide = [];
async function startLoading() {
  if (typeof CrazyGames !== 'undefined') {
    await window.CrazyGames.SDK.init();
  }
  downloadScripts();
}
startLoading();
function loaderFinished(_0x18cc75, _0x1f13da) {
  if (_0x1f13da.length == 0x0) {
    console.log("error loading functions");
  }
  if (partner != "poki") {
    if (typeof gdprAds === "function") {
      gdprAds();
    }
  }
  translatePage();
  $("body").css({
    'background': "black",
    'opacity': '1'
  });
  reloadLanguageSelect(_0x18cc75.langs);
  if (isMobile) {
    gameZoom = 1.5;
  }
  if (typeof partner !== "undefined") {
    if (partner == "poki") {
      siteHide.premiumFeatures = true;
      siteHide.social = true;
      siteHide.outgoingLinks = true;
    } else {
      if (partner == "xiaomi") {
        siteHide.premiumFeatures = true;
        siteHide.social = true;
        siteHide.outgoingLinks = true;
      } else {
        if (partner == 'gd') {
          siteHide.premiumFeatures = true;
          siteHide.social = true;
          siteHide.outgoingLinks = true;
        } else {
          if (partner == "yandex") {
            siteHide.premiumFeatures = true;
            siteHide.social = true;
            siteHide.outgoingLinks = true;
          } else if (partner == "gdsub") {
            siteHide.premiumFeatures = true;
            siteHide.social = true;
            siteHide.outgoingLinks = true;
          }
        }
      }
    }
  }
  hideElements();
  if (pokiEnabled == true) {
    PokiSDK.gameLoadingStart();
  }
  pageLoaded();
  loadCdnImages();
  var _0x5618e7 = new Image();
  tInitLang(_0x1f13da);
  _0x5618e7.src = cdnServer + "images/scan-players-done.png";
  setTimeout(loading, 0x1);
  function _0x49de92(_0x2dde0a) {
    let _0x21e424 = [];
    let _0x5de275 = _0x2dde0a;
    while (_0x5de275) {
      _0x21e424 = _0x21e424.concat(Object.getOwnPropertyNames(_0x5de275));
      _0x5de275 = Object.getPrototypeOf(_0x5de275);
    }
    return _0x21e424;
  }
  let _0x2614db = _0x49de92(game);
  for (const _0x18c4db of _0x2614db) {
    if (typeof game[_0x18c4db] === 'function') {
      Object.defineProperty(game, _0x18c4db, {
        'value': game[_0x18c4db],
        'writable': false,
        'configurable': false,
        'enumerable': true
      });
    }
  }
}
function hideElements() {
  if (siteHide.social) {
    $("[data-tag=\"social\"]").hide();
  }
  if (siteHide.account) {
    $("[data-tag=\"account\"]").hide();
  }
  if (siteHide.outgoingLinks) {
    $("[data-tag=\"outgoing-link\"]").hide();
  }
}
function getCookie(_0x41a5a8) {
  var _0x28e8f9 = _0x41a5a8 + '=';
  var _0x3db449 = document.cookie.split(';');
  for (var _0x817c65 = 0x0; _0x817c65 < _0x3db449.length; _0x817c65++) {
    var _0x332d53 = _0x3db449[_0x817c65];
    while (_0x332d53.charAt(0x0) == " ") {
      _0x332d53 = _0x332d53.substring(0x1, _0x332d53.length);
    }
    if (_0x332d53.indexOf(_0x28e8f9) == 0x0) {
      return _0x332d53.substring(_0x28e8f9.length, _0x332d53.length);
    }
  }
  return null;
}
function loadCdnImages() {
  $("img[data-cdn-load]").each(function () {
    var _0x3c6fcc = $(this).data('cdn-load');
    $(this).attr("src", cdnServer + _0x3c6fcc);
    $(this).removeAttr("data-cdn-load");
    $(this).attr('crossorigin', "anonymous");
  });
  $("[data-cdn-load-bg]").each(function () {
    var _0xb2e4e3 = $(this).data("cdn-load-bg");
    $(this).css('background-image', "url(" + cdnServer + _0xb2e4e3 + ')');
    $(this).removeAttr("data-cdn-load-bg");
    $(this).attr("crossorigin", "anonymous");
  });
}
{
  let urlCheck = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  if (partner == "poki") {
    urlCheck = "https://a.poki.com/prebid/prebid8.16.0.js";
  }
  fetch(urlCheck, {
    'method': 'HEAD',
    'mode': "no-cors",
    'cache': "no-store"
  }).then(_0x20efdb => adblockDisabled = true)["catch"](_0x135468 => adblockDisabled = false);
}