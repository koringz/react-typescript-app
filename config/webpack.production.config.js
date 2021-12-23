// 深度合并对象
const { merge } = require('webpack-merge')
const coreConfig = require('./webpack.core')
const baseConfig = require('./webpack.base')

const mainConfig = env => {
    return {
        mode: 'production',
        devServer: {
            // 开启热更新
            hot: true,
            // host: '0.0.0.0',
            port: 8088,
            proxy: {
                '/api': { //这里最好有一个 /
                    target: url, // 服务器端接口地址
                    ws: false, //如果要代理 websockets，配置这个参数
                    secure: false, // 如果是https接口，需要配置这个参数
                    changeOrigin: true, //是否跨域
                    pathRewrite: { '^/api': '' }
                }
            }
        },
    }
}

module.exports = merge(coreConfig(), baseConfig(), mainConfig()) // 深度合并对象属性
