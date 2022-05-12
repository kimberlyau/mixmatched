import React, { useContext, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MusicArtistContext from '../../context/musicArtist/musicArtistContext';

// import festivalData from '../../assets/files/festival-artist-old.json';

export default function Search() {
    const musicArtistContext = useContext(MusicArtistContext);

    const { artists, getMusicArtists } = musicArtistContext;

    useEffect(() => {
        getMusicArtists();
        // eslint-disable-next-line
    }, []);

    return (
        <Autocomplete
            multiple
            // limitTags={3}
            id='multiple-limit-tags'
            options={artists.sort((a, b) => a.name.localeCompare(b.name))}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Search Artists'
                    placeholder='Scroll to see more'
                />
            )}
        />
    );
}
