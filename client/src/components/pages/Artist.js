import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Artist.css';
import artistData from '../../assets/files/frank-ocean.json';

import { Button, Grid, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import getSingleSpotifyArtist from '../../utils/spotifyAPI';

// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Artist = () => {
    const navigate = useNavigate();
    let artistId = '0Vw76uk7P8yVtTClWyOhac';

    let responseData = getSingleSpotifyArtist((data) => {
        console.log(data);
        return data;
    }, artistId);

    console.log(responseData);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
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
            <div>
                <Grid container rowSpacing={3} columnSpacing={{ md: 12 }}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant='h2'>
                                {artistData.name}
                            </Typography>
                            <img
                                src={artistData.images[0].url}
                                style={{
                                    height: '40vh',
                                }}
                                alt={artistData.name}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant='h5' margin={2}>
                                Top Tracks
                            </Typography>
                            <Grid
                                container
                                spacing={3}
                                align='center'
                                justify='center'
                                alignItems='center'
                            >
                                <Grid item xs={4}>
                                    <div>
                                        <img
                                            src={
                                                artistData.tracks[0].album
                                                    .images[0].url
                                            }
                                            style={{ width: '100px' }}
                                            alt={artistData.tracks[0].name}
                                        />
                                        <p>{artistData.tracks[0].name}</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    {' '}
                                    <div>
                                        <img
                                            src={
                                                artistData.tracks[1].album
                                                    .images[0].url
                                            }
                                            style={{ width: '100px' }}
                                            alt={artistData.tracks[1].name}
                                        />
                                        <p>{artistData.tracks[1].name}</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    {' '}
                                    <div>
                                        <img
                                            src={
                                                artistData.tracks[2].album
                                                    .images[0].url
                                            }
                                            style={{ width: '100px' }}
                                            alt={artistData.tracks[2].name}
                                        />
                                        <p>{artistData.tracks[2].name}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        {/* <div className='show-lg'>
                            <Typography variant='h5' margin={2}>
                                Related Artists
                            </Typography>
                        </div> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Artist;
