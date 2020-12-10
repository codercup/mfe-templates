module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
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
  }
}
