import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import App from '../common/containers/App';
import configureStore from '../common/store/configureStore';

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
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
  const html = renderToString(
    <Provider>
      <App />
    </Provider>
  );
  const initialState = {};
  res.send(renderFullPage(html, initialState));
}


const app = new Express();
const settings = {
  port: process.env.PORT || 3000
};

app.use(handleRender);
app.use('/static', Express.static(`${__dirname}/../public/assets/`));

app.listen(settings.port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${settings.port}. Open up http://localhost:${settings.port}/ in your browser.`)
  }
});
