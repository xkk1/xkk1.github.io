// ==UserScript==
// @name         找色差作弊
// @namespace    https://xkk1.github.io/?Tempermonley=找色差作弊
// @version      0.0.5
// @description  try to take over the world!
// @author       小喾苦
// @match        https://www.zhaosecha.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
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