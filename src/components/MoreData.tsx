import React from 'react';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import '../assets/styles/MoreData.scss';

const MoreData = () => {

    const currentDayData = useGetCurrentDayData();

    let humidity = currentDayData.current.humidity;
    let wind = currentDayData.current.wind_kph;
    let precipitation = 0;

    return (
        <div className='more-data'>
            <p className='humidity'>Humidity: {humidity}%</p>
            <p className='wind'>Wind: {wind} km/h</p>
            <p className='precipitation'>Precipitation: {precipitation}%</p>
        </div>
    );
};

export default MoreData;