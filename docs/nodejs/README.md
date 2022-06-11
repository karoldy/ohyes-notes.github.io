```json
{
  // 名称
  "name": "",
  // 版本
  "version": "",
  // 描述
  "description": "",
  // npm包项目的主要入口文件，必须的
  "main": "dist/index.js",
  // rollup 打包需要的入口文件
  "module": "dist/index.js",
  // npm 上所有的文件都开启 cdn 服务地址
  "unpkg": "dist/index.js",
  // jsdelivr cdn公共库
  "jsdelivr": "dist/index.js",
  // TypeScript 的入口文件
  "typings": "types/index.d.ts",
  // 当你发布package时，具体那些文件会发布上去
  "files": [
    "src",
    "dist/*.js",
    "types/*.d.ts"
  ],
  // 声明该模块是否包含 sideEffects（副作用），从而可以为 tree-shaking 提供更大的优化空间。
  "sideEffects": false,
  "scripts": {},
  // 代码质量检查
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "node scripts/verify-commit-msg.js"
  },
  // 代码检查
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  // git仓库所在位置
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vue.git"
  },
  // 关键词
  "keywords": [],
  // 作者
  "author": "",
  // 开源协议
  "license": "MIT",
  // bug地址
  "bugs": {
    "url": "https://github.com/vuejs/vue/issues"
  },
  // 主页
  "homepage": "https://github.com/vuejs/vue#readme",
  // 依赖
  "devDependencies": {
    
  },
  // 设置一些用于npm包的脚本命令会用到的配置参数
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```