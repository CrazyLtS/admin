const { resolve, join } = require('path')

module.exports = {
  // 配置选项
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    compress: true,
    port: 8000,
    open: true
  },
  // 配置webpack
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        src: join(__dirname, 'src'),
        components: join(__dirname, 'src/components'),
        // 主要组件
        mainComponents: join(__dirname, 'src/components/msgSystem/mainComponents'),
        assets: join(__dirname, 'src/assets'),
        contentComponents: join(__dirname, 'src/components/msgSystem/contentComponents'),
        otherComponents: join(__dirname, 'src/components/otherComponents')
      }
    }
  }
}
