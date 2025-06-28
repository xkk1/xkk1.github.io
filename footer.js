function getWebsitesHTML() {
  const websites = {
    "主站": "https://120107.xyz/",
    "副站": "https://xkk1.dpdns.org/",
    "线路1": "https://www.120107.xyz/",
    "线路2": "https://vercel.120107.xyz/",
    "线路3": "https://netlify.120107.xyz/",
    "线路4": "https://gitlab.120107.xyz/",
    "GitHub Pages": "https://xkk1.github.io/",
    "GitLab Pages": "https://xkk1.gitlab.io/",
    "Cloudflare Pages": "https://xkk1.pages.dev/",
    "Netlify": "https://xkk1.netlify.app/",
    "Vercel": "https://xkk1.vercel.app/",
    "JihuLab Pages": "https://xkk1.pages.jihulab.net/"
  }
  // 创建站点链接 HTML
  let siteLinks = Object.entries(websites).map(([websiteName, websiteUrl]) => {
    let url = websiteUrl.substring(0, websiteUrl.length - 1); // 去除末尾的斜杠
    url += window.location.pathname + window.location.search + window.location.hash; // 添加当前页面的路径
    return `<a href="${url}" target="_blank">${websiteName}</a>`;
  }).join(' | ');
  return siteLinks;
}

// 不蒜子 - 极简网页计数器
function getBusuanziHTML() {
  return `
  <span id="busuanzi_container_page_pv">本文总阅读量<span id="busuanzi_value_page_pv">?</span>次</span>、
  <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv">?</span>次</span>、
  <span id="busuanzi_container_site_uv">本站总访客数<span id="busuanzi_value_site_uv">?</span>人</span>
`.trim();
}

// 初始化 footer Element
function initFooterElement() {
  // 创建 Gitalk 容器
  let gitalkContainer = document.createElement('div');
  gitalkContainer.id = 'gitalk-container';
  gitalkContainer.className = 'gitalk-container';
  let mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.appendChild(gitalkContainer);
  } else {
    document.body.appendChild(gitalkContainer);
  }
  
  // 创建 Footer DOM
  let footerElement = document.querySelector('footer');
  if (!footerElement) {
    footerElement = document.createElement('footer');
    footerElement.className = 'xkk_footer main';
    document.body.appendChild(footerElement);
  }

  // 创建 Footer 内容
  // 站点
  let websitesPElement = document.createElement('p');
  websitesPElement.className = 'xkk_p';
  websitesPElement.innerHTML = getWebsitesHTML();
  footerElement.appendChild(websitesPElement);
  // 不蒜子
  let busuanziPElement = document.createElement('p');
  busuanziPElement.id = 'busuanzi_container'
  busuanziPElement.className = 'xkk_p';
  busuanziPElement.style.display = 'none';
  busuanziPElement.innerHTML = getBusuanziHTML();
  footerElement.appendChild(busuanziPElement);
}

// 动态加载 js
function loadScript(url, callback) {
  let script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadBusuanzi() {
  loadScript('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', function() {
    document.getElementById('busuanzi_container').style.display = 'block';
    console.info('已加载：不蒜子 - 极简网页计数器');
  })
}

function loadXkkGitalk() {
  loadScript(window.location.protocol + "//" + window.location.host + "/gitalk.js", function() {
    loadGitalk();
    console.info('已加载：Gitalk - GitHub 评论系统');
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  initFooterElement();
  loadBusuanzi();
  loadXkkGitalk();
});
