// для изменения html
const HTMLPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    // запуск сервера
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        }
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }
}