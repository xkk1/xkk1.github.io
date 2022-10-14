// ==UserScript==
// @name         所有网站通用黑暗脚本
// @namespace    https://xkk1.github.io/program/Tampermonkey/#所有网站通用黑暗脚本
// @version      0.0.1
// @description  所有网站通用黑暗脚本，效果可能会很差
// @author       小喾苦
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var 脚本加载时间间隔 = 500; // 单位毫秒，根据自家电脑加载页面时间可自行更改 默认500
    var 脚本最少尝试次数 = 6; // 默认6

    let contentStyle = document.createElement("style");
    // 创建的的元素并不属于document对象，只是创建出来，并未添加到HTML文档中。添加的方式有appendChild或者insertBefore方法
    // 这里我使用appendChild
    contentStyle.innerHTML=`
*{
background-color: #333333!important;
color: #fff!important;
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
             console.log('所有网站通用黑暗脚本：脚本尝试执行次数' + try_times); // alert
             setTimeout(main, 脚本加载时间间隔); // 毫秒后执行main()函数，只执行一次。
         }
    }
    main();
})();