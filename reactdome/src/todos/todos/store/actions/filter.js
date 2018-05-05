import * as types from '../action_types';

export default {
    changeFilter(filter) {
        return { type: types.CHANGE_FILTER, filter };
    }
};
