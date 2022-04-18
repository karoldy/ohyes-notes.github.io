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
├── css/                    # css
├── vim-docs/               # vim
├── markdown/               # markdown
├── markdown-lint/          # markdown-lint
├── navbar.md               # 导航栏
├── sidebar.md              # 侧边栏
├── covepage.md             # 封面
├── index.md                # 首页
└── index.html              # docsify配置 git page 入口
```

## 代办事项

### 笔记/文章

- Markdown + lint
	- [x] 目录
	- [x] 笔记

- Git
	- [ ] 目录
	- [ ] 笔记

- Vim
	- [ ] 目录
	- [ ] 笔记

- Html笔记
	- [ ] 目录

- Css
	- [x] 目录
	- [ ] 属性
	- [x] 选择器

- JavaScript
	- [ ] 目录

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

## 搭建gulp+jest+eslint+typescript 项目

我创建的项目名是gulp-test

初始化项目

```
cd gulp-test

yarn init
```

安装 typescript

```
yarn add typescript --dev
```

创建tsconfig.json

tsconfig.json 还有很多配置，详细请查看官网，这里是我觉的最简单的配置了

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "types": [
      "node", "jest"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

安装@babel/core @babel/preset-env @babel/preset-typescript gulp gulp-babel

这些包是打包编译ts文件用的，gulp是自动化构建工具，只用来打包有点大材小用了，目前就学了gulp，所以就用它了

前端构建工具，gulp,grunt,rollup...

```
yarn add @babel/core @babel/preset-env @babel/preset-typescript gulp gulp-babel --dev
```

在根目录下创建babel.config.js, gulpfile.js

babel.config.js

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ]
}
```

gulpfile.js

```js
const gulp = require('gulp');
const babel = require('gulp-babel');

function ts () {
  return gulp.src('./src/**/*.ts')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
}

const tasks = gulp.series(gulp.parallel(ts));
exports.default = tasks;
```

在package.json scripts加上build命令

```json
{
  "scripts": {
    "build": "gulp"
  }
}
```

创建src目录，在里面写上自己的代码

```
yarn build
```

然后就可以看到dist目录已经打包编译好的代码了

---

安装jest，ts-jest，ts-node，@type/jest

```
yarn add jest，ts-jest，ts-node，@type/jest --dev
```

根目录创建jest.config.js配置文件

```js
module.exports = {
  "automock": false,
  "clearMocks": true,
  // testEnviroment: 'node',
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "moduleFileExtensions": ["js", "ts"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  "preset": "ts-jest",
  "roots": ["<rootDir>/test"],
  "testRegex": "test/(.+)\\.spec\\.(jsx?|tsx?)$"
}
```

创建test目录，系里面写自己的单元测试,看官网教程写测试用例

在package.json scripts加上test命令

```json
{
	"scripts": {
		"test": "jest"
	}
}
```

```
yarn test
```

就可以看到单元测试的结果了

---

安装 eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin 

这里注意，如果ts文件没有使用paths别名，不用安装eslint-import-resolver-alias 如有，请安装

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin  --dev
```

根目录创建.eslintrc.js

```js
module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-empty-interface": 2,
    "@typescript-eslint/no-explicit-any": 0
  }
}
```

在package.json scripts加上lint命令

```json
{
	"scripts": {
		"lint": "eslint --ext .ts src/"
	}
}
```

```
yarn lint
```

就可以检测自己的代码了
