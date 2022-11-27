// ==UserScript==
// @name         程序设计在线评测平台题目信息获取
// @namespace    https://xkk1.github.io/program/Tampermonkey/#程序设计在线评测平台题目信息获取
// @version      0.0.10
// @description  获取程序设计在线评测平台题目信息的Markdown格式
// @author       小喾苦
// @match        https://icpc.ldu.edu.cn/contests/*/problems/*
// @icon         https://icpc.ldu.edu.cn/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let xkkcontentStyle = document.createElement("style");
    xkkcontentStyle.innerHTML=`.xkkMenu {
        position: fixed;
        right: 0px;
        top: 50px;
        background: #eafed0;
        color: red;
    }`
    document.head.appendChild(xkkcontentStyle);

     let xkkcontentDiv = document.createElement("div");
    xkkcontentDiv.innerHTML=`
<div class="xkkMenu" id="xkkMenu">
      <input type="button" value="复制题目信息(Markdown)" id="xkkcpoybutton" onclick='javascript:xkkcopybutton();' />
      <textarea id="copy_input" style="display: none">我是用来实现复制的</textarea>
<details>
<summary>
脚本作者信息
</summary>
    本脚本由<a href="https://xkk1.github.io/" target="_blank">小喾苦</a>制作<br>
	<a href="https://space.bilibili.com/513689605" target="_blank">小喾苦的个人空间_哔哩哔哩</a><br />

</details>
    <div id="xkkcontent" style="display: none"></div>
</div>
    `
    document.body.appendChild(xkkcontentDiv);

    let xkkcontentJS = document.createElement("script");
    xkkcontentJS.innerHTML=`
    function copyText(text) {
        let copy_input = document.getElementById("copy_input");
        copy_input.style.display="";
        copy_input.value = text; // 修改文本框的内容
        copy_input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        alert("复制成功");
        copy_input.style.display="none";
        }

    function xkkcopybutton(){
        copyText(ProblemText);
    }

    var oranginal="";
    function getTxet(){
        oranginal = document.getElementsByClassName("math_formula")[0].innerHTML;
        oranginal = oranginal.replaceAll("\\\\$","$");
        oranginal = oranginal.replaceAll("<br>","<br>\\n");
        oranginal = oranginal.replaceAll("<\\p>","<\\p>\\n");
        oranginal = oranginal.replaceAll("<h4 class=\\"text-sky\\">","<h4 class=\\"text-sky\\">## ");
        oranginal = oranginal.replaceAll("<h4 class=\\"mt-2 text-sky\\">","<h4 class=\\"mt-2 text-sky\\">## ");
        oranginal = oranginal.replace(/<div class="border-bottom pl-2 bg-light">\\n[\\s]*输入\\n[\\s]*<a href="javascript:" onclick="copy_text\\(\\$\\('#sam_in0'\\)\\)">复制<\\/a>\\n[\\s]* <\\/div>\\n[\\s]*<pre class="m-1" id="sam_in[0-9]+">/g,"### 输入\\n\\n\\\`\\\`\\\`\\n");
        oranginal = oranginal.replace(/<div class="border-top border-bottom pl-2 bg-light">\\n[\\s]*输出\\n[\\s]*<a href="javascript:" onclick="copy_text\\(\\$\\('#sam_out[0-9]+'\\)\\)">复制<\\/a>\\n[\\s]*<\\/div>\\n[\\s]*<pre class="m-1" id="sam_out[0-9]+">/g,"\\n### 输出\\n\\n\\\`\\\`\\\`\\n");
        oranginal = oranginal.replace(/<\\/pre>/g,"\\n\\\`\\\`\\\`");
        //oranginal = oranginal.replaceAll("复制</a>","</a>");
        //oranginal = oranginal.replaceAll("输入","输入\\n\\n\\\`\\\`\\\`\\n\\n");
        //oranginal = oranginal.replaceAll("输出","输出\\n\\n\\\`\\\`\\\`\\n\\n");
        //oranginal = oranginal.replaceAll("</pre>","\\n\\n\\\`\\\`\\\`</pre>");
        console.log(oranginal);
        let xkkcontentdiv = document.getElementById("xkkcontent");
        xkkcontentdiv.innerHTML = oranginal;
        // copyText(xkkcontentdiv.innerText);
        // console.log(xkkcontentdiv.innerText);
        var from = "[题目来源："+window.location.href+"]("+window.location.href+")";
        var ans= document.getElementsByClassName("text-center")[1].innerText.replace(/\\[ 问题 [0-9]*  \\]/g,"").replace(/ \\[ 提交记录 \\]/g,"").replace(/[A-Z] \\([0-9]*\\). /g,"");
        ans = "# " + ans + "\\n\\n---\\n\\n" + xkkcontentdiv.innerText.replaceAll("   ","").replaceAll("  ","").replaceAll(" ##","##").replaceAll("\\n","  \\n"); // .replaceAll("输入\\n","输入\\n\\\`\\\`\\\`")
        return ans.replace(/样例运行正确并不代表程序没有漏洞，判题服务将使用大量数据对你的程序进行评测。[\\s]*[\\n]*[\\s]*[\\n]*/g,"")+"\\n\\n## C++实现\\n\\n\\\`\\\`\\\`cpp\\n\\n\\\`\\\`\\\`\\n\\n---\\n\\n"+from;
    }
    var ProblemText = getTxet();
    var copy_input = document.getElementById("copy_input");
    copy_input.value = ProblemText; // 修改文本框的内容
    // console.log(ProblemText);
    `
    document.head.appendChild(xkkcontentJS);

})();