//获取 URL get 参数
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}
/*
使用实例
url 实例：

http://www.runoob.com/index.php?id=1&image=awesome.jpg
调用 getQueryVariable("id") 返回 1。

调用 getQueryVariable("image") 返回 "awesome.jpg"。
*/

/*
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>

<link rel="stylesheet" href="https://cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css">
<script src="https://cdn.bootcss.com/gitalk/1.5.0/gitalk.min.js"></script>
*/

// 动态加载 js
function loadScript(url, callback) {
  let script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

// 动态加载 CSS
function loadCSS(url) {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}

// 将字符串转换为 UTF-8 编码的字节数组
function encodeUTF8(s) {
  var i, r = [], c, x;
  for (i = 0; i < s.length; i++)
    if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
    else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
    else {
      if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
        c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
          r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
      else r.push(0xE0 + (c >> 12 & 0xF));
      r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
    };
  return r;
}

// 字符串加密成 hex 字符串
function sha1(s) {
  var data = new Uint8Array(encodeUTF8(s))
  var i, j, t;
  var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
  s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
  for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
  s[l - 1] = data.length << 3;
  var w = [], f = [
    function () { return m[1] & m[2] | ~m[1] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; },
    function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; }
  ], rol = function (n, c) { return n << c | n >>> (32 - c); },
    k = [1518500249, 1859775393, -1894007588, -899497514],
    m = [1732584193, -271733879, null, null, -1009589776];
  m[2] = ~m[0], m[3] = ~m[1];
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0);
    for (j = 0; j < 80; j++)
      w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
        t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
        m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
    for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
  };
  t = new DataView(new Uint32Array(m).buffer);
  for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

  var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");
  return hex;
}

// https://github.com/settings/applications/new
const OAuth_apps = {
  "120107.xyz" : { // https://120107.xyz/
    clientID: 'Ov23li2XL98s8NYVR9Dv',
    clientSecret: 'aab3a8b596fc99cf33f719bacae067e404f1ce30',
  },
  "www.120107.xyz" : { // https://www.120107.xyz/
    clientID: 'Ov23liSUDaFga29WQNFV',
    clientSecret: '68091c204d37b077f7bbdf3a3d06ea2742237ec2',
  },
  "vercel.120107.xyz" : { // https://vercel.120107.xyz/
    clientID: 'Ov23lizcRyp5CRalDVxw',
    clientSecret: '1c02634e52e7d267c91d9732b17b5fbfeb50966f',
  },
  "netlify.120107.xyz" : { // https://netlify.120107.xyz/
    clientID: 'Ov23liv6Xgsc7xttrCXy',
    clientSecret: '23de74027e1254e516ec864113df02e551133e8b',
  },
  "gitlab.120107.xyz" : { // https://gitlab.120107.xyz/
    clientID: 'Ov23lifRdppPf44yjtfm',
    clientSecret: 'e0bffdde159c5826042d7e9306354578c93b58d6',
  },
  "edgeone.120107.xyz" : { // https://edgeone.120107.xyz/ Tencent EdgeOne Pages
    clientID: 'Ov23liLOb382nTlWWIhl',
    clientSecret: '4bab640c9106f32da12b138fb906d47d7e5feeab',
  },
  "xkk1.dpdns.org" : { // https://xkk1.dpdns.org/
    clientID: 'Ov23liGZr2y62UVzIEDe',
    clientSecret: 'f6035460d01847aa62c92cf4e42f8b8cb9d6d919',
  },
  "127.0.0.1:5500": { // VSCode Live Server
    clientID: 'Ov23liCbdpmb3h3u0Pn1',
    clientSecret: '33034260d6bc8e66682ca93983415463d37d3178',
  },
  "xkk1.github.io": { // GitHub Pages
    clientID: 'fae9afae38bc6a94ef94',
    clientSecret: 'c9addad8921876026bce94a6402958e783669b8e',
  },
  "xkk1.gitlab.io": { // GitLab Pages
    clientID: 'Ov23liEOMNQGxEL4oWCg',
    clientSecret: 'a8e39f54faea2ba7d3311f58db998c422170b51e',
  },
  "xkk1.pages.dev": { // Cloudflare Pages
    clientID: 'Ov23ligzk47G9PdhaCkT',
    clientSecret: '97f196d35e959ec0dc6825d63ffeb9efa40089d3',
  },
  "xkk1.netlify.app": { // Netlify
    clientID: 'Ov23lifZ5U3l3WB3o7DQ',
    clientSecret: '0baf815e5c805aa34654afb72189468cc8054bac',
  },
  "xkk1.vercel.app": { // Vercel
    clientID: 'Ov23li43ipbTan1BMWVe',
    clientSecret: 'a3f1a5f4f12adb87fd5871a8ff5ee9b7a9efc470',
  },
  "xkk1.pages.jihulab.net": { // JihuLab Pages
    clientID: 'Ov23li6knFpEfeI1biL2',
    clientSecret: 'bd8c34a23d35042805f0cd35110dc649dd84039f',
  },
};

function loadGitalk(idString) {
  idString = idString || decodeURIComponent(window.location.pathname); // 初始化 idString
  // 长度大于 50 ，使用 sha1
  if (idString.length > 50) {
    console.info("Gitalk idString: " + idString);
    idString = sha1(idString);
  }
  // 动态加载 Gitalk
  loadCSS('https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css');
  loadScript('https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', function () {
    // OAuth app
    let OAuth_app = OAuth_apps[window.location.host];
    if (!OAuth_app) {
      alert(`未找到网站 ${window.location.host} OAuth app 配置，无法登录评论，请联系站长添加。`);
      OAuth_app = OAuth_apps["xkk1.github.io"]; // 默认使用 GitHub OAuth app
    }
    var gitalk = new Gitalk({
      id: idString, // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
      clientID: OAuth_app["clientID"], // GitHub Application Client ID
      clientSecret: OAuth_app["clientSecret"], // GitHub Application Client Secret
      repo: 'xkk1.github.io', // 存放评论的仓库
      owner: 'xkk1', // 仓库的创建者，
      admin: ['xkk1'], // 如果仓库有多个人可以操作，那么在这里以数组形式写出
      labels: ['Gitalk'], //GitHub issue 的标签。
      perPage: 20, //每次加载的数据大小，最多 100。
      language: 'zh-CN', //设置语言，支持 [en, zh-CN, zh-TW, es-ES, fr, ru, de, pl, ko]
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    })
    gitalk.render('gitalk-container')
    console.info("加载 Gitalk，id: " + idString);
  });
}