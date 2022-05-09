import React, { useState, useContext } from 'react';
import MusicEventContext from '../../context/musicEvent/musicEventContext';

const EventForm = () => {
    const musicEventContext = useContext(MusicEventContext);

    const [event, setEvent] = useState({
        name: '',
        description: '',
    });

    const { name, description } = event;

    const onChange = (e) =>
        setEvent({ ...event, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        musicEventContext.addMusicEvent(event);
        setEvent({
            name: '',
            description: '',
        });
    };
    return (
        <form onSubmit={onSubmit}>
            <h2>Add Music Event</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                defaultValue=''
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='City, USA'
                description='description'
                defaultValue=''
                onChange={onChange}
            />
            <div>
                <input type='submit' value='Add Event' />
            </div>
        </form>
    );
};

export default EventForm;
