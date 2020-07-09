import React from 'react';
import { WeatherState } from './weather-state';
import { Grid, LinearProgress, makeStyles } from '@material-ui/core';
import { WeatherItem } from './weather-item';

export const WeatherList = (props: WeatherState) => {
    const { cityName, loading, items } = props;

    const classes = useStyles();

    if (loading) {
        return <LinearProgress className={classes.progressBar} />;
    }

    if (items.length === 0) {
        return (
            <section>
                <span>
                    Please try with: London, Ho Chi Minh, New York, Tokyo, Seul{' '}
                </span>
            </section>
        );
    }

    return (
        <section className='weather-list'>
            <div className='city-name'>{cityName}</div>
            <Grid container spacing={3}>
                {items.map(({ date, wind_speed, air_quality, humidity }) => (
                    <WeatherItem
                        key={date}
                        date={date}
                        windSpeed={wind_speed}
                        airQuality={air_quality}
                        humidity={humidity}
                    ></WeatherItem>
                ))}
            </Grid>
        </section>
    );
};

const useStyles = makeStyles(theme => ({
    progressBar: {
        width: '100%',
    },
}));
