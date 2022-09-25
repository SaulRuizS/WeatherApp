import React from 'react';
import '../assets/styles/ForecastCard.scss';

const ForecastCard = () => {

    let date = 'Tuesday';
    let temperature = 0;
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='forecast-card'>
            <p className='forecast-card__date'>{date}</p>
            <p className='forecast-card__temperature'>{temperature}{degree}</p>
        </div>
    );
};

export default ForecastCard;