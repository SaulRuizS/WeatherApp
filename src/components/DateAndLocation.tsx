import React from 'react';
import '../assets/styles/DateAndLocation.scss';

const DateAndLocation = () => {
    
    let day:string = 'Monday';
    let date:string = 'September 12';
    let location:string = 'Monterrey, Mexico';

    return (
        <div className='date-and-location'>
            <h2 className='date-and-location__day'>{day}</h2>
            <h3 className='date-and-location__date'>{date}</h3>
            <h3 className='date-and-location__location'>{location}</h3>
        </div>
    );
};

export default DateAndLocation;