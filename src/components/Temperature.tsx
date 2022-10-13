import React from 'react';
import { ForecastData } from '../models/ForecastData.model';
import '../assets/styles/Temperature.scss';

type temperatureProps = {
    temperature: number|undefined,
    conditionIcon: string|undefined,
}

const Temperature = ({
    temperature,
    conditionIcon,
}:temperatureProps) => {

    let temp = temperature?.toPrecision(2);
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='temperature'>
            <div className='temperature__icon'>
                <img src={conditionIcon} alt="condition" className='temperature__icon-img'/>
            </div>
            <h1>{temp}<span>{degree}</span></h1>
        </div>
    );
};

export default Temperature;