import React from 'react';
import { Header } from './header';
import { WeatherProvider } from './weather/weather-context';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from './pages/main-page';

export const Main = () => {
    return (
        <div>
            <Header />

            <Switch>
                <Route path='/main'>
                    <MainPage />
                </Route>
            </Switch>
        </div>
    );
};
