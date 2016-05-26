// ==UserScript==
// @name        Sinica Facility Reservation Helper
// @namespace   TSR
// @include     http://140.109.20.126/servlet/Member/ReservationInfo/ReservationApply*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// ==/UserScript==

(function(){
  function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
      if(params.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

  function sendReservation() {
    var resDay = document.getElementById("resDay");
    var resTimeFrom = document.getElementById("resTimeFrom");
    var resTimeTo = document.getElementById("resTimeTo");
    /*
    post('/servlet/Member/ReservationInfo/ReservationApply', {FunctionName: 'ReservationInput',
                                                              applyFacilityId: 2,
                                                              actionFacilityId: 2,
                                                              reservationDay: resDay.value,
                                                              timeSectionFrom: resTimeFrom.value,
                                                              timeSectionTo: resTimeTo.value,
                                                              colorFor: 1,
                                                              queryStartDate: document.getElementsByName("queryStartDate")[0].value,
                                                              queryEndDate: document.getElementsByName("queryEndDate")[0].value,
                                                              save: '送出'});
    */
    var startDate = new Date(resDay.value);
    var endDate = new Date(resDay.value);
    if (!isNaN(startDate)) {
      startDate.setDate(startDate.getDate() - 7);
      endDate.setDate(endDate.getDate() + 7);
    }
    post('/servlet/Member/ReservationInfo/ReservationApply', {FunctionName: 'ReservationStatus',
                                                              PageAction: 'query',
                                                              applyFacilityId: -1,
                                                              actionFacilityGroupId: 3,
                                                              queryReservationUserId: -1,
                                                              queryTimeSectionId: -1,
                                                              queryStartDate: getDate(startDate),
                                                              queryEndDate: getDate(endDate),
                                                              actionFacilityId: 2,
                                                              tmpQueryStartDate: getDate(startDate),
                                                              tmpQueryEndDate: getDate(endDate)
                                                             });
    GM_setValue("autoReservation", true);
    GM_setValue("reservationDay", getDate(new Date(resDay.value)));
    GM_setValue("timeSectionFrom", resTimeFrom.value);
    GM_setValue("timeSectionTo", resTimeTo.value);
  }

  function getDate(date) {
    return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
  }

  function checkTime()
  {
    var resDay = document.getElementById("resDay");
    if (resDay.value != "") {
      var resDate = new Date(resDay.value);
      if (!isNaN(resDate)) {
        resDate.setDate(resDate.getDate() - 7);
        document.getElementById("time").innerHTML = '將於 ' + getDate(resDate) + ' 自動預約';

        var chkAutoSend = document.getElementById("chkAutoSend");
        if (chkAutoSend.checked && unsafeWindow.now >= resDate) {
          //setTimeout(sendReservation, 3000);
          sendReservation();
          return;
        }
      } else {
        document.getElementById("time").innerHTML = '';
      }
    }
    setTimeout(checkTime, 100);
  }

  function checkError()
  {
    var resDay = document.getElementById("resDay");
    var resTimeFrom = document.getElementById("resTimeFrom");
    var resTimeTo = document.getElementById("resTimeTo");

    var errDate = document.getElementById("errDate");
    var errTime = document.getElementById("errTime");

    var tmpToday = new Date(unsafeWindow.now);
    tmpToday.setHours(0, 0, 0, 0);

    if (resDay.value == "")
      errDate.innerHTML = "請選擇日期";
    else {
      d = new Date(resDay.value);
      if (isNaN(d) || d < tmpToday)
        errDate.innerHTML = "日期錯誤";
      else
        errDate.innerHTML = "";
    }

    if (resTimeFrom.value == -1 || resTimeTo.value == -1)
      errTime.innerHTML = "請選擇時間";
    else if (resTimeTo.value - resTimeFrom.value > 1 || resTimeTo.value - resTimeFrom.value < 0)
      errTime.innerHTML = "時間錯誤";
    else
      errTime.innerHTML = "";

    var btnSend = document.getElementById("btnSend");
    var chkAutoSend = document.getElementById("chkAutoSend");

    if (errDate.innerHTML == "" && errTime.innerHTML == "") {
      return true;
    } else {
      return false;
    }
  }

  function showTable() {
    var tb = document.getElementById("main");
    tb.innerHTML = 
      '<center><div>' +
      '<span style="color:blue;font-weight:bold">籃排球場預約表</span>' +
      '<table width="95%" border="0" cellpadding="0" cellspacing="0" bgcolor="#666666" class="collapse">' + 
      '<tr> <td height="20" align="center" bgcolor="#CCCCCC" class="form_title gray" style="width: 15%; text-align: right;"> 預約日期 :&nbsp; </td>' + 
      '<td class="gray" bgColor="white"> &nbsp;<input style="width: 120px;" id="resDay" onfocus="showCalendarControl(this);" value="" type="text"> <span id="errDate" style="color:red" /></td> </tr>' + 
      '<tr> <td height="20" align="center" bgcolor="#CCCCCC" class="form_title gray" style="text-align: right;"> 預約時段 :&nbsp; </td>' + 
      '<td class="gray" bgColor="white"> &nbsp;從: <select id="resTimeFrom"> <option value="-1">請選擇</option> <option value="2" >06:00</option> <option value="3" >07:00</option> <option value="4" >08:00</option> <option value="5" >09:00</option> <option value="6" >10:00</option> <option value="7" >11:00</option> <option value="8" >12:00</option> <option value="9" >13:00</option> <option value="10" >14:00</option> <option value="11" >15:00</option> <option value="12" >16:00</option> <option value="13" >17:00</option> <option value="14" >18:00</option> <option value="15" >19:00</option> <option value="16" >20:00</option> <option value="17" >21:00</option> </select> &nbsp;' + 
      '到: <select id="resTimeTo"> <option value="-1">請選擇</option> <option value="2" >07:00</option> <option value="3" >08:00</option> <option value="4" >09:00</option> <option value="5" >10:00</option> <option value="6" >11:00</option> <option value="7" >12:00</option> <option value="8" >13:00</option> <option value="9" >14:00</option> <option value="10" >15:00</option> <option value="11" >16:00</option> <option value="12" >17:00</option> <option value="13" >18:00</option> <option value="14" >19:00</option> <option value="15" >20:00</option> <option value="16" >21:00</option> <option value="17" >22:00</option> </select> <span id="errTime" style="color:red" /> </td> </tr> </table>' +
      //'<span><input style="font-weight:bold" id="btnSend" type="button" value="手動預約" /></span><br/>' +
      '<span style="color:green;font-weight:bold"><input id="chkAutoSend" type="checkbox" />自動預約</span>' +
      '<br/><span id="time" />' + '</div></center>' +
      tb.innerHTML;

    /*
    var btnSend = document.getElementById("btnSend");
    btnSend.onclick = function() {
      if (checkError())
        sendReservation();
    }
    */


    var chkAutoSend = document.getElementById("chkAutoSend");
    chkAutoSend.onchange = function() {
      var resDay = document.getElementById("resDay");
      var resTimeFrom = document.getElementById("resTimeFrom");
      var resTimeTo = document.getElementById("resTimeTo");

      if (!checkError())
        chkAutoSend.checked = false;

      if (chkAutoSend.checked) {
        resDay.disabled = true;
        resTimeFrom.disabled = true;
        resTimeTo.disabled = true;
      } else {
        resDay.disabled = false;
        resTimeFrom.disabled = false;
        resTimeTo.disabled = false;
      }
    }
  }

  function main() {
    if (GM_getValue("autoReservation")) {
      if (document.getElementsByName("reservationDay")[0].value == "") {
        var inputs = document.getElementsByTagName("input");
        for (i of inputs) {
          if (i.getAttribute("onclick") == "setApplyData(2, '" + GM_getValue("reservationDay") + "');") {
            i.click();
            return;
          }
        }
      } else {
        GM_deleteValue("autoReservation");

        document.getElementsByName("timeSectionFrom")[0].value = GM_getValue("timeSectionFrom");
        document.getElementsByName("timeSectionTo")[0].value = GM_getValue("timeSectionTo");
        
        var btnSave = document.getElementsByName("save")[0];
        btnSave.setAttribute("onclick", "");
        btnSave.click();
      }
    } else if (document.getElementsByName("actionFacilityGroupId")[0].value == 3) {
      showTable();

      checkTime();
    }
  }

  main();
})();