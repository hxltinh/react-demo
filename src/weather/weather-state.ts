import { Reducer } from 'react';
import { WeatherByDay } from './interface';

export type WeatherState = {
    loading?: boolean;
    cityName?: string;
    items: WeatherByDay[];
};

export type WeatherAction = {
    type: 'SEARCHING' | 'SEARCH_DONE';
    payload?: WeatherState;
};

export const initialValue: WeatherState = {
    loading: false,
    items: [],
};

export const weatherReducer: Reducer<WeatherState, WeatherAction> = (
    state = initialValue,
    { type, payload }
) => {
    switch (type) {
        case 'SEARCHING': {
            return {
                ...state,
                loading: true,
            };
        }

        case 'SEARCH_DONE': {
            return {
                ...state,
                cityName: payload?.cityName,
                items: payload ? payload.items : [],
                loading: false,
            };
        }

        default: {
            return state;
        }
    }
};
