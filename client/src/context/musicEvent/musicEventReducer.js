import { ADD_EVENT, DELETE_EVENT, EVENT_ERROR, GET_EVENTS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };

        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case EVENT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
