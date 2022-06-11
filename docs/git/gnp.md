# GitHub Npm Package

## 发包流程

1. github申请一个Token，user - setting - Developer settings - Personal access tokens - Generate new token，生成一个用以发布Npm包的Token，需要选择权限，以下权限必选：

```
1、repo
2、read:packages
3、write packages
```

2. 接下来将Token添加至~/.npmrc

```
//npm.pkg.github.com/:_authToken=TOKEN
```

或者使用npm login命令进行授权，注意用户名要全部小写，Token的输入是以密码的方式输入，不会显示

```
npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS`
```

3. 接下来在项目的根目录添加一个~/.npmrc文件，并添加如下配置

```
@YOUR-USERNAME:registry=https://npm.pkg.github.com
```

4. 在package.json 添加如下配置

```json
{
  "name": "@YOUR-USERNAME/YOUR-REPOSITORY"
  "publishConfig": {
    "@YOUR-USERNAME:registry": "https://npm.pkg.github.com"
  }
}
```

## 安装

```
npm install @USERNAME/@PACKAGENAME@VERSION --registry=https://npm.pkg.github.com/
```

or

```
yarn add @USERNAME/@PACKAGENAME@VERSION --registry=https://npm.pkg.github.com/
```