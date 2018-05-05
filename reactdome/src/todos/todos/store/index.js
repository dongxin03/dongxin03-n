import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
let local = function({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            next(action);
            let {
                todos: { todos }
            } = getState();
            localStorage.setItem('todos', JSON.stringify(todos));
        };
    };
};
export default createStore(reducers, applyMiddleware(local));
