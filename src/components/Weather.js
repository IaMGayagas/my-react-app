import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// WeatherData component
const WeatherData = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            const API_KEY = '93eb285519e25d6f16e1ea3f49ff90c7';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
            setLocation('');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="col-12 col-xl-8 col-lg-6">
                    <h1 className='text=center font-bold-xl'>WEATHER UPDATE</h1>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyDown={searchLocation}
                    />
                </div>
            </div>
            <Weather weatherData={data} />
        </div>
    );
}

// Weather component
const Weather = ({ weatherData }) => {
    return (
        <div>
            {weatherData && weatherData.weather ? (
                <div className="card mx-auto my-4" style={{ maxWidth: '500px' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <h5 className="card-title">
                                    {weatherData.name}, {weatherData.sys.country}
                                </h5>
                                <p className="card-text text-muted">
                                    {weatherData.weather[0].description}
                                </p>
                                <h1 className="display-4">
                                    {weatherData.main.temp.toFixed()} °C
                                </h1>
                            </div>
                            <div className="d-flex align-items-end">
                                <img
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <ul className="list-group list-group-flush mt-4">
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Feels Like</span>
                                <span className="font-weight-bold">
                                    {weatherData.main.feels_like.toFixed()} °C
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Humidity</span>
                                <span className="font-weight-bold">
                                    {weatherData.main.humidity.toFixed()} %
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Wind Speed</span>
                                <span className="font-weight-bold">
                                    {weatherData.wind.speed.toFixed()} m/s
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Pressure</span>
                                <span className="font-weight-bold">
                                    {weatherData.main.pressure.toFixed()} hPa
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export { WeatherData, Weather };
