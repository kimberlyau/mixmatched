import React from 'react';
import { PropTypes } from 'prop-types';

import { Button, Card, Grid } from '@mui/material';

const EventItem = ({ event }) => {
    const { name, cost, description } = event;

    return (
        <Grid item xs={4} s={6}>
            <Card
                variant='contained'
                sx={{ px: 1, pt: 1, pb: 2, backgroundColor: '#D7D3D3' }}
            >
                <h1>{name}</h1>
                <h2>{description}</h2>
                <h3>${cost}</h3>
                <Button
                    variant='contained'
                    sx={{ backgroundColor: '#1976d2b2' }}
                >
                    View
                </Button>
            </Card>
        </Grid>
    );
};

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventItem;
