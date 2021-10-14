// ==UserScript==
// @name         高考倒计时
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?domain=baidu.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var myDate = new Date();
    var 当前时间 = myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
    var 高考 = 1654531200; //1654560000;
    // Math.ceil +1      Math.floor
    var 时间差 = 高考 - Math.floor(当前时间 / 1000);
    var 天数 = Math.ceil(时间差 / (60*60*24));
    var 一天秒数 = 时间差 % (60*60*24);
    var 小时 = Math.floor(一天秒数 / (60*60));
    var 分钟 = Math.floor((一天秒数 - 小时*60*60) / 60)
    var 秒 = 一天秒数 % 60
    //console.log(天数);
    // window.alert(时间差);
    console.log("当前时间:"+当前时间);
    console.log("高考    :"+高考);
    console.log("时间差 :"+时间差);
    console.log("天数:"+天数);
    document.getElementsByClassName("title-text c-font-medium c-color-t")[0].innerHTML += '<p style="color:red;font-size:35px;" id="xkk_time">距离高考还有'+天数+"天 "+小时+":"+分钟+":"+秒+"</p>";

    function set_time(){
        var myDate = new Date();
        var 当前时间 = myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
        var 高考 = 1654531200; //1654560000;
        // Math.ceil +1      Math.floor
        var 时间差 = 高考 - Math.floor(当前时间 / 1000);
        var 天数 = Math.ceil(时间差 / (60*60*24));
        var 一天秒数 = 时间差 % (60*60*24);
        var 小时 = Math.floor(一天秒数 / (60*60));
        var 分钟 = Math.floor((一天秒数 - 小时*60*60) / 60)
        var 秒 = 一天秒数 % 60
        //console.log(天数);
        // window.alert(时间差);
        //console.log("当前时间:"+当前时间);
        //console.log("高考    :"+高考);
        //console.log("时间差 :"+时间差);
        //console.log("天数:"+天数);
        var a = document.getElementById("xkk_time");
        a.innerHTML = '距离高考还有'+天数+"天 "+小时+":"+分钟+":"+秒;
        // setInterval(set_time() ,1000*100);
        setTimeout(set_time ,1000);
    }
    set_time();
    //setInterval(set_time() ,1000*100);
    //setInterval(set_time(),1000);
    //window.setTimeout(set_time, 100);
})();