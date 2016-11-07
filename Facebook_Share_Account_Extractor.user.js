// ==UserScript==
// @name        Facebook Share Account Extractor
// @namespace   https://github.com/Yonsh/yonsh-userscripts
// @include     https://m.facebook.com/shares/view?id=*
// @version     1.0.0
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var $btn = $('<a href="#">抓取分享帳號</a>');
$('body').prepend($btn);
$btn.click(function() {
  var $table = $('<table border="1"></table>');
  $names = $('#m_story_permalink_view div div div div h3 strong a');
  var flags = [];
  for (var i = 0; i < $names.length; i++) {
    var $row = $('<tr></tr>');
    $row.append('<td>' + $($names[i]).html() + '</td>');
    var s = $($names[i]).attr('href');
    s = 'http://facebook.com' + s.substring(0, s.indexOf('fref=nf&') - 1);
    $row.append('<td><a href="' + s + '">' + s + '</a></td>');
    if (!flags[s]) {
      flags[s] = true;
      $table.append($row);
    }
  }
  $('body').html($table);
});