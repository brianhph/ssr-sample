import { routerMiddleware } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/test';

exports.configureStore = (history, initialState) => {
  const middlewares = [
    routerMiddleware(history),
    thunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const rootReducer = combineReducers({
    test: testReducer
  });

  return createStore(rootReducer, initialState, compose(...enhancers));
}
