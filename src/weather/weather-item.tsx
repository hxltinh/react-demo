import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

export const WeatherItem = (props: WeatherItem) => {
    const { date, maxTemp, minTemp } = props;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <div>Date: {date}</div>
                <div>Max temparature: {maxTemp}</div>
                <div>Min temparature: {minTemp}</div>
            </Paper>
        </Grid>
    );
};

export interface WeatherItem {
    date: string;
    maxTemp: number;
    minTemp: number;
}

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
