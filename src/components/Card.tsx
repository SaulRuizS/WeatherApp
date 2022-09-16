import React from 'react';
import DateAndLocation from './DateAndLocation';
import Temperature from './Temperature';
import MoreData from './MoreData';
import Forecast from './Forecast';
import '../assets/styles/Card.scss';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';

const Card = () => {

    const currentDayData:object = useGetCurrentDayData();

    // const currentTempearure:number = currentDayData.current.temp_c;

    // console.log(currentTempearure);

    console.log(currentDayData);

    return (
        <div className='card'>
            <DateAndLocation />
            <Temperature />
            <MoreData />
            <Forecast />
        </div>
    );
};

export default Card;