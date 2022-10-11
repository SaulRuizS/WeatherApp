import React from 'react';
import '../assets/styles/MoreData.scss';

type cardInfoProps = {
    humidity: number | undefined,
    wind: number | undefined,
    precipitation: number | undefined,
}

const CardInfo = ({
    humidity,
    wind,
    precipitation,
}:cardInfoProps) => {

    return (
        <div className='more-data'>
            <p className='humidity'>Humidity: {humidity}%</p>
            <p className='wind'>Wind: {wind} km/h</p>
            <p className='precipitation'>Precipitation: {precipitation}%</p>
        </div>
    );
};

export default CardInfo;