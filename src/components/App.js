import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import Spacer from './Spacer'
import Footer from './Footer'
import axios from 'axios';
import '../App.scss';
require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      weather: [],
      forecast: [],
      errorMessage: null,
    }
    this.search = this.search.bind(this)
  }

  search = searchValue => {
    this.setState({ loading: true })
    this.setState({ setErrorMessage: null })

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&units=metric`
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&units=metric`

    const requestWeather = axios.get(weather)
    const requestForecast = axios.get(forecast)

    axios.all([requestWeather, requestForecast])
      .then(
        axios.spread((...response) => {
          this.setState({
            weather: response[0].data,
            forecast: response[1].data.list,
            loading: false,
          });

        })
      )
      .catch(error => {
        this.setState({ errorMessage: error })
      });
  }

  render() {
    return (
      <div className="App">
        <Header title='Whats the weather for today' />
        <Search search={this.search} />
        <div>
          {this.state.loading && !this.state.errorMessage ? (
            <section className='section'>
              <div className='container has-text-centered'>
                <p>Waiting for input</p>
              </div>
            </section>
          ) : this.state.errorMessage ? (
            <div className="errorMessage">{this.state.errorMessage}</div>
          ) : (
                <>
                  < Weather weather={this.state.weather} />
                  <Spacer />
                  <Forecast forecast={this.state.forecast} />
                  <Spacer />
                  <Footer text='FOOTER TEXT' />
                </>
              )}
        </div>
      </div>
    );
  }
}

export default App;
