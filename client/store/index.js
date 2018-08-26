import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import myReducer from '../reducers/index';

// const store = createStore(myReducer);

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(myReducer, middleware);

export default store;
