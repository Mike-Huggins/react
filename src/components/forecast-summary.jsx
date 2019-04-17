import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div>
    <span className="date">{moment(props.date).format('ddd Do MMM')}</span>
    <span className="temperature">{props.temperature}</span>
    <span className="description">{props.description}</span>
    <span className="icon"><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
