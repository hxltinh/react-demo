import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Main } from './main';

export const App = () => (
    <div>
        <HashRouter>
            <Switch>
                <Route path='/main'>
                    <Main />
                </Route>
                <Route path='/' exact={true}>
                    <Redirect to={{ pathname: '/main' }} />
                </Route>
            </Switch>
        </HashRouter>
    </div>
);
