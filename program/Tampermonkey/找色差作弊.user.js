// ==UserScript==
// @name         找色差作弊
// @namespace    https://xkk1.github.io/program/Tampermonkey/#找色差作弊
// @version      0.0.7
// @description  https://www.zhaosecha.com/这个找色差游戏的作弊脚本，妈妈再也不怕我分不清颜色了
// @author       小喾苦
// @match        https://www.zhaosecha.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL https://xkk1.github.io/program/Tampermonkey/%E6%89%BE%E8%89%B2%E5%B7%AE%E4%BD%9C%E5%BC%8A.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    /*
    document.getElementsByClassName("time")[0].outerHTML = `<span class="time" onclick="javascript:Game.time += 10;"></span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time += 10;">+10s</span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time -= 10;">-10s</span>
`;*/
    document.getElementsByClassName("btn btn-pause")[0].outerHTML = `
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.nextLv();">下一关</span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time += 20;">+20s</span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time -= 20;">-20s</span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time = 0;">0s</span>
<span style="float:right;margin-right:10px;background: #FCAD26;color: #fff;border-radius: 20px;" onclick="javascript:Game.time = 99999;">99999s</span>
`;
    // document.getElementsByClassName("time")[0].onclick="add_time()";

})();
