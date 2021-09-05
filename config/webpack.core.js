
const path = require("path")
// 打包文件到HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '..', dir)
const distConfig = `dist-${process.env.FIRST_ENV}`

const coreConfig = (env) => {
    return {
        entry: {
            app: {
                import: [resolve("src/index.tsx")], // src/test.js
                dependOn: "react-vendor"
            },
            "react-vendor": ["react", "react-dom"]
        },
        output: {
            path: resolve(distConfig),
            filename: "[name].[chunkhash].js"
        },
        // 处理文件名操作
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts'],
            alias: {
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
                            "presets": [
                                "@babel/preset-env", // 如果您使用的是 Babel 版本 7，您将需要运行 @babel/preset-env, 预解析成不同浏览器识别的 js
                                // @babel/preset-react 预解析 react 包含下面3个插件 
                                // @babel/plugin-syntax-jsx
                                // @babel/plugin-transform-react-jsx
                                // @babel/plugin-transform-react-display-name
                                "@babel/preset-react", 
                                "@babel/preset-typescript" // 支持 .ts 语法解析
                            ],
                        },
                    },
                },
                // .tsx文件使用 ts-loader 替换 css-loader
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', // 必须优先往Dom注入文件然后解析css
                        'css-loader',   
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                title: 'React-Demo',
                template: resolve("public/index.html"),
            }),
        ]
    }
}

module.exports = coreConfig