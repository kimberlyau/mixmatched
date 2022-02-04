import React from 'react';
import artistData from '../../assets/files/frank-ocean.json';

import { Button, Grid, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Artist = () => {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <Button
                color='primary'
                startIcon={<Home />}
                size='large'
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}
            >
                Home
            </Button>
            <Typography variant='h2'>{artistData.name}</Typography>
            <img
                src={artistData.images[0].url}
                style={{ width: '250px' }}
                alt={artistData.name}
            />
            <Typography variant='h4' margin={2}>
                Top Tracks
            </Typography>
            <Grid container spacing={3}>
                <Grid item>
                    <div>
                        <img
                            src={artistData.tracks[0].album.images[0].url}
                            style={{ width: '100px' }}
                            alt={artistData.tracks[0].name}
                        />
                        <p>{artistData.tracks[0].name}</p>
                    </div>
                </Grid>
                <Grid item>
                    {' '}
                    <div>
                        <img
                            src={artistData.tracks[1].album.images[0].url}
                            style={{ width: '100px' }}
                            alt={artistData.tracks[1].name}
                        />
                        <p>{artistData.tracks[1].name}</p>
                    </div>
                </Grid>
                <Grid item>
                    {' '}
                    <div>
                        <img
                            src={artistData.tracks[2].album.images[0].url}
                            style={{ width: '100px' }}
                            alt={artistData.tracks[2].name}
                        />
                        <p>{artistData.tracks[2].name}</p>
                    </div>
                </Grid>
                <Grid item>
                    {' '}
                    <div>
                        <img
                            src={artistData.tracks[3].album.images[0].url}
                            style={{ width: '100px' }}
                            alt={artistData.tracks[3].name}
                        />
                        <p>{artistData.tracks[3].name}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Artist;
