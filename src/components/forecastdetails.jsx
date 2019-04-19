import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => (
  <div className="forecastdetails">
    <div><span className="Details-date">{moment(props.forecasts.date).format('ddd Do MMM')}</span></div>
    <div><span className="humidity">{props.forecasts.humidity}</span></div>
    <div><span className="Max-temp">{props.forecasts.temperature.max}°c</span></div>
    <div><span className="Min-temp">{props.forecasts.temperature.min}°c</span></div>
    <div><span className="Wind-speed">{props.forecasts.wind.speed}</span></div>
    <div><span className="Wind-direction">{props.forecasts.wind.direction}</span></div>
    <div><span className="Details-icon"><WeatherIcon name="owm" iconId={props.forecasts.icon} flip="horizontal" rotate="90" /></span></div>
  </div>
);

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
