import React from 'react';
import DateAndLocation from './DateAndLocation';
import Temperature from './Temperature';
import MoreData from './MoreData';
import Forecast from './Forecast';
import '../assets/styles/Card.scss';

const Card = () => {
    return (
        <div className='card'>
            <DateAndLocation />
            <Temperature />
            <MoreData />
            <Forecast />
        </div>
    );
};

export default Card;