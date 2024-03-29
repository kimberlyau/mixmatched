import EventItem from './EventItem';
import React, { Fragment, useContext, useEffect } from 'react';
import MusicEventContext from '../../context/musicEvent/musicEventContext';
import './Events.css';

export const Events = () => {
    const musicEventContext = useContext(MusicEventContext);

    const { events, getMusicEvents } = musicEventContext;

    useEffect(() => {
        getMusicEvents();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {events.length ? (
                <div className='events-container'>
                    <div className='events-grid'>
                        {events
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((event) => (
                                <EventItem key={event.name} event={event} />
                            ))}
                    </div>
                </div>
            ) : (
                <div>No events available to display</div>
            )}
        </div>
    );
};
