require('babel-register');

var project_base_path = require('path').resolve(__dirname, '..');
var Webpack_isomorphic_tools = require('webpack-isomorphic-tools');
var webpack_isomorphic_tools_configuration = require('../../webpack/webpack-isomorphic-tools');

var settings = require('./settings').default;
global.__DEVELOPMENT__ = settings.global.isDevelopment;

global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(webpack_isomorphic_tools_configuration)
  .development(__DEVELOPMENT__)
  .server(project_base_path, function(){
    require('./server');
  });
