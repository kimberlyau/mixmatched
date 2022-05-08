import { Contacts } from '@mui/icons-material';
import EventItem from './EventItem';
import React, { Fragment, useContext } from 'react';
import MusicEventContext from '../../context/musicEvent/musicEventContext';

export const Events = () => {
    const musicEventContext = useContext(MusicEventContext);

    const { musicEvents } = musicEventContext;

    return (
        <Fragment>
            {musicEvents.map((event) => (
                <EventItem key={event.name} event={event} />
            ))}
        </Fragment>
    );
};
