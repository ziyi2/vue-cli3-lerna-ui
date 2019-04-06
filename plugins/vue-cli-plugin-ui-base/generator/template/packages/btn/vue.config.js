const vueCommon = require('../../vue.common')
const { chainWebpack, configureWebpack } = vueCommon
delete vueCommon.chainWebpackCallback
delete vueCommon.configureWebpack

module.exports = {
  ...vueCommon,

  configureWebpack: {
    ...configureWebpack,
    // configureWebpack配置
  },

  chainWebpack(webpackConfig) {
    chainWebpack(webpackConfig)
    // chainWebpack配置
  }
}
