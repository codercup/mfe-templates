module.exports = {
  devServer: {
    https: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '/api': '/',
        },
      },
      '^/subVueApi': {
        target: 'http://localhost:1888',
        changeOrigin: true,
        pathRewrite: {
          '/subVueApi': '/',
        },
      },
      // '^/subVueApi': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/subVueApi': '/'
      //   }
      // },
      // '^/subUmiApi': {
      //   target: 'http://localhost:8090',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/subUmiApi': '/'
      //   }
      // },
      // '^/subReactApi': {
      //   target: 'http://localhost:8100',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/subReactApi': '/'
      //   }
      // }
    },
  },
}
