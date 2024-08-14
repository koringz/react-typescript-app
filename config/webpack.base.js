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
            minimize: true,
            mergeDuplicateChunks: true, // 合并相同的 chunk
            splitChunks: {
                chunks: 'async',//表示将选择哪些块进行优化。提供字符的有效值为all、async和initial,默认是仅对异步加载的块进行分割。
                minSize: 100 * 1024,//模块大于minSize时才会被分割出来。默认100k
                // maxSize: 0,//生成的块的最大大小，如果超过了这个限制，大块会被拆分成多个小块。
                minChunks: 1,//拆分前必须共享模块的最小块数。
                // maxAsyncRequests: 5,//按需加载时并行请求的最大数目。
                // maxInitialRequests: 3,//入口点的最大并行请求数
                // automaticNameDelimiter: '~',//默认情况下，webpack将使用块的来源和名称（例如vendors~main.js）生成名称。此选项允许您指定要用于生成的名称的分隔符。
                // automaticNameMaxLength: 30,//允许为SplitChunksPlugin生成的块名称的最大长度
                cacheGroups: {
                    vendor: {
                        name: `chunk-vendors`,
                        test: /[\\/]node_modules[\\/]/,//控制此缓存组选择的模块。省略它将选择所有模块。它可以匹配绝对模块资源路径或块名称。匹配块名称时，将选择块中的所有模块。
                        // maxInitialRequests: 12,
                        chunks: 'all',
                        maxAsyncRequests: 5,
                        minChunks: 2,
                        minSize: 2 * 10 * 1024,
                        maxSize: 2 * 100 * 1024,
                        priority: -10//一个模块可以属于多个缓存组,模块出现在优先级最高的缓存组中
                    },
                    // common: {
                    //     name: `chunk-common`,
                    //     minChunks: 2,
                    //     priority: -20,
                    //     chunks: 'initial',
                    //     reuseExistingChunk: true//如果当前块包含已经从主包中分离出来的模块，那么该模块将被重用，而不是生成新的模块
                    // }
                }
            }
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
