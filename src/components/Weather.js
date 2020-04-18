import React from 'react'

const Weather = ({ weather }) => {
    const icon = weather.weather[0].icon;
    const desc = weather.weather[0].main;

    const calculateDate = time => {
        const date = new Date(time * 1000)
        return date.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        < section className="section" >
            <div className="container">
                <div className="columns has-text-centered is-centered">
                    <div className="column is-half">
                        <p className='city'>{weather.name}, <b>{weather.sys.country}</b>
                        </p>
                        <div className="columns">
                            <div className="column">
                                <img
                                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                    alt={desc}
                                />
                            </div>
                            <div className="column">
                                <span className='bigTemp bold'>{Math.round(weather.main.temp)}°</span>
                            </div>
                            <div className="column description has-text-left">
                                <p><b>{Math.round(weather.main.temp_max)}° </b> {Math.round(weather.main.temp_min)}°</p>
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