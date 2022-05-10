import React, { useContext } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import { Button, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import {
    AdminPanelSettings,
    LibraryMusic,
    Search as SearchIcon,
} from '@mui/icons-material';

// import { ClassNames } from '@emotion/react';
import Search from '../artists/search';

const Home = () => {
    const navigate = useNavigate();

    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <Typography variant='h1'>mixmatched</Typography>
                <br></br>
                <Search />
                <br></br>
                <Button
                    variant='contained'
                    endIcon={<SearchIcon />}
                    onClick={() => {
                        console.log('search clicked');
                        // Get HTML items in search bar
                        let chipHTMLCollection =
                            document.getElementsByClassName('MuiChip-label');
                        // Create array innerHTML of each HTML collection item
                        let chipArray = Array.from(
                            chipHTMLCollection,
                            (x) => x.innerHTML
                        );
                        // alert(chipArray);
                        navigate('/result', {
                            state: { dataArray: chipArray },
                        });
                    }}
                >
                    Search
                </Button>
                <div id='random-artist'>
                    <Button
                        color='primary'
                        startIcon={<LibraryMusic />}
                        size='large'
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/artist');
                        }}
                    >
                        Explore Random Artist
                    </Button>
                </div>
            </div>
            <div id='footer'>
                <Button
                    color='primary'
                    startIcon={<AdminPanelSettings />}
                    size='large'
                    onClick={(e) => {
                        e.preventDefault();
                        if (isAuthenticated) {
                            navigate('/admin');
                        } else {
                            navigate('/login');
                        }
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default Home;
