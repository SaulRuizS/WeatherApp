import React from 'react';
import ForecastCard from './ForecastCard';
import '../assets/styles/Forecast.scss';

const Forecast = () => {
    return (
        <div className='forecast'>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    );
};

export default Forecast;