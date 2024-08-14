const path = require('path')
// 压缩打包文件到HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 压缩文件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir)
const distConfig = `dist-${process.env.FIRST_ENV}`

const coreConfig = env => {
    return {
        entry: {
            app: {
                import: ['react-hot-loader/patch', resolve('src/index.tsx')], // src/test.js
                dependOn: 'react-vendor'
            },
            'react-vendor': ['react', 'react-dom']
        },
        output: {
            path: resolve(distConfig),
            filename: 'js/[name].[chunkhash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
        },
        // 处理文件名操作
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
                '@': resolve('src')
            }
        },
        module: {
            rules: [{
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '../src'),
                use: [
                    {
                        loader: 'thread-loader',
                        // 有同样配置的 loader 会共享一个 worker 池(worker pool)
                        options: {
                            // 产生的 worker 的数量，默认是 cpu 的核心数
                            workers: 2,

                            // 一个 worker 进程中并行执行工作的数量
                            // 默认为 20
                            workerParallelJobs: 50,

                            // 额外的 node.js 参数
                            // workerNodeArgs: ['--max-old-space-size', '1024'],

                            // 闲置时定时删除 worker 进程
                            // 默认为 500ms
                            // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
                            poolTimeout: 2000,

                            // 池(pool)分配给 worker 的工作数量
                            // 默认为 200
                            // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
                            poolParallelJobs: 50,

                            // 池(pool)的名称
                            // 可以修改名称来创建其余选项都一样的池(pool)
                            name: 'my-pool'
                        }
                    },
                    {
                        loader: 'babel-loader', // es6 转换成 es5
                        options: {
                            presets: [
                                '@babel/preset-env', // 如果您使用的是 Babel 版本 7，您将需要运行 @babel/preset-env, 预解析成不同浏览器识别的 js
                                // @babel/preset-react 预解析 react 包含下面3个插件
                                // @babel/plugin-syntax-jsx
                                // @babel/plugin-transform-react-jsx
                                // @babel/plugin-transform-react-display-name
                                '@babel/preset-react',
                                '@babel/preset-typescript' // 支持 .ts 语法解析
                            ],
                            cacheDirectory: true // 启用缓存
                        }
                    }
                ]
            },
            // .tsx文件使用 ts-loader 替换 css-loader
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 必须优先往Dom注入文件然后解析css
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                    {
                        // 全局共享scss变量和引用资源
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [resolve('src/assets/styles/common.scss')],
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true
                            }
                        }
                    }
                ]
            }
            ]
        },
        plugins: [
            new UglifyJSPlugin(),
            new HtmlWebpackPlugin({
                inject: true,
                title: 'React-Demo',
                template: resolve('public/index.html'),
                publicPath: '/'
            })
        ]
    }
}

module.exports = coreConfig
