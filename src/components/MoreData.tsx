import React from 'react';
import '../assets/styles/MoreData.scss';

const MoreData = () => {
    return (
        <div className='more-data'>
            <p className='humidity'>Humidity: 41%</p>
            <p className='wind'>Wind: 11 km/h</p>
            <p className='rain-probability'>Rain Prob: 1%</p>
        </div>
    );
};

export default MoreData;