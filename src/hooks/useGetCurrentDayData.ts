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
    interface Data {
        location: Location,
        current: Current,
        condition: Condition,
    }
    interface Location {
        name: string,
        region: string,
        country: string,
        localtime: string,
    }

    interface Current {
        temp_c: number,
        temp_f: number,
        is_day: number,
        wind_kph: number,
        humidity: number,
        condition: Condition,
    }

    interface Condition {
        text: string,
        icon: string,
    }

    useEffect(() => {
            const fetchData = async () => {
                const response = await axios.request(options)
                const dataFetched: Data = response.data;
                // console.log(dataFetched);
                setCurrentDayData(dataFetched);
            };
            fetchData();
    },[]);

    return currentDayData;
};

export default useGetCurrentDayData;