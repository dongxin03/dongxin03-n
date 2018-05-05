import * as types from '../action_types';
import * as filters from '../../constants/filters';

// console.log(filters);
const initState = { filter: filters.ALL };
export default function(state = initState, action) {
    switch (action.type) {
        case types.CHANGE_FILTER:
            return { filter: action.filter };
        default:
            return state;
    }
}
