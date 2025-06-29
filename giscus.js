/**
 * 动态加载 JS 文件（支持 data-* 属性和其他 HTML 属性）
 * @param {string} jsUrl - 需要加载的 JS 文件 URL（必选）
 * @param {object} options - 配置项（可选）
 * @param {object} options.dataAttrs - data-* 属性键值对（如 { repo: 'xkk1/xkk1.github.io', 'repo-id': 'MDEw...' }）
 * @param {boolean} [options.async=true] - 是否异步加载（默认 true）
 * @param {boolean} [options.defer=false] - 是否延迟执行（默认 false）
 * @param {string} [options.crossorigin] - 跨域属性（如 'anonymous'）
 * @param {function} [callback] - 加载完成后的回调函数（可选）
 */
function loadScriptGiscus(jsUrl, options = {}, callback) {
  // 创建 script 元素
  const script = document.createElement('script');
  script.src = jsUrl;

  // 处理 data-* 属性（支持对象形式传入，如 { 'data-repo': 'xxx', 'data-category': 'yyy' }）
  if (options.dataAttrs && typeof options.dataAttrs === 'object') {
    Object.entries(options.dataAttrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  }

  // 处理其他 HTML 属性（如 async、defer、crossorigin 等）
  if (options.async !== undefined) script.async = options.async;
  if (options.defer !== undefined) script.defer = options.defer;
  if (options.crossorigin) script.setAttribute('crossorigin', options.crossorigin);
  // 可扩展其他属性（如 type、id 等）
  // if (options.type) script.type = options.type;

  // 加载完成回调
  script.onload = () => {
    console.log(`JS 文件加载完成: ${jsUrl}`);
    callback?.(); // 执行自定义回调
  };

  // 加载失败回调
  script.onerror = () => {
    console.error(`JS 文件加载失败: ${jsUrl}`);
  };

  // 将脚本添加到 <head> 中（或 <body> 底部，根据需求调整）
  document.head.appendChild(script);
}

/*
<script src="https://giscus.app/client.js"
        data-repo="xkk1/xkk1.github.io"
        data-repo-id="MDEwOlJlcG9zaXRvcnkyOTU3NDcyNzg="
        data-category="Announcements"
        data-category-id="DIC_kwDOEaC-zs4CsMHv"
        data-mapping="specific"
        data-term="[在此输入字符串]"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
*/
// 配置 giscus 的 data-* 属性（键名需带 'data-' 前缀）
let giscusOptions = {
  dataAttrs: {
    'data-repo': 'xkk1/xkk1.github.io',
    'data-repo-id': 'MDEwOlJlcG9zaXRvcnkyOTU3NDcyNzg=',
    'data-category': 'Announcements',
    'data-category-id': 'DIC_kwDOEaC-zs4CsMHv',
    'data-mapping': 'specific',
    'data-term': '匹配特定字符串',
    'data-strict': '1',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'top',
    'data-theme': 'preferred_color_scheme',
    'data-lang': 'zh-CN',
    'data-loading': 'lazy'
  },
  async: true, // 保持异步加载
  crossorigin: 'anonymous'
};

function loadGiscus(idString) {
  idString = idString || decodeURIComponent(window.location.pathname); // 初始化 idString
  // 调用函数加载 giscus 脚本
  giscusOptions.dataAttrs["data-term"] = idString;
  console.info("giscus data-term: " + idString);
  loadScriptGiscus('https://giscus.app/client.js', giscusOptions, () => {
    console.info('giscus 脚本加载完成，可初始化交互');
  });
}
