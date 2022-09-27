import { useState, useEffect } from "react";
import axios from "axios";
import { CurrentDayData } from "../models/CurrentDayData.model";

const useGetCurrentDayData = ():CurrentDayData => {

    const [ currentDayData, setCurrentDayData ] = useState({
        location: {
            name: '',
            region: '',
            country: '',
            localtime: '',
        },
        current: {
            temp_c: 0,
            temp_f: 0,
            is_day: 0,
            wind_kph: 0,
            humidity: 0,
            condition: {
                text: '',
                icon: '',
            },
        },
    });

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'monterrey'},
        headers: {
          'X-RapidAPI-Key': 'ed3b36728amshf11d42c7aaa82aap17c07bjsn7a933a8e5468',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        const response = await axios.request(options)
        const dataFetched: CurrentDayData = await response.data;
        setCurrentDayData(dataFetched);
    };

    useEffect(() => {
        fetchData();
    },[]);

    return currentDayData;
};

export default useGetCurrentDayData;