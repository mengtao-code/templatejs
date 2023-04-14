/* eslint-disable */
const path = require('path')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    context: path.resolve(__dirname, './'),
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle/bundle.js',
        chunkFilename: '[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        compress: true,
        port: 9000,
    },
}