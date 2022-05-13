import React from 'react';
import { Grid, Typography } from '@mui/material';

const ArtistData = (props) => {
    let spotifyArtist = localStorage.getItem('spotifyArtistName');
    console.log(spotifyArtist);
    if (typeof spotifyArtist === 'object' && spotifyArtist) {
        console.log('It is an object');
        console.log(spotifyArtist);
    } else console.log(typeof spotifyArtist);

    return (
        <Grid container rowSpacing={3} columnSpacing={{ md: 12 }}>
            <Grid item xs={12} md={6}>
                <div>
                    <Typography variant='h2'>{spotifyArtist}</Typography>
                    {/* <img
                        src={spotifyArtist.images[0].url}
                        style={{
                            height: '40vh',
                        }}
                        alt={spotifyArtist.name}
                    /> */}
                </div>
            </Grid>
            {/* <Grid item xs={12} md={6}>
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
                                        spotifyArtist.tracks[0].album.images[0].url
                                    }
                                    style={{ width: '100px' }}
                                    alt={spotifyArtist.tracks[0].name}
                                />
                                <p>{spotifyArtist.tracks[0].name}</p>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            {' '}
                            <div>
                                <img
                                    src={
                                        spotifyArtist.tracks[1].album.images[0].url
                                    }
                                    style={{ width: '100px' }}
                                    alt={spotifyArtist.tracks[1].name}
                                />
                                <p>{spotifyArtist.tracks[1].name}</p>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            {' '}
                            <div>
                                <img
                                    src={
                                        spotifyArtist.tracks[2].album.images[0].url
                                    }
                                    style={{ width: '100px' }}
                                    alt={spotifyArtist.tracks[2].name}
                                />
                                <p>{spotifyArtist.tracks[2].name}</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='show-lg'>
                    <Typography variant='h5' margin={2}>
                        Related Artists
                    </Typography>
                </div>
            </Grid> */}
        </Grid>
    );
};

export default ArtistData;
