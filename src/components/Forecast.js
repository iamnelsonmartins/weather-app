import React from 'react'
import HourlyForecast from './HourlyForecast'

const Forecast = ({ forecast }) => {
    const daysOfWeek = array => {
        return (array.reduce((list, item) => {
            const forecastDay = item.dt_txt.substr(0, 10);
            list[forecastDay] = list[forecastDay] || [];
            list[forecastDay].push(item);
            return list;
        }, {}));
    };


    const currentDay = array => {
        const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return day[new Date(array[0].dt * 1000).getDay()];
    };

    const minMaxTemp = (data, minTemp = [], maxTemp = []) => {
        data.forEach(value => {
            maxTemp.push(value.main.temp_max);
            minTemp.push(value.main.temp_min);
        });

        const tempMinMax = {
            min: Math.round(Math.min(...minTemp)),
            max: Math.round(Math.max(...maxTemp)),
        };

        return (
            <div>
                <div>
                    <strong>{`${tempMinMax.max}°C`}</strong> / {`${tempMinMax.min}°C`}
                </div>
            </div>
        )
    }

    const forecastDays = Object.values(daysOfWeek(forecast));
    const weatherDays = forecastDays.length > 5 ? forecastDays.slice(1, 6) : forecastDays;


    return (

        <section className="section">
            <div className="container">
                <div className='columns'>
                    {weatherDays.map((item, i) => (
                        <div key={i} className='column'>
                            <div className="currentDay">
                                <span>{currentDay(item)}</span>
                                <span>{minMaxTemp(item)}</span>
                            </div>
                            <span><HourlyForecast data={item} /></span>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )

}

export default Forecast