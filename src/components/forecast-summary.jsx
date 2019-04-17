import React from 'react';
import PropTypes from 'prop-types';


const ForecastSummary = props => (<h1 className="forecast-summary"><div className="date"><span>{props.date}</span></div>,
  <div className="temperature"><span>{props.temperature}</span></div>,
  <div className="description"><span>{props.description}</span></div> ,
  <div className="icon"><span>{props.icon}</span></div>,
</h1> 
);

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;

/*const LocationDetails = props => <h1 className="location-details">{props.city}, {props.country}</h1>;

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;

it('renders the date', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecast-summary').text()).toEqual('mockDate');

    it('renders city and country in h1 element', () => {
        const wrapper = Enzyme.shallow((
          <LocationDetails city="foo" country="bar" />
        ));
        const text = wrapper.find('h1').text(); 
        expect(text).toEqual('foo, bar');
      });

*/