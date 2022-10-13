import { useEffect, useState } from 'react';
import axios from "axios";
import { ForecastData } from '../models/ForecastData.model';

const useGetForecastData = (query?: string) => {

    let initialData: ForecastData = {};

    const [ forecastData, setForecastData ] = useState(initialData);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: `${query}`,
            days: '3'
        },
        headers: {
            'X-RapidAPI-Key': 'ed3b36728amshf11d42c7aaa82aap17c07bjsn7a933a8e5468',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        const response = await axios.request(options);
        const dataFetched: ForecastData = await response.data;
        setForecastData(dataFetched);
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    // console.log(forecastData);

    return forecastData;
};

export default useGetForecastData;