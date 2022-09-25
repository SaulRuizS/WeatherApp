import React from 'react';
import '../assets/styles/MoreData.scss';

const MoreData = () => {

    let humidity= 0;
    let wind= 0;
    let precipitation= 0;

    return (
        <div className='more-data'>
            <p className='humidity'>Humidity: {humidity}%</p>
            <p className='wind'>Wind: {wind} km/h</p>
            <p className='precipitation'>Precipitation: {precipitation}%</p>
        </div>
    );
};

export default MoreData;