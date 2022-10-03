// ==UserScript==
// @name         程序在线设计平台黑暗模式
// @namespace    https://xkk1.github.io/program/Tampermonkey/#程序在线设计平台黑暗模式
// @version      0.0.3
// @description  程序在线设计平台黑暗模式
// @author       小喾苦
// @match        https://icpc.ldu.edu.cn/*
// @icon         https://icpc.ldu.edu.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let contentStyle = document.createElement("style");
    // 创建的的元素并不属于document对象，只是创建出来，并未添加到HTML文档中。添加的方式有appendChild或者insertBefore方法
    // 这里我使用appendChild
    contentStyle.innerHTML=`
.bg-white {
    color:#F0F0F0;
    background-color:#3d3d3d!important;
}
.body {
     color:#F0F0F0;
     background-color: #3d3d3d;
}
.nav-tabs .nav-link.active {
    color:#F0F0F0;
}
.nav-tabs .nav-link {
    color: #afafaf;
}
.container {
    color:#F0F0F0;
    background-color: #505050;
}
.card {
    background-color: #616461;
}
.bg-light {
    background-color: #515151!important;
    color: white;
}
a {
    color: #6df74d;
} a:hover {
    color: #3aff00;
}
.p-2 {
    color: #ffffff!important;
    background-color: #3f3f3f!important;
}
.breadcrumb {
    background-color: #2f2d2d;
}
.table td {
    color:#F0F0F0;
}
.text-black {
    color: white;
}
.px-2 {
    color: #03a9f4;
}
.px-3 {
    color: #03a9f4;
}
.btn-secondary.custom-file-control:before, .btn.btn-secondary {
    color: #ebedee;
    border-color: #ccc;
}
li {
    color: #03a9f4;
}
.custom-file-control:read-only, .form-control:read-only {
    color: #ebedee;
}
.alert-info {
    color: #2fff0a;
    background-color: #2d2f2f;;
    border-color: #2d2f2f;
}
pre {
    display: block;
    color: #ffffff;
}
i.fa.fa-list {
    color: #ffffff;
}
.fa {
    color: #f0f0f0;
}
body {
    color:#F0F0F0;
    background-color:#272822;
}
#footer {
    background-color:#272822;
}
#left {
    background-color:#272822;
}
#code_form {
    background-color:#272822;
}
.dropdown-toggle {
    color: #ffffff!important;
}
.judge-result-4 {
    color: lime;
}
.table thead th {
    color: rgb(255 255 255 / 54%);
}
.mt-2, .my-2 {
    color: #ffffff;
}
.btn.border {
    color: #ffffff;
}
div{
    background-color: #3d3d3d8c;
}
select#lang_select {
    background-color: #565454;
}
select#theme_select {
    background-color: #565454;
}
.alert {
    background-color: #595858;
    color: #04d504;
}
.dropdown-item {
    background-color: #4a4c4a;
    color: #fff;
}
`
    document.head.appendChild(contentStyle)

})();
