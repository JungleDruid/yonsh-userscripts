// ==UserScript==
// @name         TosGame Cheater
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.tosgame.com/play.php*
// @grant        GM_getValue
// ==/UserScript==

(function() {

    var answered = 0;

    function main() {
        if (document.getElementById("start").style.display == "none") {
            console.log("Script started.")
            var answer = unsafeWindow.answer;
            var ans = -1;
            //console.log(ans);
            var choice = unsafeWindow.questions.q_main[answered].choice;
            //console.log(unsafeWindow.questions.q_main[0].choice[answered]);

            for (var i = 0; i < choice.length; i++) {
                if (choice[i] == answer[answered]) {
                    ans = i;
                    break;
                }
            }

            console.log(ans);
            document.getElementById("choice-" + ans).click();
            answered++;
        }
        setTimeout(main, 1100);
    }


    setTimeout(main, 1100);
}())