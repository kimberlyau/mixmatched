import React from 'react';

const MatchItems = (props) => {
    const { events, topThree } = props;

    console.log(topThree);

    console.log(topThree.artistData[0]);

    let artistIndex = 0;

    return (
        <div>
            <h1 className='match-heading'>
                Your top match is {events[topThree.indices[0]]?.name}
            </h1>
            <div className='three-col'>
                {topThree.indices.map((eventIndex) => (
                    <a href='/' className='result-card'>
                        <div>
                            <h1>{events[eventIndex]?.name}</h1>
                            <h2>{events[eventIndex]?.description}</h2>
                            <h3>${events[eventIndex]?.cost}</h3>
                            <p>
                                Matched Artists(
                                {topThree.artistData[artistIndex].length}):
                            </p>
                            <p>
                                {topThree.artistData[artistIndex++].join(', ')}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MatchItems;
