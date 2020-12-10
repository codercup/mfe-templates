module.exports = {
  webpack: config => {
    config.output.library = 'sub-react'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = 'http://localhost:8100/'
    return config
  },
  devServer: configFunction => {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      // Default config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
      const config = configFunction(proxy, allowedHost)

      // Set loose allow origin header to prevent CORS issues
      config.headers = { 'Access-Control-Allow-Origin': '*' }
      config.proxy = {
        ...proxy,
        '/api': {
          target: 'http://localhost:4050',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }

      return config
    }
  }
}
