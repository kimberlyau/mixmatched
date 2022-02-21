import * as React from 'react';
import { Box, Card, CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EventEdit from './pages/Admin_Event';

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 100 }}>
            <CardActionArea href='/edit'>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                    ></Typography>
                    <Typography variant='h5' component='div'>
                        Event
                    </Typography>
                    <Typography color='text.secondary'>20XX</Typography>
                    <Typography variant='body2'>City, State</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
