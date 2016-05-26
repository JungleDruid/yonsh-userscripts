// ==UserScript==
// @name       Google to Youtube search
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://www.google.com/search*
// @match      http://www.google.com/search*
// @copyright  2012+, You
// ==/UserScript==

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return null;
  else
    return results[1];
}

function main() {
    var yt = document.getElementById("gb36");
    var s = gup("q");
    yt.href = "http://www.youtube.com/results?search_query=" + s;
}

main();