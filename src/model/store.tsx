import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';

import { AppState, initialState } from './app-state';
import * as Reducers from './reducers';

export function getNewStore(initialState: AppState) {
  let globalReducer = (state: any, action: any) => {
    let reducers = {};
    for (let reducerKey in Reducers) {
      reducers[reducerKey] = Reducers[reducerKey](state[reducerKey], action);
    }
    return reducers;
  };
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
  const middleWareEnhancer = applyMiddleware(reduxThunkMiddleware);

  return createStore(globalReducer, initialState, composeEnhancers(middleWareEnhancer));
}

export function getInitialState(): AppState {
  return initialState;
}
