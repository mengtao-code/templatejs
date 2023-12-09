/* eslint-disable */
const path = require('path')

const webpackConfigs = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    context: path.resolve(__dirname, './'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle/bundle.js',
        chunkFilename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './public')
        },
        compress: true,
        port: 9000
    }
}

if (process.env.MODE === 'development') {
    webpackConfigs.devtool = 'eval-source-map'
    webpackConfigs.mode = 'development'
} else if (process.env.MODE === 'production') {
    webpackConfigs.mode = 'production'
}

module.exports = webpackConfigs
