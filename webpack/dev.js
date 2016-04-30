var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack_isomorphic_tools_configuration = require('./webpack-isomorphic-tools');
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(webpack_isomorphic_tools_configuration);
webpack_isomorphic_tools_plugin.development();

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, "../app"),
  entry: [
    'webpack-hot-middleware/client',
    '../app/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../app/public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true)
      }
    }),
    webpack_isomorphic_tools_plugin,
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
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
        'autoprefixer-loader?browsers=last 2 version',
        'less-loader?outputStyle=expanded&sourceMap'
      ]
    }, {
      test: webpack_isomorphic_tools_plugin.regular_expression('images'),
      loader: 'url-loader?limit=10240'
    }]
  }
};
