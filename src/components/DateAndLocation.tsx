import React, { useContext } from 'react';
import '../assets/styles/DateAndLocation.scss';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
// import AppContext from '../context/appContext';
// import { CurrentDayData } from '../models/CurrentDayData.model';

const DateAndLocation = () => {
    
    // const currentDayData:CurrentDayData = useContext(AppContext);

    const currentDayData = useGetCurrentDayData();


    // console.log(currentDayData);

    let day = 'Monday';
    let date = currentDayData.location.localtime;
    let location = currentDayData.location.name + ' ' + currentDayData.location.country;

    return (
        <div className='date-and-location'>
            <h2 className='date-and-location__day'>{day}</h2>
            <h3 className='date-and-location__date'>{date}</h3>
            <h3 className='date-and-location__location'>{location}</h3>
        </div>
    );
};

export default DateAndLocation;