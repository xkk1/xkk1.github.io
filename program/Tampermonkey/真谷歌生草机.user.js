// ==UserScript==
// @name         真谷歌生草机
// @namespace    https://xkk1.github.io/program/Tampermonkey/#真谷歌生草机
// @version      0.0.4
// @description   更改谷歌翻译网页上的文字
// @author       小喾苦
// @match        https://translate.google.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var 标题 = "谷歌生草机";
    var 左上翻译改为 = "生草机";
    var 主菜单中翻译改为 = "生草机";
    var 主菜单中关于_Google_翻译改为 = "关于 Google 生草机";

    // main
    document.title = 标题;
    var gb_5d_gb_Vc = document.getElementsByClassName("gb_5d gb_Vc");
    // gb_5d_gb_Vc[1].innerHTML = "<span class=\"gb_5d gb_Vc\">" + 左上翻译改为 + "</span>";
    gb_5d_gb_Vc[0].textContent = 主菜单中翻译改为;
    gb_5d_gb_Vc[1].textContent = 左上翻译改为;
    document.getElementsByClassName("yJWPX")[0].innerText =主菜单中关于_Google_翻译改为; //'关于 Google 翻译'
})();