import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../src/components/forecast-summary';

xit('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.date').text()).toEqual('mockDate');
});

xit('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.temperature').text()).toEqual('mockTemperature');
});

xit('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.description').text()).toEqual('mockDescription');
});

xit('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.icon').text()).toEqual('mockIcon');
});
