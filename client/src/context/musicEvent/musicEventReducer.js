import { ADD_EVENT, DELETE_EVENT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        default:
            return state;
    }
};
