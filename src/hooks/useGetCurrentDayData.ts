import { useState, useEffect } from "react";
import axios from "axios";

const useGetCurrentDayData = () => {

    const [ currentDayData, setCurrentDayData ] = useState({});

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'monterrey'},
        headers: {
          'X-RapidAPI-Key': 'ed3b36728amshf11d42c7aaa82aap17c07bjsn7a933a8e5468',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    let query = 'monterrey';

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
    },[]);

    return currentDayData;
};

export default useGetCurrentDayData;