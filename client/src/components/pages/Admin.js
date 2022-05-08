import React from 'react';
import './Admin.css';

import { Button, Grid, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import BasicCard from '../card';

import { Events } from '../events/Events';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Admin = () => {
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
                        window.location.href = '/';
                    }}
                >
                    Home
                </Button>
            </div>
            <div
                style={{
                    width: '60%',
                }}
            >
                <Typography variant='h4'>Modify Event Information</Typography>
                <br></br>
                <Grid container spacing={2}>
                    <Events />
                </Grid>
            </div>
        </div>
    );
};

export default Admin;
