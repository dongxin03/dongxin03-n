import {createStore,applyMiddleware} from "redux";
import reduser from "../store/reduser";
// import reduxPromise from 'redux-promise';
import reduxTunhk from 'redux-thunk'
import reduxLogger from 'redux-logger';


let store=createStore(reduser,applyMiddleware(reduxLogger,reduxTunhk));


export default store;