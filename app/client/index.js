import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import configureStore from '../common/store/configureStore';

const rootElement = document.getElementById('app');
const store = configureStore(window.__initialState);

render(
  <Provider store={store}>
    <div>
      <ReduxRouter />
    </div>
  </Provider>,
  rootElement
);

