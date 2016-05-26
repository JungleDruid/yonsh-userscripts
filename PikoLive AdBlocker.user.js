// ==UserScript==
// @name         PikoLive AdBlocker
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://*.pikolive.com/*
// @grant        none
// ==/UserScript==

var videoAds = document.getElementById("VideoAds");
videoAds.parentNode.removeChild(videoAds);