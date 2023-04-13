import * as path from 'path'
import * as webpack from 'webpack'
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server'

const config: webpack.Configuration = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle/bundle.js',
        chunkFilename: '[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        compress: true,
        port: 9000,
    },
}

export default config
