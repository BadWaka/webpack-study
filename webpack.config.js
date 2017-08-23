const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {

    // 入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
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

        // 清理 dist 目录
        new CleanWebpackPlugin(['dist']),

        // 动态生成 html
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),

        // 生成 manifest 文件
        new ManifestPlugin(),
    ]

};