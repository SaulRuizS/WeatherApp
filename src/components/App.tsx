import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Card from '../containers/Card';
import '../assets/styles/App.scss';
import useGetForecastData from '../hooks/useGetForecastData';
import useGetLocationImage from '../hooks/useGetLocationImage';

const App = () => {

    const initialQuery: string | undefined = 'New York'

    const [ query, setQuery ] = useState(initialQuery);

    const forecastData = useGetForecastData(query);

    const imagesFetched = useGetLocationImage(query);

    const backgroundImage = imagesFetched.results?.[2].urls?.full;

    return (
            <div className='app'>
                <img
                    src={backgroundImage}
                    alt="background-image"
                    className='app__background-image'
                />
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