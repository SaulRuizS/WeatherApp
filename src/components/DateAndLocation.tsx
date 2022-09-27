import React from 'react';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import '../assets/styles/DateAndLocation.scss';

const DateAndLocation = () => {

    const currentDayData = useGetCurrentDayData('monterrey');

    function currentDate() {
        const dateSplited = currentDayData.location.localtime.split(' ');
        const date = dateSplited[0].replace('-',' ').replace('-',' ');
        return date;
    }

    function weekDay() {
        let dateObject = new Date;
        let day = dateObject.getDay();
        switch (day) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 7:
                return 'Sunday';        
        }    
    }

    let date = currentDate();
    let location = currentDayData.location.name + ', ' + currentDayData.location.country;

    return (
        <div className='date-and-location'>
            <h2 className='date-and-location__day'>{weekDay()}</h2>
            <h3 className='date-and-location__date'>{date}</h3>
            <h3 className='date-and-location__location'>{location}</h3>
        </div>
    );
};

export default DateAndLocation;