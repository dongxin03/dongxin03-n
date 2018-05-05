import * as types from '../action_types';
let initState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
};
export default function(state = initState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.text, completed: false }
                ]
            };
        case types.DEL_TODO:
            return {
                todos: state.todos.filter(item => item.id !== action.id)
            };
        case types.TOGGLE_TODO:
            return {
                todos: state.todos.map(item => {
                    if (item.id === action.id) {
                        item.completed = !item.completed;
                    }
                    return item;
                })
            };
        case types.DEL_ALL_COMPLETED:
            return {
                todos: state.todos.filter(item => !item.completed)
            };
        case types.TOGGLE_ALL:
            return {
                todos: state.todos.map(item => {
                    item.completed = action.completed;
                    return item;
                })
            };
        default:
            return state;
    }
}
