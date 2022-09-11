import React from 'react';
import Temperature from './Temperature';
import MoreData from './MoreData';
import '../assets/styles/Card.scss';

const Card = () => {
    return (
        <div className='card'>
            <Temperature />
            <MoreData />
        </div>
    );
};

export default Card;