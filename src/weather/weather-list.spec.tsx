import { WeatherList } from './weather-list';
import { shallow } from 'enzyme';
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { WeatherItem } from './weather-item';

describe(WeatherList.name, () => {
    describe('when loading', () => {
        it('it should show the spinner', () => {
            const wrapper = shallow(
                <WeatherList cityName='some name' loading={true} items={[]} />
            );

            expect(wrapper.find(LinearProgress)).toHaveLength(1);
        });
    });

    describe('when loading is done with 3 items', () => {
        it('it should show all items', () => {
            const items = [
                {
                    date: 'mon',
                    wind_speed: 30,
                    air_quality: 'poor',
                    humidity: 66,
                },
                {
                    date: 'tues',
                    wind_speed: 30,
                    air_quality: 'poor',
                    humidity: 66,
                },
                {
                    date: 'wen',
                    wind_speed: 30,
                    air_quality: 'poor',
                    humidity: 66,
                },
            ];
            const wrapper = shallow(
                <WeatherList
                    cityName='some name'
                    loading={false}
                    items={items}
                />
            );

            expect(wrapper.find(WeatherItem)).toHaveLength(3);
        });
    });
});
