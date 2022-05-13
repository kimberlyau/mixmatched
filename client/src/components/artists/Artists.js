import { Contacts } from '@mui/icons-material';
import { Card, Grid } from '@mui/material';
import React, { Fragment, useContext, useEffect } from 'react';
import MusicArtistContext from '../../context/musicArtist/musicArtistContext';
import './Artists.css';

export const Artists = () => {
    const musicArtistContext = useContext(MusicArtistContext);

    const { artists, getMusicArtists } = musicArtistContext;

    useEffect(() => {
        getMusicArtists();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {artists.length ? (
                <div className='artists-table-container'>
                    <table className='artists-table'>
                        <tbody id='content'>
                            <tr>
                                <th>Name</th>
                                <th>Spotify ID</th>
                            </tr>
                            {artists
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((artist) => (
                                    <tr>
                                        <td>{artist.name}</td>
                                        <td>{artist.spotifyLookup}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No artists available to display</div>
            )}
        </div>
    );
};
