import { useState, useEffect } from "react";
import { ImagesFetched } from "../models/LocationImage.model";
import axios from "axios";

const useGetLocationImage = (query: string) => {

    let initialValue: ImagesFetched = {};

    const [ imagesFetched, setImagesFetched ] = useState(initialValue);

    const options = {
        method: 'GET',
        url: 'https://api.unsplash.com/search/photos/',
        params: {
            query: {query},
            page: '1',
            per_page: '3',
        },
        headers: {
            'Accept-Version': 'v1',
            'Authorization': 'Client-ID dk23uEGlJrbAbbgSeIlIN0KWjt2i6tSRIuoU0BMmDLA',
        }
    };

    const fetchData = async () => {
        const response = await axios.request(options)
        const dataFetched: ImagesFetched = await response.data;
        setImagesFetched(dataFetched);        
    };

    useEffect(() => {
        fetchData();
        console.log(imagesFetched);
    }, [query]);

    return imagesFetched;
};

export default useGetLocationImage;