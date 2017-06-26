// ==UserScript==
// @name        URL in Title
// @namespace   https://github.com/Yonsh/yonsh-userscripts
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

document.title = document.title + ' - ' + window.location.origin;