import React from 'react';
import SearchInput from './SearchInput';
import Card from '../containers/Card';
import useGetCurrentDayData from '../hooks/useGetCurrentDayData';
import AppContext from '../context/appContext';
import '../assets/styles/App.scss';


const App = () => {

    // const currentDayData = useGetCurrentDayData();
    
    return (
        // <AppContext.Provider value={currentDayData}>
            <div className='app'>
                <SearchInput />
                <Card />
            </div>
        // </AppContext.Provider>
    );
};

export default App;