import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import MusicEventContext from './musicEventContext';
import musicEventReducer from './musicEventReducer';

import { ADD_EVENT, DELETE_EVENT, GET_EVENT } from '../types';

const MusicEventState = (props) => {
    const initialState = {
        events: [
            {
                name: 'Lollapalooza',
                cost: 400,
                artists: [],
            },
            {
                name: 'EDC',
                cost: 200,
                artists: [],
            },
            {
                name: 'HARD Summer',
                cost: 100,
                artists: [],
            },
        ],
        current: null,
    };

    const [state, dispatch] = useReducer(musicEventReducer, initialState);

    // Get Single Event
    const getEvent = async (username) => {
        // Call MongoDB
        // const res = await axios.get(
        //     `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        // );

        dispatch({
            type: GET_EVENT,
            // payload: res.data,
        });
    };

    // Add Music Event
    const addMusicEvent = (event) => {
        event.id = v4();
        dispatch({ type: ADD_EVENT, payload: event });
    };

    // Delete Music Event

    return (
        <MusicEventContext.Provider
            value={{
                events: state.events,
                addMusicEvent,
            }}
        >
            {props.children}
        </MusicEventContext.Provider>
    );
};

export default MusicEventState;
