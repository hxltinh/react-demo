import React, { useState } from 'react';
import { useWeatherContext, WeatherProvider } from './weather-context';
import { WeatherList } from './weather-list';
import { Grid, TextField, Button } from '@material-ui/core';
import { searchWeather } from './weather-searcher';

export const Weather = () => {
    return (
        <WeatherProvider>
            <WeatherMain></WeatherMain>
        </WeatherProvider>
    );
};

const WeatherMain = () => {
    const weatherContext = useWeatherContext();

    if (!weatherContext) {
        return null;
    }

    const [state, dispatch] = weatherContext;
    const { cityName, items, loading } = state;

    const [countryName, setCountryName] = useState('');

    const onSearch = () => {
        if (countryName === '') {
            dispatch({
                type: 'SEARCH_DONE',
                payload: {
                    items: [],
                },
            });
            return;
        }

        dispatch({ type: 'SEARCHING' });

        searchWeather(countryName)
            .then(result => {
                if (!result) {
                    dispatch({
                        type: 'SEARCH_DONE',
                        payload: {
                            items: [],
                        },
                    });
                    return;
                }

                const { consolidated_weather: weatherByDays, title } = result;

                dispatch({
                    type: 'SEARCH_DONE',
                    payload: {
                        cityName: title,
                        items: weatherByDays,
                    },
                });
            })
            .catch(error => {
                dispatch({
                    type: 'SEARCH_DONE',
                    payload: {
                        items: [],
                    },
                });
            });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id='seach-input'
                        label='Search'
                        value={countryName}
                        onChange={e => setCountryName(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={onSearch}
                    >
                        Search
                    </Button>
                </Grid>
                <WeatherList
                    cityName={cityName}
                    loading={!!loading}
                    items={items}
                ></WeatherList>
            </Grid>
        </>
    );
};
