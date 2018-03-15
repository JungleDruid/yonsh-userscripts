// ==UserScript==
// @name         Kingcar Event Form Filler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Form filler
// @author       Yonsh
// @match        http://kingcar.org.tw/civicrm/event/register?*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function fillForm(id) {
    document.getElementById('email-5').value = 'aaa@bbb.com';
    document.getElementById('group[2]').value = '0';
    document.getElementById('group[2]').removeAttribute('checked');
    document
      .getElementById('civicrm_qfid_tong_yi_2')
      .setAttribute('checked', 'checked');
    document.getElementById('state_province-Primary').value = '4860';
    document.getElementsByName('_city-Primary')[0].value = '板橋區';
    document.getElementById('postal_code-Primary').value = '220';
    document.getElementById('street_address-Primary').value = '小路5號';
    document.getElementById('phone-Primary-2').value = '0912-345678';
    document.getElementById('note').value = '同組人：';
    switch (id) {
      case 0:
        document.getElementById('last_name').value = '王';
        document.getElementById('first_name').value = '大明';
        document.getElementById('legal_identifier').value = 'A123456789';
        document.getElementById('birth_date').value = '1987-06-05';
        break;
      case 1:
        document.getElementById('last_name').value = '王';
        document.getElementById('first_name').value = '大明';
        document.getElementById('legal_identifier').value = 'A123456789';
        document.getElementById('birth_date').value = '1987-06-05';
        break;
      case 2:
        document.getElementById('last_name').value = '王';
        document.getElementById('first_name').value = '大明';
        document.getElementById('legal_identifier').value = 'A123456789';
        document.getElementById('birth_date').value = '1987-06-05';
        break;
      case 3:
        document.getElementById('last_name').value = '王';
        document.getElementById('first_name').value = '大明';
        document.getElementById('legal_identifier').value = 'A123456789';
        document.getElementById('birth_date').value = '1987-06-05';
        break;
    }
  }

  var div = document.createElement('div');
  var link = document.createElement('button');
  div.appendChild(link);
  link.appendChild(document.createTextNode(0));
  link.onclick = () => {
    fillForm(0);
    return false;
  };
  link = document.createElement('button');
  div.appendChild(link);
  link.appendChild(document.createTextNode(1));
  link.onclick = () => {
    fillForm(1);
    return false;
  };
  link = document.createElement('button');
  div.appendChild(link);
  link.appendChild(document.createTextNode(2));
  link.onclick = () => {
    fillForm(2);
    return false;
  };
  link = document.createElement('button');
  div.appendChild(link);
  link.appendChild(document.createTextNode(3));
  link.onclick = () => {
    fillForm(3);
    return false;
  };

  var place = document.getElementById('wizard-steps');
  place.insertBefore(div, place.firstChild);
})();
