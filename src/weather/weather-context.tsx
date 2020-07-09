import React, { createContext, useReducer, useContext, FC } from 'react';

import {
    weatherReducer,
    initialValue,
    WeatherState,
    WeatherAction,
} from './weather-state';

const WeatherContext = createContext<
    [WeatherState, React.Dispatch<WeatherAction>] | undefined
>(undefined);

export const WeatherProvider: FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, initialValue);

    const contextValue: [WeatherState, React.Dispatch<WeatherAction>] = [
        state,
        dispatch,
    ];

    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => useContext(WeatherContext);
