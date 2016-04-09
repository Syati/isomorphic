var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
    './app/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'app/public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exculde: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer?browsers=last 2 version!less?outputStyle=expanded")
    }]
  }
};