const path = require('path');

module.exports = {

    // 入口
    entry: path.resolve(__dirname, 'src/index.js'),

    // 输出
    output: {
        filename: 'bundle.js',
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
                test: /\.(png|svg|jpg|jpeg|gif)/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }

};