import React, { useState, useContext } from 'react';
import MusicArtistContext from '../../context/musicArtist/musicArtistContext';

const ArtistForm = () => {
    const musicArtistContext = useContext(MusicArtistContext);

    const [artist, setArtist] = useState({
        name: '',
        spotifyLookup: '',
    });

    const { name, description } = artist;

    const onChange = (e) =>
        setArtist({ ...artist, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        musicArtistContext.addMusicArtist(artist).then(() => setArtist(artist));
        // musicArtistContext.addMusicArtist(artist);
        setArtist({
            name: '',
            spotifyLookup: '',
        });

        // Clear the input values after submit
        document.getElementById('artist-name-input').value = null;
        document.getElementById('spotify-input').value = null;
    };
    return (
        <form className='artist-form' onSubmit={onSubmit}>
            <h2>Add Music Artist</h2>
            <input
                id='artist-name-input'
                type='text'
                placeholder='Name'
                name='name'
                defaultValue=''
                onChange={onChange}
            />
            <input
                id='spotify-input'
                type='text'
                placeholder='Spotify ID'
                name='spotifyLookup'
                defaultValue=''
                onChange={onChange}
            />
            <div>
                <input type='submit' value='Add Artist' />
            </div>
        </form>
    );
};

export default ArtistForm;
