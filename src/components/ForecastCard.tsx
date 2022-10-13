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
    const conditionIcon = futureDay.day?.condition?.icon;
    const temperatureMax = futureDay.day?.maxtemp_c?.toPrecision(2);
    const temperatureMin = futureDay.day?.mintemp_c?.toPrecision(2);
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='forecast-card'>
            <p className='forecast-card__date'>{date}</p>
            <img src={conditionIcon} alt="condition" className='forecast-card__condition-icon'/>
            <div className='forecast-card__temperature'>
                <p className='forecast-card__temperature-max'>{temperatureMax}{degree}</p>
                <p className='forecast-card__temperature-min'>{temperatureMin}{degree}</p>
            </div>
        </div>
    );
};

export default ForecastCard;