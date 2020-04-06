const path = require('path') //CommandJSX

//El nombre de la variable es sacado de la documentación
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

module.exports = {
    entry: { home: path.resolve(__dirname, 'src/js/index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js' /*[name] corresponde a las keys del entry (home, precios, contacto)*/
    },
    mode: 'development',
    devServer:{ 
        hot:true, 
        open: true,
        port: 9000,
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader', 
                    options: {
                        limit: 9000000
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Webpack-Dev-Server', template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    ],
    optimization:{
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: 'commons'
        }
    }
}