import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';

import App from '../common/containers/App';
import configureStore from '../common/store/configureStore';

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Isomorphic App Sample</title>
        <link href="/static/styles.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

function handleRender(req, res) {
  const store = configureStore({});

  const html = renderToString(
    <Provider store={store}>
      <div>
        <ReduxRouter />
      </div>
    </Provider>
  );
  const initialState = {};
  res.send(renderFullPage(html, initialState));
}


const app = new Express();
const settings = {
  port: process.env.PORT || 3000
};

app.use('/static', Express.static(`${__dirname}/../public/assets/`));
app.use(handleRender);

app.listen(settings.port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${settings.port}. Open up http://localhost:${settings.port}/ in your browser.`)
  }
});
