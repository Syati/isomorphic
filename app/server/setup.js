import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import handleRender from './handleRender';
import settings from './settings';

export default function setup(app) {
  if (settings.env !== 'production') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      reload: true,
      publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
  }

  app.use('/static', express.static(`${__dirname}/../public/static/`));
  app.use(handleRender);
  return app;
}
