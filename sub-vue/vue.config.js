module.exports = {
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    output: {
      library: 'sub-vue',
      jsonpFunction: `webpackJsonp_sub-vue`,
      libraryTarget: 'umd'
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4040',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
