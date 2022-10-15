// ==UserScript==
// @name         优学院调节视频倍速
// @namespace    https://xkk1.github.io/program/Tampermonkey/#优学院调节视频倍速
// @version      0.0.2
// @description  优学院调节视频倍速，须在视频播放后点击
// @author       小喾苦
// @match        https://ua.ulearning.cn/learnCourse/learnCourse.html*
// @icon         https://ua.ulearning.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let xkkcontentStyle = document.createElement("style");
    xkkcontentStyle.innerHTML=`.xkkgoHomePage {
        position: fixed;
        right: 0px;
        top: 100px;
        background: #eafed0;
    `
    document.head.appendChild(xkkcontentStyle);

    let xkkcontentDiv = document.createElement("div");
    xkkcontentDiv.innerHTML=`
<div class="xkkgoHomePage">
   视频开始播放后才可使用
      <br />
      <div  id="xkkchdiv" style="display:none">
          <input type="button" value="手动尝试调节倍速" onclick='javascript:xkkchangespeed();' />
      </div>
      <input type="button" value="自动尝试调节倍速中..." id="xkkauto" onclick='javascript:xkkchauto();' />
      <br>
    倍速选择:<br />
    <input type="number" min="0.1" max="16.0" step="0.1" value="16.0" id="inputnum">
    <br />

<details>
<summary>
<b style="color:red">☞使用本脚本后果自负</b>
</summary>
    本脚本由<a href="https://xkk1.github.io/" target="_blank">小喾苦</a>制作<br>
	<a href="https://space.bilibili.com/513689605" target="_blank">小喾苦的个人空间_哔哩哔哩</a>
</details>
</div>
    `
    document.body.appendChild(xkkcontentDiv);

    let xkkcontentJS = document.createElement("script");
    xkkcontentJS.innerHTML=`
    function xkkchangespeed(){
        for(var i=0;i<document.getElementsByClassName("custom-video").length;i++){
            document.getElementsByClassName("custom-video")[i].playbackRate=document.getElementById("inputnum").value;
        }
    }
    var xkkifauto = document.getElementById("xkkauto");
    var xkkchdiv = document.getElementById("xkkchdiv");
    var 脚本尝试时间间隔 = 500; // 单位毫秒
    var 开启自动尝试 = true;
    var try_times =0;
    function xkkmain(){
         if (开启自动尝试){
             xkkchangespeed();
             try_times++;
             console.log('优学院调节视频倍速：脚本自动尝试执行次数' + try_times);
             setTimeout(xkkmain, 脚本尝试时间间隔);
         }
    }
    xkkmain();
    function xkkchauto(){
        if(xkkifauto.value=="自动尝试调节倍速中..."){
            开启自动尝试 = false;
            xkkchdiv.style.display="";
            xkkifauto.value="已暂停自动尝试调节倍速";
        }else{
            开启自动尝试 = true;
            xkkchdiv.style.display="none";
            xkkifauto.value="自动尝试调节倍速中...";
            xkkmain();
        }
    }
    `
    document.head.appendChild(xkkcontentJS);


    
})();
