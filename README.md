# OhYes Note

使用[docsify](https://github.com/docsifyjs/docsify)打造自己的笔记文档

[笔记首页](https://karoldy.github.io/ohyes-notes.github.io/)

## 目录

```tex
ohyes-notes.github.io/
├── src                   # 自定义插件
│   ├── ...
│   └── index.ts          # 插件入口
├── docs
│   ├── ...               # 笔记
│   └── index.html        # git pages 主页
├── package.json
└── README.md
```

### docs目录说明

```tex
docs
├── example/                # 实例
├── public/                 # 静态资源
├── html/                   # html
├── html5/                  # html
├── markdown/               # markdown笔记
├── markdown-lint/          # markdown-lint笔记
├── navbar.md               # 导航栏
├── sidebar.md              # 侧边栏
├── covepage.md             # 封面
├── index.md                # 首页
└── index.html              # docsify配置 git page 入口
```

## 代办事项

### 笔记/文章

- [x] markdown + lint
- [x] html笔记
- [ ] html5笔记
- [ ] vim命令 + 操作

### 功能

- [ ] 设置请求头，支持跨域
- [x] 设置访问文件资源的路径
- [ ] 加入本地Monaco字体
- [ ] 开发自己的主题
- [ ] 开发支持渲染output标签的插件
- [ ] 侧边栏目录展开和折叠

## 分支管理

`master` 主分支, git pages 的稳定分支，受保护，不接受更改

### 划分

- 功能(feature)分支: 开发插件的分支命名，从`master`分支上面分出来。开发完成后，要merge到master分支。功能分支的命名，可以采用feature/xxxxx的形式命名(xxxxx为插件描述)

- 笔记(note/docs分支): 书写笔记的分支名，从`master`分支上面分出来。笔记完成后，要merge到master分支。笔记分支的命名，可以采用note/xxxxx的形式命名(xxxxx为笔记描述)


## 插件开发说明

> _TODO_
