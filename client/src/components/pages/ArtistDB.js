import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistDB.css';

import { Button, Grid, Typography } from '@mui/material';
import { Home, Logout, Event } from '@mui/icons-material';
import BasicCard from '../card';

import { Artists } from '../artists/Artists';
import ArtistForm from '../artists/ArtistForm';
import AuthContext from '../../context/auth/authContext';

const ArtistDB = () => {
    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    // TODO: Move Logout to Footer component
    const onLogout = () => {
        logout();
        navigate('/');
    };

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
                <Button
                    color='primary'
                    startIcon={<Event />}
                    size='large'
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/admin');
                    }}
                >
                    Modify Events
                </Button>
            </div>
            <div
                style={{
                    width: '60%',
                }}
            >
                <Typography variant='h4'>Modify Artist Information</Typography>
                <br></br>

                <Artists />

                <ArtistForm />
            </div>
            <div id='footer'>
                <Button
                    color='primary'
                    startIcon={<Logout />}
                    size='large'
                    onClick={onLogout}
                >
                    Log Out
                </Button>
            </div>
        </div>
    );
};

export default ArtistDB;
