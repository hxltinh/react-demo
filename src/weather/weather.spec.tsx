import 'jest';
import { Weather } from './weather';
import React, { ChangeEvent } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { TextField, Button } from '@material-ui/core';
import { act } from 'react-dom/test-utils';
import { WeatherList } from './weather-list';

jest.mock('./weather-searcher', () => ({
    searchWeather: jest.fn(),
}));

import { searchWeather } from './weather-searcher';

const searchWeatherMock = searchWeather as jest.Mock<any, any>;

describe(Weather.name, () => {
    describe('when searching weather information', () => {
        const textEvent = {
            target: { value: 'some value' },
        } as ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

        const buttonEvent = {} as React.MouseEvent<
            HTMLButtonElement,
            MouseEvent
        >;

        let wrapper: ReactWrapper;
        beforeEach(() => {
            wrapper = mount(<Weather />);
        });

        test('it should change the input', () => {
            act(() => {
                const props = wrapper.find(TextField).at(0).props();
                props.onChange && props.onChange(textEvent);
            });

            wrapper.update();

            expect(wrapper.find(TextField).props().value).toEqual('some value');
        });

        describe('when searching weather information base on location', () => {
            test('it should show the list', async () => {
                searchWeatherMock.mockImplementation(() =>
                    Promise.resolve({
                        consolidated_weather: [{ a: 1 }],
                        title: 'some location',
                    })
                );

                act(() => {
                    const props = wrapper.find(TextField).at(0).props();
                    props.onChange && props.onChange(textEvent);
                });

                wrapper.update();

                act(() => {
                    const props = wrapper.find(Button).at(0).props();
                    props.onClick && props.onClick(buttonEvent);
                });
                wrapper.update();

                await act(() => Promise.resolve());

                wrapper.update();

                expect(wrapper.find(WeatherList).props().items).toEqual([
                    { a: 1 },
                ]);
            });

            describe('and when input is empty', () => {
                test('it should finish loading with empty list', () => {
                    act(() => {
                        const props = wrapper.find(Button).at(0).props();
                        props.onClick && props.onClick(buttonEvent);
                    });

                    wrapper.update();

                    expect(wrapper.find(WeatherList).props().items).toEqual([]);
                });
            });

            describe('and when search fails', () => {
                test('it should show the error', async () => {
                    searchWeatherMock.mockImplementation(() =>
                        Promise.reject('some error')
                    );

                    act(() => {
                        const props = wrapper.find(TextField).at(0).props();
                        props.onChange && props.onChange(textEvent);
                    });

                    wrapper.update();

                    act(() => {
                        const props = wrapper.find(Button).at(0).props();
                        props.onClick && props.onClick(buttonEvent);
                    });
                    wrapper.update();

                    await act(() => Promise.resolve());

                    wrapper.update();

                    expect(wrapper.find('.error').length).toBe(1);
                });
            });
        });
    });
});
