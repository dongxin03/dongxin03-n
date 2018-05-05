let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'build.js',
        // 必须是一个绝对路径
        path: require('path').resolve('dist')
    },
    // 解析
    resolve: {
        alias: { // 必须是绝对路径
            'src': require('path').resolve('src')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    devServer: {
        port: 8000,
        // 实现支持Broswer路由
        historyApiFallback: true,
        hot:true
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /.(jpg|png|gif)$/, use: 'url-loader?limit=8000' }
        ]
    }
}