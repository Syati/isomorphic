import React from 'react';
import { renderToString } from 'react-dom/server';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import Html from './Html';

export default function handleRender(req, res) {
  if (__DEVELOPMENT__) {
    webpack_isomorphic_tools.refresh()
  }

  const initialState = {};
  const store = configureStore(initialState);
  const component = renderToString(
    <Provider store={store}>
      <div>
        <ReduxRouter />
      </div>
    </Provider>
  );
  const finalState = store.getState();

  res.send(
    '<!doctype html>\n' +
    renderToString(
      <Html assets={webpack_isomorphic_tools.assets()}
            component={component}
            initialState={finalState}/>
    )
  );
}




