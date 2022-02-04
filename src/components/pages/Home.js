import React from 'react';

import { Button, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { LibraryMusic, Search as SearchIcon } from '@mui/icons-material';

// import { ClassNames } from '@emotion/react';
import Search from '../artists/search';

const Home = () => {
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
                startIcon={<LibraryMusic />}
                size='large'
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/artist';
                }}
            >
                Random Artist
            </Button>
            <Typography variant='h1'>mixmatched</Typography>
            <br></br>
            <Search />
            <br></br>
            <Button
                variant='contained'
                endIcon={<SearchIcon />}
                onClick={() => {
                    console.log('search clicked');
                    // Parse through let chipList = document.getElementsByClassName("MuiChip-label")
                }}
            >
                Search
            </Button>
        </div>
    );
};

export default Home;
