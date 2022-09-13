import React from 'react';
import '../assets/styles/MoreData.scss';

const MoreData = () => {

    let humidity:number = 0;
    let wind:number = 0;
    let precipitation:number = 0;

    return (
        <div className='more-data'>
            <p className='humidity'>Humidity: {humidity}%</p>
            <p className='wind'>Wind: {wind} km/h</p>
            <p className='precipitation'>Precipitation: {precipitation}%</p>
        </div>
    );
};

export default MoreData;