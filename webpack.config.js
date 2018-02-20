/* eslint-env node */

const path = `${__dirname}/build`;

module.exports = {
    entry: './src/main.js',
    output: {
        path,
        filename: 'bundle.[hash].js',
    }
};