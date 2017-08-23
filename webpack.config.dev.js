const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common');

module.exports = Merge(CommonConfig, {

    // source map
    devtool: 'inline-source-map',

    // 开发服务器
    devServer: {
        contentBase: './dist',  // 告诉开发服务器(dev server)，在哪里查找文件
        hot: true,  // 开启 HMR
    },

    // 插件
    plugins: [

        // 使用 webpack 自带的模块热替换插件
        new webpack.HotModuleReplacementPlugin(),

        // 设置 Node 环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

    ]

});