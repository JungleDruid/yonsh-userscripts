// ==UserScript==
// @name         ECPay Testing Environment Auto Fill
// @namespace    https://github.com/Yonsh/yonsh-userscripts
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  // Your code here...
  document.getElementById("warnSubmitPay").value = "CreditPaySubmit";
  document.getElementById("CardNoPart1").value = "4311";
  document.getElementById("CardNoPart2").value = "9522";
  document.getElementById("CardNoPart3").value = "2222";
  document.getElementById("CardNoPart4").value = "2222";
  document.getElementById("CreditMM").value = "12";
  document.getElementById("CreditYY").value = "37";
  document.getElementById("CreditAuth").value = "222";
  document.getElementById("CellPhoneCheck").value = "0912345678";
})();
