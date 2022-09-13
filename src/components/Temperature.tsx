import React from 'react';
import '../assets/styles/Temperature.scss';

const Temperature = () => {

    let temperature:number = 0;
    let degree:'°C'|'°F';
    degree = '°C';

    return (
        <div className='temperature'>
            <h1>{temperature}<span>{degree}</span></h1>
        </div>
    );
};

export default Temperature;