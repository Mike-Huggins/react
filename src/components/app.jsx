import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecastdetails';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';


const App = props => (
  <div className="forecast">
    <LocationDetails city={props.location.city} country={props.location.country} />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails forecasts={props.forecasts[0]} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
