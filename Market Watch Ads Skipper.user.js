// ==UserScript==
// @name       Market Watch Ads Skipper
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://*.marketwatch.com/*
// @grant      GM_addStyle
// @copyright  2014, Yonsh
// ==/UserScript==

var avatar = document.getElementById("avatar");
avatar.parentNode.removeChild(avatar);
var blanket = document.getElementById("blanket");
blanket.className = "";