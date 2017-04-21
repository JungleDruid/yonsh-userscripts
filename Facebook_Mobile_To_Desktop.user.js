// ==UserScript==
// @name         Facebook Mobile to Desktop
// @namespace    https://github.com/Yonsh/yonsh-userscripts
// @version      0.11
// @description  add a desktop link on the top of the mobile facebook page
// @author       Yonsh Lin
// @match        https://m.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var div = document.createElement("div");
    var link = document.createElement("a");
    div.setAttribute("style", "text-align: center; background-color: black");
    div.appendChild(link);
    link.appendChild(document.createTextNode("Desktop Version"));
    link.setAttribute("href", window.location.href.replace("m", "www").replace("story.php", "permalink.php"));
    link.setAttribute("style", "color: white; font-weight: bold");
    
    var body = document.body;
    body.insertBefore(div, body.firstChild);
})();
