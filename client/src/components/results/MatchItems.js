import React from 'react';

const MatchItems = (props) => {
    const { events, topThree } = props;

    return (
        <div>
            <h1 className='match-heading'>
                Your top match is {events[topThree[0]]?.name}
            </h1>
            <div className='three-col'>
                {topThree.map((eventIndex) => (
                    <a href='/' className='result-card'>
                        <div>
                            <h1>{events[eventIndex]?.name}</h1>
                            <h2>{events[eventIndex]?.description}</h2>
                            <h3>${events[eventIndex]?.cost}</h3>
                            <p>Matched Artists:</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis quis lacinia nulla, eget
                                aliquam massa.
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MatchItems;
