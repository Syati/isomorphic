import React from 'react';
import { renderToString } from 'react-dom/server';

import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
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

export default function handleRender(req, res) {
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




