// ==UserScript==
// @name         真谷歌生草机
// @namespace    https://xkk1.github.io/program/Tampermonkey/#真谷歌生草机
// @version      0.0.5
// @description   更改谷歌翻译网页上的文字 https://translate.google.cn/
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
    try{
        var gb_5d_gb_Vc = document.getElementsByClassName("gb_4d gb_1c"); // 它竟然变了，原来是“gb_5d gb_Vc”
        gb_5d_gb_Vc[0].textContent = 主菜单中翻译改为;
        gb_5d_gb_Vc[1].textContent = 左上翻译改为;
        document.getElementsByClassName("yJWPX")[0].innerText =主菜单中关于_Google_翻译改为; //'关于 Google 翻译'
    }catch{
        alert("来自油猴脚本：真谷歌生草机\n谷歌翻译已更新，本脚本失效!\n请联系原作者发布新版脚本\n哔哩哔哩：小喾苦   UID513689605\nQQ：3434623263");
    }
})();
