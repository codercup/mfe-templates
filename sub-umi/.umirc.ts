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
  ],
  qiankun: {
    slave: {},
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4045',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
});
