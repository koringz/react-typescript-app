// 深度合并对象
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const coreConfig = require('./webpack.core')
const baseConfig = require('./webpack.base')

const mainConfig = env => {
    return {
        mode: 'development',
        devtool: 'eval-cheap-module-source-map', // 开启 source-map 开发环境编译过慢
        devServer: {
            // 开启热更新
            hot: true,
            host: 'localhost',
            port: 9099
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    }
}

module.exports = merge(coreConfig(), baseConfig(), mainConfig()) // 深度合并对象属性
