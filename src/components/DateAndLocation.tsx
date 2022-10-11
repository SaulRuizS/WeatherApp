import React from 'react';
import '../assets/styles/DateAndLocation.scss';

type dateAndLocationProps = {
    date: string | undefined,
    locationName: string | undefined,
    locationCountry: string | undefined,
}

const DateAndLocation = ({
    date,
    locationName,
    locationCountry,
}:dateAndLocationProps) => {

    function formatDate() {
        const dateSplited = date?.split(' ');
        const dateFormated = dateSplited?.[0].replace('-','/').replace('-','/');
        return dateFormated;
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

    let currentDate = formatDate();

    let location = locationName + ', ' + locationCountry;

    return (
        <div className='date-and-location'>
            <h2 className='date-and-location__day'>{weekDay()}</h2>
            <h3 className='date-and-location__date'>{currentDate}</h3>
            <h3 className='date-and-location__location'>{location}</h3>
        </div>
    );
};

export default DateAndLocation;