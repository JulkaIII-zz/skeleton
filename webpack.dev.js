const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', // strong source mapping
    devServer: {
        contentBase: './dist', //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
    },
    module: {
        rules: [
            { // HMR with Stylesheets
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            }
        ]
    },
});