import React, { useReducer } from 'react';
import uuid from 'uuid';
import MusicEventContext from './musicEventContext';
import musicEventReducer from './musicEventReducer';

import { ADD_EVENT, DELETE_EVENT } from '../types';

const MusicEventState = (props) => {
    const initialState = {
        musicEvents: [
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
    };

    const [state, dispatch] = useReducer(musicEventReducer, initialState);

    // Add Music Event

    // Delete Music Event

    return (
        <MusicEventContext.Provider
            value={{
                musicEvents: state.musicEvents,
            }}
        >
            {props.children}
        </MusicEventContext.Provider>
    );
};

export default MusicEventState;
