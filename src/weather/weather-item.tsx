import React from 'react';
import moment from 'moment';
import { Grid, Paper, makeStyles } from '@material-ui/core';

export const WeatherItem = (props: WeatherItem) => {
    const { date, maxTemp, minTemp } = props;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <div>Date: {moment(date).format('MMM Do YY')}</div>
                <div>
                    Max temp: {Math.round(maxTemp)}
                    <span>&#8451;</span>
                </div>
                <div>
                    Min temp: {Math.round(minTemp)}
                    <span>&#8451;</span>
                </div>
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
