import React from 'react';
import ForecastCard from '../components/ForecastCard';
import '../assets/styles/Forecast.scss';

const ForecastSection = () => {
    return (
        <div className='forecast'>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    );
};

export default ForecastSection;