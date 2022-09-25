import React from 'react';
import DateAndLocation from '../components/DateAndLocation';
import Temperature from '../components/Temperature';
import MoreData from '../components/MoreData';
import ForecastSection from '../containers/ForecastSection';
import '../assets/styles/Card.scss';

const Card = () => {

    return (
        <div className='card'>
            <DateAndLocation />
            <Temperature />
            <MoreData />
            <ForecastSection />
        </div>
    );
};

export default Card;