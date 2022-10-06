import React from 'react';
import axios from "axios";

const useGetForecast = () => {

    let query = 'monterrey';

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
    }

    axios.request(options).then(function(response) {
        console.log(response.data);
    })
};

export default useGetForecast;