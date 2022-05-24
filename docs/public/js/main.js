var num = 0;
mermaid.initialize({ startOnLoad: false });
window.$docsify = {
  name: 'Note',
  repo: 'karoldy/ohyes-notes.github.io',
  themeColor: 'rgb(30, 140, 189)',
  homepage: 'index.md',
  // coverpage: 'covepage.md',
  // loadNavbar: 'navbar.md',
  loadSidebar: 'sidebar.md',
  // routerMode: 'history',
  auto2top: true,
  executeScript: true,
  relativePath: true,
  maxLevel: 3,
  subMaxLevel: 2,
  alias: {
    '/.*/navbar.md': '/navbar.md',
    // '/.*/sidebar.md': '/sidebar.md'
  },
  search: {
    depth: 3,
    noData: 'No results!',
    placeholder: 'Search...',
    paths: 'auto',
    placeholder: '🔍 搜索',
    noData: '😒 找不到结果',
    // Headline depth, 1 - 6
    depth: 6,
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
  },
  pagination: {
    previousText: '上一节',
    nextText: '下一节',
    crossChapter: true,
    crossChapterText: true,
  },
  plugins: [
    function (hook) {
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/karoldy" target="_blank">Karol</a> &copy;2022.</span>',
        '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
        '</footer>'
      ].join('');

      hook.afterEach(function(html) {
        return html + footer;
      });
    }
  ],
  markdown: {
    renderer: {
      code: function(code, lang) {
        // 数学公式支持
        if (lang === "math") {
          return (
            '<div class="tex">' + katex.renderToString(code, {
                throwOnError: false
            }) + '</div>'
          );
        }
        // 流程图支持
        if (lang === "mermaid") {
          return (
            '<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + "</div>"
          );
        }
        return this.origin.code.apply(this, arguments);
      }
    }
  }
}
