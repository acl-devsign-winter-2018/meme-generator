const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = `${__dirname}/build`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(`${path}/bundle.*.js`)
  ]  
}