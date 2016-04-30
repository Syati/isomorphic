var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
var webpack_isomorphic_tools_configuration = require('./webpack-isomorphic-tools');
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(webpack_isomorphic_tools_configuration);

module.exports = {
  context: path.resolve(__dirname, "../app"),
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../app/public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    webpack_isomorphic_tools_plugin
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
    }, {
      test: webpack_isomorphic_tools_plugin.regular_expression('images'),
      loader: 'url-loader?limit=10240'
    }]
  }
};
