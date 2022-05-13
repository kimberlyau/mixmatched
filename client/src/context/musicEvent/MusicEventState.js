import React, { useReducer } from 'react';
import axios from 'axios';
import MusicEventContext from './musicEventContext';
import musicEventReducer from './musicEventReducer';

import { ADD_EVENT, DELETE_EVENT, GET_EVENTS, EVENT_ERROR } from '../types';

const MusicEventState = (props) => {
    const initialState = {
        events: [],
        current: null,
        error: null,
    };

    const [state, dispatch] = useReducer(musicEventReducer, initialState);

    // Get Single Event
    const getEvent = async (username) => {
        // Call MongoDB
        // const res = await axios.get(
        //     `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        // );
        // dispatch({
        //     type: GET_EVENT,
        //     // payload: res.data,
        // });
    };

    // Get All Music Events
    const getMusicEvents = async () => {
        try {
            const res = await axios.get('/api/musicEvents');

            dispatch({ type: GET_EVENTS, payload: res.data });
        } catch (error) {
            dispatch({ type: EVENT_ERROR, payload: error.response.msg });
        }
    };

    // Add Music Event
    const addMusicEvent = async (event) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/musicEvents', event, config);

            dispatch({ type: ADD_EVENT, payload: res.data });
        } catch (error) {
            alert(error.response.msg);
            dispatch({ type: EVENT_ERROR, payload: error.response.msg });
        }
    };

    // Delete Music Event

    return (
        <MusicEventContext.Provider
            value={{
                events: state.events,
                error: state.error,
                addMusicEvent,
                getMusicEvents,
            }}
        >
            {props.children}
        </MusicEventContext.Provider>
    );
};

export default MusicEventState;
