// ==UserScript==
// @name         删除百度侧边栏
// @namespace    https://xkk1.github.io/program/Tampermonkey/#删除百度侧边栏
// @version      0.0.1
// @description  删除百度侧边栏，修复“AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列”的bug
// @author       小喾苦
// @match        https://www.baidu.com/s*
// @icon         https://xkk1.github.io/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var 脚本加载时间间隔 = 500; // 单位毫秒，根据自家电脑加载B站播放页时间可自行更改 默认500
    var 脚本最少尝试次数 = 10; // 默认10
    // main
    var try_times = 0;
    function change(){
        try_times += 1;
        document.getElementsByClassName("cr-offset")[0].innerHTML="";
        console.log('删除百度侧边栏：脚本尝试执行次数' + try_times); // alert
    }
    function main(){
         if ( try_times < 脚本最少尝试次数){ // document.getElementsByClassName("like")[0].innerHTML != '<\!----><\!----><\!----><\!----><i class="van-icon-videodetails_like"></i>' + 点赞数 + '\n    ' ||
              // alert(document.getElementsByClassName("like")[0].innerHTML);
             change();
             setTimeout(main, 脚本加载时间间隔); // 毫秒后执行main()函数，只执行一次。
         }
    }
    main()
})();