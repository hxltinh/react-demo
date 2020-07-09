import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Weather } from '~/weather/weather';

export const MainPage: FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Weather></Weather>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
}));
