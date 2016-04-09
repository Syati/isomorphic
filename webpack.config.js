var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './app/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'app/public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exculde: /node_modules/,
      loader: 'babel'
    }]
  }
}