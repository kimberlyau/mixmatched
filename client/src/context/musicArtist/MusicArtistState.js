import React, { useReducer } from 'react';
import axios from 'axios';
import MusicArtistContext from './musicArtistContext';
import musicArtistReducer from './musicArtistReducer';

import { ADD_ARTIST, DELETE_ARTIST, GET_ARTISTS, ARTIST_ERROR } from '../types';

const MusicArtistState = (props) => {
    const initialState = {
        artists: [],
        current: null,
        error: null,
    };

    const [state, dispatch] = useReducer(musicArtistReducer, initialState);

    // Get Single Artist
    const getArtist = async (username) => {
        // Call MongoDB
        // const res = await axios.get(
        //     `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        // );
        // dispatch({
        //     type: GET_ARTIST,
        //     // payload: res.data,
        // });
    };

    // Get All Music Artists
    const getMusicArtists = async () => {
        try {
            const res = await axios.get('/api/musicArtists');

            dispatch({ type: GET_ARTISTS, payload: res.data });
        } catch (error) {
            dispatch({ type: ARTIST_ERROR, payload: error.response.msg });
        }
    };

    // Add Music Artist
    const addMusicArtist = async (artist) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/musicArtists', artist, config);

            dispatch({ type: ADD_ARTIST, payload: res.data });
        } catch (error) {
            alert(error.response.msg);
            dispatch({ type: ARTIST_ERROR, payload: error.response.msg });
        }
    };

    // Delete Music Artist

    return (
        <MusicArtistContext.Provider
            value={{
                artists: state.artists,
                error: state.error,
                addMusicArtist,
                getMusicArtists,
            }}
        >
            {props.children}
        </MusicArtistContext.Provider>
    );
};

export default MusicArtistState;
