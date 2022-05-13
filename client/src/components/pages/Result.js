import React, { useContext, useEffect } from 'react';
import './Result.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import artistData from '../../assets/files/frank-ocean.json';

import { Button, Card } from '@mui/material';
import { Home } from '@mui/icons-material';

import Matches from '../results/Matches';

import MusicEventContext from '../../context/musicEvent/musicEventContext';
import MusicArtistContext from '../../context/musicArtist/musicArtistContext';

const Result = () => {
    const navigate = useNavigate();
    let { state } = useLocation();

    const musicEventContext = useContext(MusicEventContext);
    const musicArtistContext = useContext(MusicArtistContext);

    const { events, getMusicEvents } = musicEventContext;
    const { artists, getMusicArtists } = musicArtistContext;

    useEffect(() => {
        getMusicEvents();
        getMusicArtists();
        // eslint-disable-next-line
    }, []);

    console.log(events);

    // Chosen artists string array from search selection
    const { chosenArtistArray } = state;
    console.log('Chosen artist array: ' + chosenArtistArray);

    // Filter for chosen artists using DB information
    let chosenArtistData = artists.filter((artist) =>
        chosenArtistArray.includes(artist.name)
    );

    console.log(chosenArtistData);

    // Ensure events loaded AND chosenArtistData is populated
    // if (events.length > 0 && chosenArtistData.length === chosenArtistArray.length) {
    //     console.log('Successful load');
    //     // Iterate through music events to see highest match
    //     // let eventCounter = [];
    //     // let foundArtist;
    //     // for (let i = 0; i <= events.length; i++) {
    //     //     // Init event counter
    //     //     eventCounter[i] = 0;
    //     //     for (let j = 0; j <= chosenArtistData.length; j++) {
    //     //         foundArtist = events[i].artists.findIndex(
    //     //             (e) => e.artistId === chosenArtistData[j]._id
    //     //         );
    //     //         if (foundArtist !== -1) {
    //     //             eventCounter++;
    //     //         }
    //     //     }
    //     // }
    // }

    // console.log(`${events[0]} had ${eventCounter} many matches`);
    // console.log(`${events[1]} had ${eventCounter} many matches`);

    return (
        <div
            className='result-page'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Navbar */}
            <div id='navbar'>
                <Button
                    color='primary'
                    startIcon={<Home />}
                    size='large'
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                >
                    Home
                </Button>
            </div>
            {/* Results content */}
            <div className='result-container'>
                <Matches
                    events={events.sort((a, b) => a.cost - b.cost)}
                    artists={artists}
                    chosenArtistArray={chosenArtistArray}
                    chosenArtistData={chosenArtistData}
                />

                {/* Artists You Chose */}
                <div>
                    <h1 className='artist-heading'>Artists You Chose</h1>
                    <div className='artist-chosen-container'>
                        <div className='artist-grid'>
                            {chosenArtistArray.map((artist) => (
                                <Card
                                    key={artist.name}
                                    sx={{ p: 2, backgroundColor: '#D7D3D3' }}
                                >
                                    {artist}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
