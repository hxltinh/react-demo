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
                {items.map(({ applicable_date, max_temp, min_temp }) => (
                    <WeatherItem
                        key={applicable_date}
                        date={applicable_date}
                        minTemp={min_temp}
                        maxTemp={max_temp}
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
