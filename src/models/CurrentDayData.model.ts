export interface Data {
    location: Location,
    current: Current,
    condition: Condition,
}
export interface Location {
    name: string,
    region: string,
    country: string,
    localtime: string,
}
export interface Current {
    temp_c: number,
    temp_f: number,
    is_day: number,
    wind_kph: number,
    humidity: number,
    condition: Condition,
}
export interface Condition {
    text: string,
    icon: string,
}