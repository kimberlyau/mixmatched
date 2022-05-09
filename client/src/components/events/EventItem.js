import React from 'react';
import { PropTypes } from 'prop-types';

import { Button, Card, Grid } from '@mui/material';

const EventItem = ({ event }) => {
    const { name, description } = event;

    return (
        <Grid item xs={4} s={6}>
            <Card variant='contained' sx={{ px: 2, pt: 2, pb: 4 }}>
                <h2>{name}</h2>
                <Button variant='outlined'>View</Button>
            </Card>
        </Grid>
    );
};

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventItem;
