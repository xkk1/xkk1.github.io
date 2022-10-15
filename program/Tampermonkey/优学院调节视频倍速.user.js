// ==UserScript==
// @name         优学院调节视频倍速
// @namespace    https://xkk1.github.io/program/Tampermonkey/#优学院调节视频倍速
// @version      0.0.1
// @description  优学院调节视频倍速，须在视频播放后点击
// @author       小喾苦
// @match        https://ua.ulearning.cn/learnCourse/learnCourse.html*
// @icon         https://icpc.ldu.edu.cn/portal/favicon.ico
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
   要在视频开始播放后使用！！
      <br />
      <input type="button" value="尝试调节倍速" onclick='javascript:for(var i=0;i<document.getElementsByClassName("custom-video").length;i++){document.getElementsByClassName("custom-video")[i].playbackRate=document.getElementById("inputnum").value;}' />
      <br>
    倍速选择:<br />
    <input type="number" min="0" step="1" value="10" id="inputnum">
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
    
})();