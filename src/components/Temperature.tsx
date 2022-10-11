import React from 'react';
import { ForecastData } from '../models/ForecastData.model';
import '../assets/styles/Temperature.scss';

type temperatureProps = {
    temperature: number|undefined,
}

const Temperature = ({temperature}:temperatureProps) => {

    let temp = temperature?.toPrecision(2);
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='temperature'>
            <h1>{temp}<span>{degree}</span></h1>
        </div>
    );
};

export default Temperature;