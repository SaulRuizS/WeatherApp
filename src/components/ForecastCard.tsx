import React from 'react';
import { FutureDay } from '../models/ForecastData.model';
import '../assets/styles/ForecastCard.scss';

type ForecastCardProps = {
    futureDay: FutureDay,
}

const ForecastCard = ({
    futureDay
}:ForecastCardProps) => {

    function formatDate() {
        const dateSplited = futureDay.date?.split(' ');
        const dateFormated = dateSplited?.[0].replace('-','/').replace('-','/');
        return dateFormated;
    }

    let date = formatDate();
    let temperature = futureDay.temperature;
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