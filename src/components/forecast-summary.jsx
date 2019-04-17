import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div>
    <span className="date">{props.date}</span>
    <span className="temperature">{props.temperature}</span>
    <span className="description">{props.description}</span>
    <span className="icon">{props.icon}</span>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
