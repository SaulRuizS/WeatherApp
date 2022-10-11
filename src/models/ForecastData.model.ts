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

export interface Forecast {
    forecastday?: Array<{
        date?: string,
        day?: {
            condition?: {
                icon: string,
            }
            avgtemp_c?: number,
            avgtemp_f?: number,
            daily_chance_of_rain?: number,
        }
    }>
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

export interface FutureDay {
    date: string | undefined,
    temperature: number | undefined,
    condition: string | undefined,
}