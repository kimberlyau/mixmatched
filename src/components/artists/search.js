import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import festivalData from '../../assets/files/festival-artist-old.json';

export default function Search() {
    console.log(festivalData.festivals.length);

    let artistList = [];
    let artistLength = 0;

    // Iterate through all festivals
    for (let i = 0; i < festivalData.festivals.length; i++) {
        // Iterate through each artist per festival
        for (let j = 0; j < festivalData.festivals[i].artists.length; j++) {
            // Add to artist array if not duplicate

            if (
                artistList
                    .map((artistObj) => artistObj.title)
                    .indexOf(festivalData.festivals[i].artists[j].title) === -1
            ) {
                artistList.push(festivalData.festivals[i].artists[j]);
            }
        }
    }

    artistLength = artistList.length;

    // Alphabetize array
    artistList.sort((artistA, artistB) =>
        artistA.title > artistB.title ? 1 : -1
    );

    return (
        <Autocomplete
            multiple
            // limitTags={3}
            id='multiple-limit-tags'
            options={artistList}
            getOptionLabel={(option) => option.title}
            defaultValue={[
                artistList[Math.floor(Math.random() * artistLength)],
            ]} //Random value
            isOptionEqualToValue={(option, value) =>
                option.title === value.title
            }
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
