import { useState, useEffect } from "react";

const useGetCurrentDayData = () => {

    const [ currentDayData, setCurrentDayData ] = useState({});

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ed3b36728amshf11d42c7aaa82aap17c07bjsn7a933a8e5468',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    let query:string = 'monterrey';

    useEffect(() => {
        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, options)
	    .then(response => response.json())
	    .then(response => setCurrentDayData(response))
	    .catch(err => console.error(err));
    },[]);

    return currentDayData;
};

export default useGetCurrentDayData;