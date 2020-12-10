import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/login',
      component: '@/pages/login',
    },
    // 配置子项目
    {
      path: '/vue',
      microApp: 'sub-vue',
    },
    {
      path: '/umi',
      microApp: 'sub-umi',
    },
    {
      path: '/react',
      microApp: 'sub-react',
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'sub-vue', // 唯一 id
          entry: '//localhost:8080', // html entry
        },
        {
          name: 'sub-umi', // 唯一 id
          entry: '//localhost:8090', // html entry
        },
        {
          name: 'sub-react', // 唯一 id
          entry: '//localhost:8100', // html entry
        },
      ],
    },
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4500',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
    '/sub-vue': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/sub-vue': '/',
      },
    },
    '/sub-umi': {
      target: 'http://localhost:8090',
      changeOrigin: true,
      pathRewrite: {
        '^/sub-umi': '/',
      },
    },
    '/sub-react': {
      target: 'http://localhost:8100',
      changeOrigin: true,
      pathRewrite: {
        '^/sub-react': '/',
      },
    },
  },
});
