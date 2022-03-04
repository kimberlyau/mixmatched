import React from 'react';
import Chart from 'react-google-charts';

// import festivalData from '../../assets/files/festival-artist-old.json';
import festivalData from '../../assets/files/festival-artist.json';
import festivalEventData from '../../assets/files/festivals.json';

// https://stackoverflow.com/questions/13833463/how-do-i-generate-a-random-hex-code-that-of-a-lighter-color-in-javascript
function randHex() {
    return (Math.floor(Math.random() * 56) + 150).toString(16);
}

function randColor() {
    return `#${randHex() + '' + randHex() + '' + randHex()}`;
}

const getFestivalMatches = (festival, artistList) => {
    let festivalMatch = 0;
    let festivalMatchList = [];

    // Check match for particular festival
    for (let i = 0; i < artistList.length; i++) {
        // Check if artist is in festival
        if (festival.indexOf(artistList[i]) !== -1) {
            festivalMatch++;
            festivalMatchList.push(artistList[i]);
        }
    }
    return [festivalMatch, festivalMatchList];
};

// Source: https://www.positronx.io/react-js-google-stacked-bar-chart-example-tutorial/
const GoogleChart = (props) => {
    let artistList = props.dataArray;

    // Pass in this data
    let data = [];
    // Header element
    data.push([
        'Event',
        'Match Count',
        { role: 'style' },
        { role: 'annotation' },
    ]);

    let currMatches;
    let matchList = [];

    // Iterate through all festivals
    for (let i = 0; i < festivalEventData.concerts.length; i++) {
        // Get matches for each event
        [currMatches, matchList] = getFestivalMatches(
            festivalData[festivalEventData.concerts[i]],
            artistList
        );

        // Push data into results
        data.push([
            festivalEventData.concerts[i],
            currMatches,
            randColor(),
            `${matchList.join(',')}`,
        ]);
    }

    return (
        <div className='container mt-5'>
            {/* <h2>React Basic Bar Chart with Multiple Series</h2> */}
            <Chart
                width={'700px'}
                height={'320px'}
                chartType='BarChart'
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Matches to Event',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Match Count',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Event',
                    },
                    backgroundColor: '#f5f5f5',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};

export default GoogleChart;
