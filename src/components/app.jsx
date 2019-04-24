import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecastdetails';
import SearchForm from './searchform';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';
import axios from 'axios';
const url = 'https://mcr-codes-weather.herokuapp.com/forecast?city=';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  updateCity(city) {
    axios.get(`${url}${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      })
      .catch(error => {
        if (error.response) {
          console.log('city not available');
        }
      });
  };


  componentDidMount() {
    axios.get(`${url}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      })
      .catch(error => {
        if (error.response) {
          console.log('location missing');
        }
      });
  };

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="date handling">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm updateCity={this.updateCity} />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        { selectedForecast && <ForecastDetails forecast={selectedForecast} /> }
      </div>
    );
  }
}
export default App;
