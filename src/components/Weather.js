import React from 'react'

const Weather = ({ weather }) => {
    const calculateDate = time => {
        const inValue = time
        const inValueInSeconds = inValue * 1000
        const date = new Date(inValueInSeconds)
        return date.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <section className="section">
            <div className="container">
                <div className='columns is-centered'>
                    <div className='column is-half has-text-centered' >
                        <p className='title'>
                            <span>{weather.name}</span>
                            <span className='bold'> {weather.sys.country}</span>
                        </p>
                        <div className='columns is-vcentered'>
                            <div className='column'>
                                <p className="title bold temp">{Math.ceil(weather.main.temp)}°</p>
                                <p className="subtitle is-6">
                                    <span className='bold'>{Math.ceil(weather.main.temp_max)}° </span>
                                    <span>{Math.ceil(weather.main.temp_min)}°</span>
                                </p>
                            </div>
                            <div className='column desc'>
                                <p>{weather.weather[0].description}</p>
                                <p>wind: {weather.wind.speed} m/s</p>
                                <p>sunrise: {calculateDate(weather.sys.sunrise)}</p>
                                <p>sunset: {calculateDate(weather.sys.sunset)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}

export default Weather