// ==UserScript==
// @name         优学院夜间模式
// @namespace    https://xkk1.github.io/program/Tampermonkey/#优学院夜间模式
// @version      0.0.1
// @description  优学院夜间模式
// @author       小喾苦
// @match        https://www.ulearning.cn/*
// @match        https://ua.ulearning.cn/*
// @match        https://courseweb.ulearning.cn/*
// @icon         https://icpc.ldu.edu.cn/portal/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var 脚本加载时间间隔 = 500; // 单位毫秒，根据自家电脑加载B站播放页时间可自行更改 默认500
    var 脚本最少尝试次数 = 6; // 默认6

    let contentStyle = document.createElement("style");
    // 创建的的元素并不属于document对象，只是创建出来，并未添加到HTML文档中。添加的方式有appendChild或者insertBefore方法
    // 这里我使用appendChild
    contentStyle.innerHTML=`
.index-page .bg-white {
    background-color: #242424;
}
.portal-page .course-category-wrapper .entrance-wra {
    background-color: #242424;
    border: 1px solid #000000;
}
.portal-page .course-category-wrapper .category-item a .name {
    color: #fff;
}
body, html {
    color: #ff7100;
}
.good-textbook.content-container {
    background-color: #242424;
}
.index-page .index-header {
    background-color: #202124;
}
.index-page .index-header .menu-item {
    color: #c4baba;
}
[dir] body {
    background-color: #242424;
}
.chapter-item {
    background-color: #424242;
}
.operating-area {
    background-color: #333333;
}
/*
.middle-text {
    background-color: #333333;
}
*/
[dir] .page-control-area .operating-area {
    border-top: 1px solid #111;
    background-color: #333333;
}
[dir] .cursor.active {
    background-color: #000000;
}
.page-control-area .page-title {
    color: #2928ff;
}
.course-page .content-container {
    background-color: #333333;
}
.course-page.guide-in {
    background-color: #242424;
}
.course-nav-menu.pull-left {
    background-color: #333333;
}
.course-page .course-body .course-nav-menu.pull-left .tab-link {
    color: #f00;
}
.course-content-area.pull-left {
    background-color: #242424;
}
html[dir] .course-textbook-page .directory-table td {
    background-color: #5e5e5e;
}
html[dir] .button-red-hollow {
    background-color: #010101;
}
.portal-page .course-category-wrapper .category-item a .name {
    color: #f00;
}
.portal-page .course-category-wrapper .category-item {
    background-color: #1b1b1b;
}
`
    function change(){
        document.head.appendChild(contentStyle);
    }
    var try_times = 0;
    function main(){
         if ( try_times < 脚本最少尝试次数){ // document.getElementsByClassName("like")[0].innerHTML != '<\!----><\!----><\!----><\!----><i class="van-icon-videodetails_like"></i>' + 点赞数 + '\n    ' ||
              // alert(document.getElementsByClassName("like")[0].innerHTML);
             change();
             try_times++;
             console.log('优学院夜间模式：脚本尝试执行次数' + try_times); // alert
             setTimeout(main, 脚本加载时间间隔); // 毫秒后执行main()函数，只执行一次。
         }
    }
    main()

})();
