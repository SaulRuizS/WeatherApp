import React from 'react';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import '../assets/styles/Temperature.scss';

const Temperature = () => {

    const currentDayData = useGetCurrentDayData();

    let temperature:number = currentDayData.current.temp_c;
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='temperature'>
            <h1>{temperature}<span>{degree}</span></h1>
        </div>
    );
};

export default Temperature;