const path = require('path')
// 打包文件到HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            filename: 'js/[name].[chunkhash].js'
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
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, '../src'),
                    use: {
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
                        'sass-loader'
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
