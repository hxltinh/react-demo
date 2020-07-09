import React, { useState } from 'react';
import { useWeatherContext } from './weather-context';
import { WeatherList } from './weather-list';
import { Grid, TextField, Button } from '@material-ui/core';
import { searchWeather } from './weather-searcher';

export const Weather = () => {
    const weatherContext = useWeatherContext();

    if (!weatherContext) {
        return null;
    }

    const [state, dispatch] = weatherContext;
    const { cityName, items, loading } = state;

    const [countryName, setCountryName] = useState('');

    const onSearch = () => {
        dispatch({ type: 'SEARCHING' });

        searchWeather(countryName).then(result => {
            if (result.length === 0) {
                dispatch({
                    type: 'SEARCH_DONE',
                    payload: {
                        items: [],
                    },
                });
                return;
            }

            const firstItem = result[0];

            dispatch({
                type: 'SEARCH_DONE',
                payload: {
                    cityName: firstItem.city,
                    items: firstItem.weather_by_day,
                },
            });
        });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id='standard-basic'
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
