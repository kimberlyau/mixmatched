import React from 'react';
import './Result.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import artistData from '../../assets/files/frank-ocean.json';

import { Button, Card } from '@mui/material';
import { Home } from '@mui/icons-material';
// import GoogleChart from '../results/GoogleChart';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Result = () => {
    const navigate = useNavigate();

    let { state } = useLocation();
    let { dataArray } = state;
    // alert(dataArray);

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
                <h1 className='match-heading'>Your top match is *event*</h1>
                <div className='three-col'>
                    <a href='/' className='result-card'>
                        <div>
                            <h1>Event Name</h1>
                            <h2>Location</h2>
                            <h3>$ Cost</h3>
                            <p>Matched Artists:</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis quis lacinia nulla, eget
                                aliquam massa.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='result-card'>
                        <div>
                            <h1>Event Name</h1>
                            <h2>Location</h2>
                            <h3>$ Cost</h3>
                            <p>Matched Artists:</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis quis lacinia nulla, eget
                                aliquam massa.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='result-card'>
                        <div>
                            <h1>Event Name</h1>
                            <h2>Location</h2>
                            <h3>$ Cost</h3>
                            <p>Matched Artists:</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis quis lacinia nulla, eget
                                aliquam massa.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Artists You Chose */}
                <h1 className='artist-heading'>Artists You Chose</h1>
                <div className='artist-chosen-container'>
                    <div className='artist-grid'>
                        {dataArray.map((artist) => (
                            <Card sx={{ p: 2, backgroundColor: '#D7D3D3' }}>
                                {artist}
                            </Card>
                        ))}
                    </div>
                </div>

                {/* <Grid>
                    <Grid item>
                        <Typography variant='h1'>Matches</Typography>
                    </Grid>
                    <Grid item>
                        <GoogleChart dataArray={dataArray} />
                    </Grid>
                </Grid> */}
            </div>
        </div>
    );
};

export default Result;
