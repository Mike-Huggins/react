import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div>
    <div><span className="date">{moment(props.date).format('ddd Do MMM')}</span></div>
    <div><span className="temperature">{props.temperature}°c</span></div>
    <div><span className="description">{props.description}</span></div>
    <div><span className="icon"><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span></div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
