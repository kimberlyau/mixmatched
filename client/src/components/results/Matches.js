import React from 'react';
import MatchItems from './MatchItems';

const Matches = ({ events, artists, chosenArtistArray, chosenArtistData }) => {
    const getTopMatches = () => {
        // Iterate through music events to see highest match
        if (
            events.length > 0 &&
            chosenArtistArray.length > 0 &&
            chosenArtistData.length === chosenArtistArray.length
        ) {
            console.log('Successful load');

            // Init event counter with 0
            let eventCounter = [];
            (eventCounter = []).length = events.length;
            eventCounter.fill(0);

            let topThreeArray = [];

            let foundArtist;
            let currArray = [];
            for (let i = 0; i < events.length; i++) {
                for (let j = 0; j < chosenArtistData.length; j++) {
                    foundArtist = events[i].artists.findIndex(
                        (e) => e.artistId === chosenArtistData[j]._id
                    );
                    if (foundArtist !== -1) {
                        eventCounter[i]++;
                        currArray.push(chosenArtistData[j].name);
                    }
                }

                // Add artist matches to topThreeArray
                topThreeArray.push(currArray);
                currArray = [];
            }

            console.log('Array object');
            console.log(topThreeArray);

            // Console log counter
            for (let i = 0; i < events.length; i++) {
                console.log(`${eventCounter[i]} matches for ${events[i].name}`);
            }

            // Get top 3 matches
            let topThree = [];
            (topThree = []).length = 3;
            topThree.fill(-1);

            let max = 0,
                index = 0,
                assignCounter = 0;

            while (
                topThree[0] === -1 ||
                topThree[1] === -1 ||
                topThree[2] === -1
            ) {
                // Compute max of array
                max = Math.max(...eventCounter);
                index = eventCounter.indexOf(max);

                if (index !== -1) {
                    // Found top three
                    topThree[assignCounter] = index;
                    assignCounter++;

                    // Remove max from eventCounter
                    eventCounter[index] = -1;
                }
            }

            return {
                artistData: [
                    topThreeArray[topThree[0]],
                    topThreeArray[topThree[1]],
                    topThreeArray[topThree[2]],
                ],
                indices: topThree,
            };
        }
    };

    return (
        <div>
            {getTopMatches() !== undefined ? (
                <MatchItems topThree={getTopMatches()} events={events} />
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default Matches;
