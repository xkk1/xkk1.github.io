// ==UserScript==
// @name         程序在线设计平台黑暗模式
// @namespace    https://xkk1.github.io/program/Tampermonkey/#程序在线设计平台黑暗模式
// @version      0.0.1
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
    // 创建的的元素并不属于document对象，只是创建出来，并未添加到HTML文档中。添加的方式有appendChild或者insertBefore方法。
        contentStyle.innerHTML=`
.bg-white{
    color:#F0F0F0;
    background-color:#3d3d3d!important;
}
.body{
     color:#F0F0F0;
     background-color: #3d3d3d;
}
.nav-tabs .nav-link.active
{
    color:#F0F0F0;
}
.nav-tabs .nav-link
{
    border-bottom: .214rem solid transparent;
    color: #afafaf;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    color:#F0F0F0;
    background-color: #505050;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #616461;
    background-clip: border-box;
    border-radius: .125rem;
}
.bg-light {
    background-color: #254920!important;
    color:red;
}
.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #152d16;
    border-radius: .125rem;
}
.table td {
    color:#F0F0F0;
    font-size: 0.85rem;
}
.text-black {
    color: white;
}
.px-2 {
    padding-left: .5rem!important;
    color: #03a9f4;
}
.btn-secondary.custom-file-control:before, .btn.btn-secondary {
    color: #ebedee;
    background-color: transparent;
    border-color: #ccc;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    color: #03a9f4;
}
.custom-file-control:read-only, .form-control:read-only {
    background-image: linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
    color: #ebedee;
}
.alert-info {
    color: #a9ba24;
    background-color: #1e1e1e;
    border-color: #2d2f2f;
}
pre {
    display: block;
    font-size: 87.5%;
    color: #ffffff;
}
*{
background-color: #3d3d3d;
}
`
    try {
     document.head.appendChild(contentStyle)
    document.body.style.backgroundColor="#272822"; // 更改背景
    document.body.style.color="#F0F0F0"; // 更改文字
    document.getElementById("footer").style.backgroundColor="#272822"; // 更改背景
    document.getElementById("left").style.backgroundColor="#272822"; // 更改背景
    document.getElementById("code_form").style.backgroundColor="#272822"; // 更改背景
    }catch(err) {

}
})();