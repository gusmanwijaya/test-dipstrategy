import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import loadingReducers from './loading/reducers';
import moviesReducers from './movies/reducers';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  loadingReducers,
  moviesReducers,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
