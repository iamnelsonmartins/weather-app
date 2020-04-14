import React from 'react'

const Forecast = ({ forecast }) => {

    let data = [];

    const handleForecastDays = array => {
        for (let i = 0; i < forecast.length; i++) {
            data.push(
                <tr key={i}>
                    <td>{array[i].dt_txt.match(/[0-9]{4}[-][0-9]{2}[-][0-9]{2}[ ][0-9]{2}[:][0-9]{2}/g)}</td>
                    <td>{Math.ceil(array[i].main.temp)}°</td>
                    <td>{Math.ceil(array[i].main.temp_min)}°</td>
                    <td>{Math.ceil(array[i].main.temp_max)}°</td>
                    <td>{array[i].weather[0].description}</td>
                </tr>
            )
        }
        return data
    }

    return (
        <section className="section">
            <div className="container">
                <div className='columns is-centered'>
                    <table className="table is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Date/Time</th>
                                <th>Temperature</th>
                                <th>min</th>
                                <th>max</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {handleForecastDays(forecast)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )

}

export default Forecast