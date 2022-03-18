import React from 'react';
import './Admin_Event.css';

import { Box, Button, Modal, Typography } from '@mui/material';
import { Add, ArrowBack, Home } from '@mui/icons-material';
import FullFeaturedCrudGrid from '../table';
// import { GridFilterModel } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
// import { ClassNames } from '@emotion/react';

const EventEdit = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            <div id='content'>
                <div id='grid-container'>
                    <FullFeaturedCrudGrid />
                </div>
                <div>
                    <Button
                        color='primary'
                        variant='outlined'
                        startIcon={<Add />}
                        size='large'
                        onClick={handleOpen}
                    >
                        Add Artist
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
                    >
                        <Box
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,
                                backgroundColor: '#f5f5f5',
                                color: '#1976d2',
                                border: '2px solid rgba(25, 118, 210, 0.5)',
                                boxShadow: 24,
                                padding: 12,
                            }}
                        >
                            <Typography
                                id='modal-modal-title'
                                variant='h6'
                                component='h2'
                            >
                                Text in a modal
                            </Typography>
                            <Typography
                                id='modal-modal-description'
                                sx={{ mt: 2 }}
                            >
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                    <br></br>
                    <br></br>
                    <Button
                        color='primary'
                        startIcon={<ArrowBack />}
                        size='large'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/admin';
                        }}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventEdit;
