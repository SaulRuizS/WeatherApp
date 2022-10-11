import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Card from '../containers/Card';
import '../assets/styles/App.scss';
import useGetForecastData from '../hooks/useGetForecastData';

const App = () => {  

    const [ query, setQuery ] = useState('monterrey');

    const forecastData = useGetForecastData(query);

    return (
            <div className='app'>
                <SearchInput
                    query={query}
                    setQuery={setQuery}
                />
                <Card
                    forecastData={forecastData}
                />
            </div>
    );
};

export default App;