/**
 * webpack 生产环境配置文件
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common');

module.exports = Merge(CommonConfig, {

    // source map
    devtool: 'cheap-module-source-map',

    // 插件
    plugins: [

        // 清理 dist 目录
        new CleanWebpackPlugin(['dist']),

        // 生成 manifest 文件
        new ManifestPlugin(),

        // // 运行 UglifyJS 来压缩输出文件
        // new webpack.optimize.UglifyJsPlugin({}),

        // 设置 Node 环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // // 提取公用的模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common', // 指定公用包的名称
        // }),
    ]

});