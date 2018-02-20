/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const build = `${__dirname}/build`;

module.exports = {
    entry: './src/index.js',
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {    
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    }
                ] 
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                  loader: 'url-loader',
                  options: { limit: 5000 },
                },
            }
        ],    
    },
    plugins: [
        new CleanWebpackPlugin(build),
        new HtmlPlugin({ template: './src/index.html' }),
    ]

}