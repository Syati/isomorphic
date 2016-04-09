import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../common/containers/App';
import configureStore from '../common/store/configureStore';

const rootElement = document.getElementById('app');

render(
  <Provider>
    <App/>
  </Provider>,
  rootElement
);

