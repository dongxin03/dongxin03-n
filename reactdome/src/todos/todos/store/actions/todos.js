import * as types from '../action_types';
export default {
    addTodo(text) {
        return { type: types.ADD_TODO, text };
    },
    delTodo(id) {
        return { type: types.DEL_TODO, id };
    },
    toggleTodo(id) {
        return { type: types.TOGGLE_TODO, id };
    },
    delAllCompleted() {
        return { type: types.DEL_ALL_COMPLETED };
    },
    toggleAll(completed) {
        return { type: types.TOGGLE_ALL, completed };
    }
};
