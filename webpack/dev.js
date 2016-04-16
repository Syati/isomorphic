var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../app/public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      query: {
        presets: ['react-hmre']
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer?browsers=last 2 version!less?outputStyle=expanded")
    }]
  }
};
