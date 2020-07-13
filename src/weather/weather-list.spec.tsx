import { WeatherList } from './weather-list';
import { shallow } from 'enzyme';
import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { WeatherItem } from './weather-item';
import { WeatherByDay } from './interface';

describe(WeatherList.name, () => {
    describe('when loading', () => {
        it('it should show the spinner', () => {
            const wrapper = shallow(
                <WeatherList cityName='some name' loading={true} items={[]} />
            );

            expect(wrapper.find(LinearProgress)).toHaveLength(1);
        });
    });

    describe('when loading is done with items', () => {
        it('it should show all items', () => {
            const items: WeatherByDay[] = [
                {
                    applicable_date: 'mon',
                    max_temp: 30,
                    min_temp: 22,
                },
                {
                    applicable_date: 'tues',
                    max_temp: 30,
                    min_temp: 22,
                },
                {
                    applicable_date: 'wen',
                    max_temp: 30,
                    min_temp: 22,
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
