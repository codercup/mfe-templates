# 项目介绍

基于`qiankun`的微前端框架。

## 项目

主项目：

- main-vue，端口 8000，后端服务端口 4000
- main-umi，端口 9000，后端服务端口 4500

子项目：

- sub-vue，端口 8080，后端服务端口 4040
- sub-umi，端口 8090，后端服务端口 4045
- sub-react，端口 8100，后端服务端口 4050

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
npx create-react-app <appName>
```

## 注意

- 1、需要全局安装 1 个包：`express`。
- 2、运行项目之前，先运行后端服务: `node server.js` or `npm run server`.

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

详情请看项目文件！

## 重点关注

所有项目的`proxy`配置都相似，为如下结构：

```js
proxy: {
  '/api': { // 不能用'^'（确切地说：vue项目可用，可不用，但是umi一定不能用！）
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  },
}
```

但是`main-vue`项目这样配会出问题，应该使用如下配置：

```js
proxy: {
  '^/api': {  // 注意要'^'号（确切地说是，vue子项目可用可不用，umi不能用，vue主项目一定要用！）
    target: 'http://localhost:4000',
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
  },
  '^/sub-umi': {
    target: 'http://localhost:8090',
    changeOrigin: true,
    pathRewrite: {
      '/sub-umi': '/'
    }
  },
  '^/sub-react': {
    target: 'http://localhost:8100',
    changeOrigin: true,
    pathRewrite: {
      '/sub-react': '/'
    }
  }
}
```

这样配置基本可以，但是`main-vue + sub-umi`项目却还是有问题，就是刷新浏览器之后，还是会报错。

## 总结

`main-umi` 目前没有一点问题，很好用。

`main-vue` 目前不能很好地配合`sub-umi`，其他都 OK!

幸好现在公司决定使用`umi`做基座(完全没问题)！

## 后续研究

后续研究下打包之后的 `nginx` 配置，以及是否会出现问题。（能否把 vue 扳回一城？）

## 2020.12.10 更新

下午把`docker+nginx`配置进去，每个项目里面只需要执行 `./deploy.sh`即可发布。

但是依然发现，有以下几个问题：

- 微前端里面的`umi`子项目还是报错（跨域）。
  Access to fetch at 'http://localhost:8090/' from origin 'http://localhost:9002' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
- 待发现...
