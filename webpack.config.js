const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generate its own index.html file, replaces our.
const CleanWebpackPlugin = require('clean-webpack-plugin');// cleans a dist folder before build

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }//,
  // module: {
  //   rules: [
  //     //loading scc
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     //loading images
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     //loading fonts
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     //loading csv, xml; json-by default
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: [
  //         'csv-loader'
  //       ]
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: [
  //         'xml-loader'
  //       ]
  //     }
  //   ]
  // }
};