import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;