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
                /* Con RegExp */
                test: /\.css$/,
                use: [
                    /*'style-loader', //No hace falta ya que tenemos plugin */
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Webpack-Dev-Server' }),
        new MiniCssExtractPlugin({ filename: 'css/[name].css' })
    ]
}