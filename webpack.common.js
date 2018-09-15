const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generate its own index.html file, replaces our.
const CleanWebpackPlugin = require('clean-webpack-plugin');// cleans a dist folder before build

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
        title: 'Caching' // Cashing is needed to ensure files produced by webpack compilation can remain cached unless their contents has changed.
        })
    ],
    output: {
        filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        publicPath: '/' // The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:4000
    }
};

// webpack v4+ will minify your code by default in production mode.