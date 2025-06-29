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

// 获取当前 JS 的完整 URL
(function () {
  // 步骤 1：获取当前 JS 的完整 URL
  const currentScriptSrc = document.currentScript.src;
  // 步骤 2：解析 URL 并提取目录部分
  function getBasePath(scriptUrl) {
    const url = new URL(scriptUrl);
    const pathname = url.pathname; // 获取路径部分（如 '/js/footer.js'）

    // 找到最后一个斜杠的位置（即文件名前的目录）
    const lastSlashIndex = pathname.lastIndexOf('/');

    // 边界情况：如果路径只有根目录（如 '/'），直接返回根路径
    if (lastSlashIndex === -1) {
      return `${url.origin}/`;
    }

    // 截取目录部分（包含末尾的斜杠）
    const dirPath = pathname.substring(0, lastSlashIndex + 1);

    // 组合协议、主机、端口和目录
    return `${url.origin}${dirPath}`;
  }
  // 使用示例
  const currentScriptPath = currentScriptSrc.split('?')[0].split('#')[0]; // 清理查询参数和哈希
  const basePath = getBasePath(currentScriptPath);
  let idString = decodeURIComponent(window.location.pathname.substring(
    basePath.length - window.location.origin.length - 1
  ))
  // 如果是 markdown 页面，则获取 URL 中的 md 参数，构建相应的 html 页面路径
  if (idString === "/md/") {
    let markdownURL = getQueryVariable("md");
    if (markdownURL) {
      idString = markdownURL;
      console.info("markdownURL: " + markdownURL);
      if (idString.startsWith("https://") || idString.startsWith("http://") || idString.startsWith("//") || idString.startsWith("www.")) {
        console.info("外来 Markdown链接，不加载评论区！");
        return;
      }
      // 将 markdown 扩展名 ".md" 转换为 HTML 扩展名 ".html"
      if (idString.endsWith(".md")) {
        idString = idString.substring(0, idString.length - 2);
        idString += "html";
      }
      // 循环去除 idString 前的相对路径 "../" ，结束时在前面加上 "/"
      let isRelative = idString.startsWith("../");
      while (idString.startsWith("../")) {
        idString = idString.substring(3);
      }
      if (isRelative) {
        idString = "/" + idString;
      } else if (idString.startsWith(".")) {
        idString = idString.substring(1);
      } else if (!idString.startsWith("/")) {
        idString = "/" + idString;
      }
    }
  }
  // 以 "/index.html" 结尾，则去除 "index.html"
  if (idString.endsWith("/index.html")) {
    idString = idString.substring(0, idString.length - 10);
  }
  // 不以 ".html" 结尾，则加上 ".html"
  if (!idString.endsWith(".html") && !idString.endsWith("/")) {
    idString += ".html";
  }
  console.info("idString: " + idString);
  // 暴露到全局的唯一命名空间
  window.footerJs = {
    currentScriptSrc,
    currentScriptPath,
    basePath,
    idString
  };
})();

// 动态加载 js
function loadScript(url, callback) {
  let script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadBusuanzi() {
  loadScript('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', function () {
    document.getElementById('busuanzi_container').style.display = 'block';
    console.info('已加载：不蒜子 - 极简网页计数器');
  })
}

function loadXkkGitalk() {
  // 唯一命名空间（避免全局污染）
  const NAMESPACE = 'xkkGitalk';
  // 检查全局标记位是否已存在
  if (window[NAMESPACE]?.loaded) {
    console.log('Gitalk 已加载，跳过重复执行');
    return;
  }
  // 初始化命名空间对象，标记以及加载过 Gitalk
  window[NAMESPACE] = { loaded: true };
  loadScript(footerJs.basePath + "gitalk.js", function () {
    loadGitalk(footerJs.idString);
    console.info('正在加载：Gitalk - GitHub Issues 评论系统');
  });
}

function loadXkkGiscus() {
  // 唯一命名空间（避免全局污染）
  const NAMESPACE = 'xkkGiscus';
  // 检查全局标记位是否已存在
  if (window[NAMESPACE]?.loaded) {
    console.log('giscus 已加载，跳过重复执行');
    return;
  }
  // 初始化命名空间对象标记以及加载过 giscus
  window[NAMESPACE] = { loaded: true };
  loadScript(footerJs.basePath + "giscus.js", function () {
    loadGiscus(footerJs.idString);
    console.info('正在加载：giscus - GitHub Discussions 评论系统');
  });
}

// 初始化 footer Element
function initFooterElement() {
  // 评论区
  let commentSectionElement = document.querySelector('#comment-section');
  if (!commentSectionElement) {
    commentSectionElement = document.createElement('div');
    commentSectionElement.id = 'comment-section';
    let mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.appendChild(commentSectionElement);
    } else {
      document.body.appendChild(commentSectionElement);
    }
  }

  // 创建评论区提示语
  const commentSectionTitleElement = document.createElement('div');
  commentSectionTitleElement.className = 'xkk_p';
  commentSectionTitleElement.innerHTML = '<hr />评论区：';
  commentSectionElement.appendChild(commentSectionTitleElement);

  // 创建 giscus 容器
  const giscusContainer = document.createElement('div');
  giscusContainer.id = 'giscus';
  giscusContainer.className = 'giscus';
  commentSectionElement.appendChild(giscusContainer);

  // 创建 Gitalk 容器
  const gitalkContainer = document.createElement('div');
  gitalkContainer.id = 'gitalk-container';
  gitalkContainer.className = 'gitalk-container';
  commentSectionElement.appendChild(gitalkContainer);

  // 创建评论区切换按钮
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '使用 Gitalk 评论'; // 默认 giscus 评论
  commentSectionTitleElement.appendChild(toggleButton);
  loadXkkGiscus();
  // 绑定点击事件
  toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === '使用 Gitalk 评论') {
      loadXkkGitalk();
      // 切换为 Gitalk 评论
      toggleButton.textContent = '使用 Giscus 评论';
      gitalkContainer.style.display = 'block';
      giscusContainer.style.display = 'none';
    } else {
      // 切换为 Giscus 评论
      loadXkkGiscus();
      toggleButton.textContent = '使用 Gitalk 评论';
      gitalkContainer.style.display = 'none';
      giscusContainer.style.display = 'block';
    }
  });


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

document.addEventListener('DOMContentLoaded', (event) => {
  initFooterElement();
  loadBusuanzi();
});
