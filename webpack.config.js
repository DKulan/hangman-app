const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'lib'),
        // publicPath: '/scripts'
    },
    devtool: 'source-map'
}