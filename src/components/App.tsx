import React from 'react';
import SearchInput from './SearchInput';
import Card from './Card';
import '../assets/styles/App.scss';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';

const App = () => {

    // const currentDayData:object = useGetCurrentDayData();

    // console.log(currentDayData);
    
    return (
        <div className='app'>
            <SearchInput />
            <Card />
        </div>
    );
};

export default App;