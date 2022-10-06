import React from 'react';
import SearchInput from './SearchInput';
import Card from '../containers/Card';
import '../assets/styles/App.scss';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import useGetForecast from '../hooks/useGetForecast';

// const currentDayData = useGetCurrentDayData();

const App = () => {  

    useGetForecast();

    return (
            <div className='app'>
                <SearchInput />
                <Card />
            </div>
    );
};

export default App;