function getWebsitesHTML() {
  const websites = {
    "GitHub Pages": "https://xkk1.github.io/",
    "GitLab Pages": "https://xkk1.gitlab.io/",
    "Cloudflare Pages": "https://xkk1.pages.dev/",
    "Vercel": "https://xkk1.vercel.app/",
    // "Netlify": "https://xkk1.netlify.app/",
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
<span id="busuanzi_container" style="display: none;">
  <span id="busuanzi_container_page_pv">本文总阅读量<span id="busuanzi_value_page_pv">?</span>次</span>、
  <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv">?</span>次</span>、
  <span id="busuanzi_container_site_uv">本站总访客数<span id="busuanzi_value_site_uv">?</span>人</span>
  <br />
</span>
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
  let footerElement = document.createElement('footer');
  footerElement.className = 'xkk_footer main';
  document.body.appendChild(footerElement);

  // 创建 Footer 内容
  let footerPElement = document.createElement('p');
  footerPElement.className = 'xkk_p';
  footerPElement.innerHTML = getBusuanziHTML() + getWebsitesHTML();
  footerElement.appendChild(footerPElement);
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
    document.getElementById('busuanzi_container').style.display = 'inline';
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
