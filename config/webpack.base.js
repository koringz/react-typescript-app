const path = require('path')
const webpack = require('webpack')
// 用于删除/清理构建文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 创建单个css文件
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const devMode = process.env.NODE_ENV !== "production";

const baseConfig = env => {
    return {
        // 开发环境优化压缩文件
        optimization: {
            minimize: true
        },
        module: {
            rules: [
                // For webpack v5
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    // More information here https://webpack.js.org/guides/asset-modules/
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'static/assets/',
                        publicPath: 'static/assets/'
                    }
                }
            ]
        },
        plugins: [
            // 构建的进度条
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin()
        ]
    }
}

module.exports = baseConfig
