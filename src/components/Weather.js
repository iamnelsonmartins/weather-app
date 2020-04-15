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
                <div className="columns has-text-centered is-centered">
                    <div className="column is-half">
                        <p className='title'>{weather.name} <strong>{weather.sys.country}</strong></p>
                        <div className="columns">
                            <div className="column">
                                <span className='bigTemp bold'>{Math.round(weather.main.temp)}°</span>
                            </div>
                            <div className="column description">
                                <p>max: {Math.round(weather.main.temp_max)}°</p>
                                <p>min: {Math.round(weather.main.temp_min)}°</p>
                                <p>{weather.weather[0].description}</p>
                                <p>sunrise: {calculateDate(weather.sys.sunrise)}</p>
                                <p>sunset: {calculateDate(weather.sys.sunset)}</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </section >
    )

}

export default Weather