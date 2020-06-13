import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
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
      search: true
    }
    this.search = this.search.bind(this)
  }


  search = searchValue => {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&units=metric`
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&units=metric`
    const message = document.querySelector('.info p')

    const requestWeather = axios.get(weather)
    const requestForecast = axios.get(forecast)

    axios.all([requestWeather, requestForecast])
      .then(
        axios.spread((...response) => {
          this.setState({
            weather: response[0].data,
            forecast: response[1].data.list,
            loading: false,
            search: true,
            errorMessage: null
          });
          message.textContent = 'Looking outside for you... one sec'
        })
      )
      .catch(error => {
        this.setState({ errorMessage: error })
      });
  }

  render() {
    return (
      <div className="App">
        <Header title="What's the weather like Today?" />
        <Search search={this.search} />
        <div>
          {this.state.loading && !this.state.errorMessage ? (
            <section className='section'>
              <div className='container has-text-centered info'>
                <p>Type a city name to see the weather</p>
              </div>
            </section>
          ) : this.state.errorMessage && this.state.search ? (
            <section className='section'>
              <div className='container has-text-centered info'>
                <p>something went wrong</p>
                <p>did you forgot to type a city?</p>
              </div>
            </section>
          ) : (
                <>
                  <Weather weather={this.state.weather} />
                  <Forecast forecast={this.state.forecast} />
                  <Footer />
                </>
              )}
        </div>
      </div>
    );
  }
}

export default App;
