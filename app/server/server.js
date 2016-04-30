import Express from 'express';
import setup from './setup';
import settings from './settings';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

const app = new Express();

if (__DEVELOPMENT__) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    reload: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

setup(app);

app.listen(settings.port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${settings.port}. Open up http://localhost:${settings.port}/ in your browser.`)
  }
});
