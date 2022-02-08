import React from 'react';
import Chart from 'react-google-charts';

// TODO: Move functions??
const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
};

// Will be real match data
const getMatches = (max) => {
    return Math.floor(Math.random() * max);
};

// Source: https://www.positronx.io/react-js-google-stacked-bar-chart-example-tutorial/
const GoogleChart = (props) => {
    let artistList = props.dataArray;

    // Pass in this data
    let data = [];
    // Header element
    data.push([
        'Artist',
        'Match Percentage',
        { role: 'style' },
        { role: 'annotation' },
    ]);

    let currMatches;

    for (let i = 0; i < artistList.length; i++) {
        currMatches = getMatches(10);
        data.push([
            artistList[i],
            currMatches,
            getRandomColor(),
            `${currMatches}`,
        ]);
    }

    // const data = [
    //     ['Element', 'Density', { role: 'style' }, { role: 'annotation' }],
    //     ['Copper', 8.94, '#b87333', 'Cu'],
    //     ['Silver', 10.49, 'silver', 'Ag'],
    //     ['Gold', 19.3, 'gold', 'Au'],
    //     ['Platinum', 21.45, 'color: #e5e4e2', 'Pt'],
    // ];
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
                        title: 'Match Percentage',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Artist',
                    },
                    backgroundColor: '#f5f5f5',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};

export default GoogleChart;
