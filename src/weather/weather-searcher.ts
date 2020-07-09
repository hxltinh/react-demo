import { WeatherByDay } from './interface';

export const searchWeather = async (cityName: string) => {
    return searchByQuery(cityName);
};

const searchByQuery = async (cityName: string): Promise<WeatherItem[]> => {
    const url = `http://localhost:3000/weather?city=${cityName}`;

    const response = await fetch(url);
    const result: WeatherItem[] = await response.json();
    return result;
};

interface WeatherItem {
    city: string;
    weather_by_day: WeatherByDay[];
}
