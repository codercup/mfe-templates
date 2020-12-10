# 项目介绍

基于`qiankun`的微前端框架。

## 项目

主项目：

- main-vue，端口 8000，后端服务端口 4000
- main-umi，端口 9000，后端服务端口 4500

子项目：

- sub-vue，端口 8080，后端服务端口 4040
- sub-umi，端口 8090，后端服务端口 4045

vue 项目使用 vue-cli 脚手架：

```bash
vue create <appName>
```

umi 项目使用 umi 脚手架：

```bash
mkdir <appName> & cd <appName>
yarn create @umijs/umi-app
# or: npx @umijs/umi-app
# 注意我不使用yarn create umi，因为这里生成的app的Umi版本是@2，升级到@3又花费精力，故弃之不用！
```

react 项目使用 cra 脚手架：

```bash
# todo
```

## 注意

- 1、需要全局安装 1 个包：`express`。
- 2、运行项目之前，先运行后端服务: `node server.js` or `npm run prestart`.

## 代理请求

- 1、主项目

  ```nginx
  http://localhost:8000/api --> http://localhost:4000
  ```

- 2、子项目

  ```nginx
  http://localhost:8080/api --> http://localhost:4040
  ```

- 3、微前端情况下的子项目请求：【重点处理！！】
  首先需要加上特定前缀，以识别是哪个子应用发起的，如加上`sub-vue`，然后主项目需要进行`proxy`转发：

  ```nginx
  http://localhost:8000/sub-vue/api --> http://localhost:8080/api --> http://localhost:4040
  ```

详情请看项目文件！（还是贴出来吧）

- 主项目的 `proxy`:

```js
proxy: {
  '^/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
      '/api': '/'
    }
  },
  '^/sub-vue': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '/sub-vue': '/'
    }
  }
}
```

- 子项目的 `proxy`:

```js
proxy: {
  '^/api': {
    target: 'http://localhost:4040',
    changeOrigin: true,
    pathRewrite: {
      '/api': '/'
    }
  },
}
```
