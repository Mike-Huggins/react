import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../src/components/location-details.jsx';

it('renders city and country in h1 element', () => {
  const wrapper = Enzyme.shallow((
    <LocationDetails city="foo" country="bar" />
  ));
  const text = wrapper.find('h1').text(); 
  expect(text).toEqual('foo, bar');
});
