// ==UserScript==
// @name         程序在线设计平台黑暗模式
// @namespace    https://xkk1.github.io/program/Tampermonkey/#程序在线设计平台黑暗模式
// @version      0.1.1
// @description  程序在线设计平台黑暗模式
// @author       小喾苦
// @match        https://icpc.ldu.edu.cn/*
// @icon         https://icpc.ldu.edu.cn/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let contentStyle = document.createElement("style");
    // 创建的的元素并不属于document对象，只是创建出来，并未添加到HTML文档中。添加的方式有appendChild或者insertBefore方法
    // 这里我使用appendChild
    contentStyle.innerHTML=`
/*上栏背景*/
nav.navbar {
    background-color: #2c2c2c!important;
}
/*左上角“程序设计在线评测平台”*/
a.navbar-brand {
    color: #eee!important;
}
/*页面部分黑字*/
.text-nowrap {
    color: #777!important;
}
/*上栏下拉字背景色*/
.dropdown-menu {
    background-color: #303030;
}
/*上栏下拉字颜色*/
a.dropdown-item {
    color: #aaa;
}
/*左上角语言和账号*/
a#navbarDropdown {
    color: #eee;
}
/*题目页面容器背景颜色*/
div#container {
    background-color: #2c2c2c;
}
/*概览、提交记录、榜单*/
a.nav-link {
    color: #ccc!important;
}
/*题目标题文字颜色*/
h4.text-center {
    color: #eee;
}
/*正文、题目等*/
.p-3 {
    color: #eee!important;
}
/*C/C++/随堂/2022级第4章例题  背景*/
ul.breadcrumb {
    background-color: #363636;
}
/*语言:   上传文件:  主题:   文字颜色*/
span.mr-2 {
    color: #eee;
}
/*题目信息*/
.alert-info {
    color: #cdeefd;
    background-color: #02587f!important;
}
/*祝贺! 你解决了这个问题, 因此我们邀请你为本题进行标记！注意，一经提交不可修改.*/
.alert-success {
    color: #dbefdc;
    background-color: #285b2a;
}
/*样例颜色*/
pre.m-1 {
    color: #e5e5e5;
}
/*输入输出框*/
.bg-light {
    background-color: #3b3b3b!important;
}
/*标签收集*/
h4.m-0 {
    color: #cdeefd;
    background-color: #02587f;
}
/*
div.p-2 {
    background-color: #2b2a2a;
}
*/
/*语言与主题选择*/
select.px-3 {
    background-color: #444;
    color: #dedede;
}



/*主页*/
/*主页页面容器背景颜色*/
div.container {
    background-color: #2c2c2c;
}
html,body {
    background-color: #2c2c2c;
    height: auto;
}
/*页脚*/
div#footer {
    background-color: #2c2c2c;
    color: #eee;
}
/*主页 框 提交记录 上周 本周*/
div.card {
    background-color: #333;
}
/*公告板内容*/
a.pl-1.text-black {
    color: #eee;
}
/*最近30天*/
select#past-select {
    background-color: #444;
    color: #dedede;
}
/*提交记录  Top 10 上周  Top 10 本周*/
h3.text-center.mb-0 {
    color: #ccc;
}
/*表格*/
tbody {
    color: #eee;
}
/*榜单、用户、显示*/
th.border-top-0 {
    color: #ccc!important;
}
/*静态框*/
div.modal-content {
    color: #eee;
    background-color: #333;
}
/*提示框*/
.notiflix-report-content {
    background-color: #444!important;
}
h5.notiflix-report-title {
    color: white!important;
}
p.notiflix-report-message {
    color: white!important;
}


/*排名*/
/*黑字*/
td.border.text-center {
    color: black;
}
/*橙色选中*/
.table-hover tbody tr:hover {
    color: orange;
}


/*评测*/
.my-container {
    background-color: #222!important;
}
th {
    color: #eee!important;
}
/*所有结果下拉框*/
select.px-2.form-control {
    background-color: #333;
}


/*题库*/
/*题库字  隐藏的题目*/
div.overflow-hidden {
    color: #eee;
}
/*查找*/
button.btn.border {
    color: #eee;
}
/*竞赛字*/
a.text-black {
    color: #ccc;
}
/*已结束*/
a.btn.border {
    color: #eee;
}
/*小字*/
ul.d-flex.flex-wrap.list-unstyled {
    color: #bbb!important;
}
/*深入竞赛题目*/
h3.text-center {
    color: #999;
}
/*竞赛剩余时间*/
font#remain_area {
    color: white;
}
/*竞赛信息*/
.my-container {
    color: #bbb;
}


/*竞赛金银铜*/
font.px-1 {
    color: black;
}
/*实时更新开关*/
small {
    background-color: #333!important;
}


/*失败问题隐藏*/
.alert-danger {
    color: #fdd9d7!important;
    background-color: #7f231c!important;
}


canvas {
    background-color: #9b9696;
}
`
    document.head.appendChild(contentStyle);

})();
