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
                use: [MiniCssExtractPlugin.loader, 'css-loader',]
            },
            {
                test: /\.js$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Webpack-Dev-Server', template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    ]
}