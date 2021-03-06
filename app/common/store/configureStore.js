import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';


import createRoutes from '../routes';
import rootReducer from '../reducers';

const history = require('history');
let createHistory;
if ( process.env.BROWSER ) {
  createHistory = history.createHistory;
} else {
  createHistory = history.createMemoryHistory;
}

const finalCreateStore = compose(
  reduxReactRouter({
    routes: createRoutes(),
    createHistory
  })
)(createStore);


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}
