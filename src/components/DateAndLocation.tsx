import React, { useContext } from 'react';
import '../assets/styles/DateAndLocation.scss';
import AppContext from './appContext';

const DateAndLocation = () => {
    
    const currentDayData = useContext(AppContext);

    console.log(currentDayData);

    let day = 'Monday';
    let date = 'September 12';
    let location = 'Monterrey, Mexico';

    return (
        <div className='date-and-location'>
            <h2 className='date-and-location__day'>{day}</h2>
            <h3 className='date-and-location__date'>{date}</h3>
            <h3 className='date-and-location__location'>{location}</h3>
        </div>
    );
};

export default DateAndLocation;