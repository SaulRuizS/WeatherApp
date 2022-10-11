import React from 'react';
import DateAndLocation from '../components/DateAndLocation';
import Temperature from '../components/Temperature';
import CardInfo from '../components/CardInfo';
import ForecastSection from '../containers/ForecastSection';
import { ForecastData } from '../models/ForecastData.model';
import '../assets/styles/Card.scss';

type forecastDataProps = {
    forecastData: ForecastData,
}

const Card = ({forecastData}: forecastDataProps) => {

    let temperature = forecastData.current?.temp_c;

    let humidity = forecastData.current?.humidity;
    let wind = forecastData.current?.wind_kph;
    let precipitation = forecastData.forecast?.forecastday?.[0].day?.daily_chance_of_rain;

    let date = forecastData.forecast?.forecastday?.[0].date;
    let locationName = forecastData.location?.name;
    let locationCountry = forecastData.location?.country;

    const dayTwo = {
        date: forecastData.forecast?.forecastday?.[1].date,
        day: forecastData.forecast?.forecastday?.[1].day,
    }

    const dayThree = {
        date: forecastData.forecast?.forecastday?.[2].date,
        day: forecastData.forecast?.forecastday?.[2].day,
    }

    return (
        <div className='card'>
            <DateAndLocation
                date={date}
                locationName={locationName}
                locationCountry={locationCountry}
            />
            <Temperature
                temperature={temperature}
            />
            <CardInfo
                humidity={humidity}
                wind={wind}
                precipitation={precipitation}
            />
            <ForecastSection
                dayTwo={dayTwo}
                dayThree={dayThree}
            />
        </div>
    );
};

export default Card;