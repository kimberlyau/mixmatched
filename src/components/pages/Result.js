import React from 'react';
import { useLocation } from 'react-router-dom';
// import artistData from '../../assets/files/frank-ocean.json';

import { Button, Grid, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import GoogleChart from '../results/GoogleChart';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Artist = () => {
    let { state } = useLocation();
    let { dataArray } = state;
    // alert(dataArray);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
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
                <Grid>
                    <Grid item>
                        <Typography variant='h1'>Matches</Typography>
                    </Grid>
                    <Grid item>
                        <GoogleChart dataArray={dataArray} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Artist;
