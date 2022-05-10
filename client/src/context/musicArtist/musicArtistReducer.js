import { ADD_ARTIST, DELETE_ARTIST, ARTIST_ERROR, GET_ARTISTS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_ARTIST:
            return {
                ...state,
                artists: [...state.artists, action.payload],
            };

        case GET_ARTISTS:
            return {
                ...state,
                artists: action.payload,
            };
        case ARTIST_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
