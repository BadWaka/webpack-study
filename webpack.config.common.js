/**
 * webpack 公共配置文件
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 入口
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },

    // 输出
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // 模块 这些选项决定了如何处理项目中的不同类型的模块
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // csv/tsv 数据文件
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            // xml 数据文件
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },

    // 插件
    plugins: [

        // 动态生成 html
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),

    ]

};