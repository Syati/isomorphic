import express from 'express';

import handleRender from './handleRender';
import settings from './settings';

export default function setup(app) {
  app.use('/static', express.static(`${__dirname}/../public/static/`));
  app.use(handleRender);
  return app;
}
