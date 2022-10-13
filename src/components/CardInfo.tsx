import React from 'react';
import '../assets/styles/CardInfo.scss';

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
        <div className='cardInfo'>
            <p className='cardInfo__humidity'>Humidity: {humidity}%</p>
            <p className='cardInfo__wind'>Wind: {wind} km/h</p>
            <p className='cardInfo__precipitation'>Precipitation: {precipitation}%</p>
        </div>
    );
};

export default CardInfo;