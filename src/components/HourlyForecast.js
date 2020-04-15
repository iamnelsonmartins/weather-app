import React from "react";

const HourlyForecast = ({ data }) => {

    const getHour = time => time ? new Date(time).getHours() : new Date().getHours();

    const displayMoreInfo = (data, index) => {
        return (
            <div key={index}>
                <div className='weather-details'>
                    <div className='weather-details-data'>
                        {`${getHour(data.dt * 1000 - 1000)}:00`}
                    </div>
                    <div className='weather-details-data'>
                        <strong>{`${Math.round(data.main.temp_max)}°`} </strong>
                        {`${Math.round(data.main.temp_min)}°`}
                    </div>
                    <span className='spacer' />
                </div>
            </div>
        );
    };

    return (
        <div className="weather-hour">
            {data.map((data, index) => (
                displayMoreInfo(data, index)
            ))}
        </div>
    );
};

export default HourlyForecast