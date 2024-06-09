/* eslint-disable */
const path = require('path')

const MODE = process.env.MODE ?? 'development'
const PUBLIC_PATH = process.env.PUBLIC_PATH ?? '/'
const PATTERN = process.env.PATTERN ?? 'web'
const PROJECT_NAME = process.env.PROJECT_NAME ?? 'myapp'

const config = {
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
            },
            {
                test: /\.json$/i,
                type: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        publicPath: PUBLIC_PATH
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './out')
        },
        compress: true,
        port: 9000
    }
}

if (MODE === 'development') {
    config.devtool = 'eval-source-map'
}

if (MODE === 'production') {
    config.mode = 'production'
} else if (MODE === 'development') {
    config.mode = 'development'
}

if (PATTERN === 'library') {
    config.module.rules[0].loader = 'ts-loader'
    config.output.library = {
        type: "umd",
        name: PROJECT_NAME
    }
    config.external = {
        react: 'react',
        'react-dom': 'react-dom',
        dayjs: 'dayjs',
        'aws-amplify': 'aws-amplify',
        '@fontsource/roboto': '@fontsource/roboto',
        '@fontsource/material-icons': '@fontsource/material-icons',
        '@aws-crypto/client-browser': '@aws-crypto/client-browser',
        '@aws-amplify/ui-react': '@aws-amplify/ui-react'
    }
}

module.exports = config;
