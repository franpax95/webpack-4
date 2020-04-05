const path = require('path') //CommandJSX

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js' /*[name] corresponde a las keys del entry (home, precios, contacto)*/
    },
    mode: 'development',
    module: {
        rules: [
            {
                /* Con RegExp */
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}