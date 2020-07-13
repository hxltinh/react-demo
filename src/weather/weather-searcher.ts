import { WeatherByDay } from './interface';

export const searchWeather = async (cityName: string) => {
    return searchByQuery(cityName);
};

const searchByQuery = async (cityName: string): Promise<Weather | null> => {
    const result = await findWoeidByLocationName(cityName);
    if (result.length === 0) {
        return null;
    }
    const { woeid } = result[0];
    return findWeatherInfoByWoeid(woeid);
};

const findWoeidByLocationName = async (cityName: string) => {
    const url = `http://localhost:8000/api/location/search/${cityName}`;

    const response = await fetch(url);
    const result: LocationDetailByLocationName[] = await response.json();

    return result;
};

const findWeatherInfoByWoeid = async (woeid: number) => {
    const url = `http://localhost:8000/api/location/${woeid}`;

    const response = await fetch(url);
    const result: Weather = await response.json();

    return result;
};

interface LocationDetailByLocationName {
    title: string;
    woeid: number;
}

export interface Weather {
    title: string;
    consolidated_weather: WeatherByDay[];
}
