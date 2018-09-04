const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generate its own index.html file, replaces our.
const CleanWebpackPlugin = require('clean-webpack-plugin');// cleans a dist folder before build

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.
  devServer: {
    contentBase: './dist' //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:4000
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