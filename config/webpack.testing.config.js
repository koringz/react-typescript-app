// 深度合并对象
const { merge } = require('webpack-merge')
const coreConfig = require('./webpack.core')
const baseConfig = require('./webpack.base')

const mainConfig = env => {
    return {
        mode: 'testing',
        devServer: {
            host: '0.0.0.0',
            port: 9099
        }
    }
}

module.exports = merge(coreConfig(), baseConfig(), mainConfig()) // 深度合并对象属性
