import React from 'react';
import { Header } from './header';
import { WeatherProvider } from './weather/weather-context';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from './pages/main-page';

export const Main = () => {
    return (
        <div>
            <Header />

            <WeatherProvider>
                <Switch>
                    <Route path='/main'>
                        <MainPage />
                    </Route>
                </Switch>
            </WeatherProvider>
            {/* <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div> */}
        </div>
    );
};
