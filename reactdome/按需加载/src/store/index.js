import { createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise'
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(...[reduxThunk, reduxPromise])
));
export default store;