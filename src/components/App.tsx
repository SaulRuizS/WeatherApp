import React from 'react';
import SearchInput from './SearchInput';
import Card from './Card';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import AppContext from './appContext';
import '../assets/styles/App.scss';


const App = () => {

    const currentDayData:object = useGetCurrentDayData();

    // console.log(currentDayData);
    
    return (
        <AppContext.Provider value={currentDayData}>
            <div className='app'>
                <SearchInput />
                <Card />
            </div>
        </AppContext.Provider>
    );
};

export default App;