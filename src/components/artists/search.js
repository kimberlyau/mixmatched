import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Search() {
    return (
        <Autocomplete
            multiple
            // limitTags={3}
            id='multiple-limit-tags'
            options={artistList}
            getOptionLabel={(option) => option.title}
            defaultValue={[artistList[3], artistList[2], artistList[1]]} //Random value
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Search Artists'
                    placeholder='See more'
                />
            )}
        />
    );
}

// TODO: Grab from JSON
const artistList = [
    { title: 'The Strokes' },
    { title: 'Tyler the Creator' },
    { title: 'Glass Animals' },
    { title: 'Kaytranada' },
    { title: 'Khruangbin' },
    { title: 'SG Lewis' },
    { title: 'Flo Milli' },
    { title: 'Vampire Weekend' },
    { title: 'Zhu' },
    { title: 'Doja Cat' },
];
