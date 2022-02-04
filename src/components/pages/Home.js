import React, { Fragment } from 'react';

import {
    Button,
    ButtonGroup,
    Chip,
    FormControl,
    Input,
    InputLabel,
    Stack,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
// import Search from '../users/Search';
// import Users from '../users/Users';

const handleClick = () => {
    console.info('You clicked the Chip.');
};

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

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
            <Typography variant='h1'>mixmatched</Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor='standard-adornment-search'>
                    Search
                </InputLabel>
                <Input
                    id='standard-adornment-search'
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                />
            </FormControl>
            <Stack direction='row' spacing={1} m={2}>
                <Chip
                    label='Clickable Deletable'
                    onClick={handleClick}
                    onDelete={handleDelete}
                    variant='outlined'
                />
                <Chip
                    label='Clickable Deletable'
                    onClick={handleClick}
                    onDelete={handleDelete}
                    variant='outlined'
                />
                <Chip
                    label='Clickable Deletable'
                    onClick={handleClick}
                    onDelete={handleDelete}
                    variant='outlined'
                />
                <Chip
                    label='Clickable Deletable'
                    onClick={handleClick}
                    onDelete={handleDelete}
                    variant='outlined'
                />
            </Stack>
        </div>
    );
};

export default Home;
