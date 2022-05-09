import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

import { Button, Grid, Typography } from '@mui/material';
import { Home, Logout } from '@mui/icons-material';
import BasicCard from '../card';

import { Events } from '../events/Events';
import EventForm from '../events/EventForm';
import AuthContext from '../../context/auth/authContext';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const Admin = () => {
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

                <EventForm />
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

export default Admin;
