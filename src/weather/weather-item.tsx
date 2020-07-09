import React from 'react';
import { WeatherByDay } from './interface';
import { Grid, Paper, makeStyles } from '@material-ui/core';

export const WeatherItem = (props: WeatherItem) => {
    const { date, windSpeed, airQuality, humidity } = props;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <div>Date: {date}</div>
                <div>Wind speed: {windSpeed}</div>
                <div>Air quality: {airQuality}</div>
                <div>Humidity: {humidity}</div>
            </Paper>
        </Grid>
    );
};

export interface WeatherItem {
    date: string;
    windSpeed: number;
    airQuality: string;
    humidity: number;
}

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
