// 深度合并对象
const webpack = require('webpack')
const {
  merge
} = require('webpack-merge')
const coreConfig = require('./webpack.core')
const baseConfig = require('./webpack.base')

const url = '//172.24.172.123:8005' //服务器端接口地址

const mainConfig = env => {
  return {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map', // 开启 source-map 开发环境编译过慢
    devServer: {
      // 开启热更新
      hot: true,
      // host: '0.0.0.0',
      open: true,
      port: 8088,
      proxy: {
        '/api': { //这里最好有一个 /
          target: url, // 服务器端接口地址
          ws: false, //如果要代理 websockets，配置这个参数
          secure: false, // 如果是https接口，需要配置这个参数
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
}

module.exports = merge(coreConfig(), baseConfig(), mainConfig()) // 深度合并对象属性
