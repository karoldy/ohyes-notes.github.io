# Note

使用[docsify](https://github.com/docsifyjs/docsify)打造自己的笔记文档

[笔记首页](https://karoldy.github.io/ohyes-notes.github.io/)

### 目录

```tex
ohyes-notes.github.io/
├── src                   # 自定义插件
│   ├── ...
│   └── index.ts          # 插件入口
├── docs
│   ├── public/           # 静态资源
│   │   ├── ...
│   │   ├── js/           # js脚本          
│   │   └──css/           # css样式
│   ├── example/          # 例子
│   ├── _config.yml       # 部署的文件
│   ├── navbar.md         # 导航栏
│   ├── sidebar.md        # 侧边栏
│   ├── covepage.md       # 封面
│   └── index.html        # git pages 主页
├── package.json
└── README.md
```

## 计划

- [ ] markdownlint支持
- [ ] 开发支持渲染output标签的插件
- [ ] 侧边栏目录展开和折叠
- [ ] 样式修改(字体，颜色)
