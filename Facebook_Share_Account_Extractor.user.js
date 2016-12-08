// ==UserScript==
// @name        Facebook Share Account Extractor
// @namespace   https://github.com/Yonsh/yonsh-userscripts
// @include     https://m.facebook.com/browse/shares?id=*
// @include     https://www.facebook.com/*
// @version     1.1.3
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

function start() {
    var url = window.location.href;
    if (url.indexOf("https://www.facebook.com") === 0) {
        waitForKeyElements('.UFIShareLink', addExtractLink);
    } else {
        if ($.urlParam('extract')) {
            $('body').html($('#root').html());
            $('body').removeClass();
            var $table = $('<table border="1"></table>');
            var flags = [];
            $('body').prepend($table);
            waitForKeyElements('.async_elem .touchable', function() {setTimeout(function() {$('.async_elem .touchable .primarywrap').click();}, 100);});
            waitForKeyElements('._1uja', function() {
                var $div = $('._1uja').first();
                var $row = $('<tr></tr>');
                $row.append('<td>' + $div.find('span').first().html() + '</td>');
                var s = $div.find('a').attr('href');
                s = 'https://facebook.com' + s.substring(0, s.indexOf('fref=') - 1);
                $row.append('<td><a href="' + s + '">' + s + '</a></td>');
                if (!flags[s]) {
                    flags[s] = true;
                    $table.append($row);
                }
                $div.remove();
            });
        }
    }
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
        return results[1] || 0;
    else
        return 0;
};

function addExtractLink() {
    $shareLinks = $('.UFIShareLink');
    for (var i = 0; i < $shareLinks.length; i++) {
        if ($($shareLinks[i]).siblings().length === 0) {
            var link = $($shareLinks[i]).attr('href').replace("www.facebook.com/shares/view", "m.facebook.com/browse/shares") + '&extract=true';
            $extractLink = $('<a href="' + link + '">(截取)</a>');
            $extractLink.click(function() {window.location = $(this).attr('href'); return false;});
            $($shareLinks[i]).after($extractLink);
        }
    }
}

start();