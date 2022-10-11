import React from 'react';
import ForecastCard from '../components/ForecastCard';
import { FutureDay } from '../models/ForecastData.model';
import '../assets/styles/Forecast.scss';

type futureForecastProps = {
    dayTwo: FutureDay,
    dayThree: FutureDay,
}

const ForecastSection = ({
    dayTwo,
    dayThree
}:futureForecastProps) => {
    return (
        <div className='forecast'>
            <ForecastCard
                futureDay={dayTwo}
            />
            <ForecastCard
                futureDay={dayThree}
            />
        </div>
    );
};

export default ForecastSection;