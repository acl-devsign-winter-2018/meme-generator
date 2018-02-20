const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const build = `${__dirname}/build`;

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: build,
    },
    devServer: {
        contentBase: './build',
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],    
    },
    plugins: [
        new CleanWebpackPlugin(build),
        new HtmlPlugin({ template: './src/index.html' }),
    ]

}