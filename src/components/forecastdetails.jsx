import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => (
  <div className="forecastdetails">
    <div><span className="Details-date">{moment(props.forecast.date).format('ddd Do MMM')}</span></div>
    <div><span className="humidity">{props.humidity}</span></div>
    <div><span className="Max-temp">{props.forecast.temperature.max}°c</span></div>
    <div><span className="Min-temp">{props.forecast.temperature.min}°c</span></div>
    <div><span className="Wind-speed">{props.forecast.wind.speed}</span></div>
    <div><span className="Wind-direction">{props.forecast.wind.direction}</span></div>
    <div><span className="Details-icon"><WeatherIcon name="owm" iconId={props.forecast.icon} flip="horizontal" rotate="90" /></span></div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
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
