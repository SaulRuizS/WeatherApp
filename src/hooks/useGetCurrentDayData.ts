import { useState, useEffect } from "react";
import axios from "axios";
import { Data, Location, Current, Condition } from "../models/CurrentDayData.model";

const useGetCurrentDayData = () => {


    const [ currentDayData, setCurrentDayData ] = useState({
        location: {},
        current: {},
        condition: {},
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
        const dataFetched: Data = await response.data;
        setCurrentDayData(dataFetched);
    };

    useEffect(() => {
        fetchData();
    },[]);

    return currentDayData;
};

export default useGetCurrentDayData;