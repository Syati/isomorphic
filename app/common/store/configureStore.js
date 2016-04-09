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
  return store;
}
