const { join } = require('path')

const setPath = (url) => {
  return join(__dirname, url)
}

module.exports = {
  devServer: {
    open: true,
    host: '192.168.0.104',
    port: 8080
  },
  // 配置webpack
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        src: setPath('src'),
        views: setPath('src/views'),
        components: setPath('src/components'),
        assets: setPath('src/assets'),
        public: setPath('public')
      }
    }
  }
}
