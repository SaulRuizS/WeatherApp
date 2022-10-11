export interface Current {
    humidity?: number,
    temp_c?: number,
    temp_f?: number,
    wind_kph?: number,
    wind_mph?: number,
    condition?: {
        icon: string,
    }
}

export interface FutureDay {
    date?: string,
    day?: {
        condition?: {
            text: string,
            icon: string,
        }
        maxtemp_c?: number,
        maxtemp_f?: number,
        mintemp_c?: number,
        mintemp_f?: number,            
        daily_chance_of_rain?: number,
    }
}

export interface Forecast {
    forecastday?: Array<FutureDay>
}

export interface Location {
    country?: string,
    name?: string,
}

export interface ForecastData {
    current?: Current,
    forecast?: Forecast,
    location?: Location,
}

