import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { LineWave } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "8ffe8ebc319a3f920065447a31ce0df0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card-container">
          <div className="weather-app-wrapper">
            <div className="card">
              <div className="card-body">
                <div className="list-container">
                  <ul>
                    <li>
                      <a href="/">Paris</a>
                    </li>
                    <li>
                      <a href="/">Helsinki</a>
                    </li>
                    <li>
                      <a href="/">Berlin</a>
                    </li>
                  </ul>
                </div>

                <div className="nav-bar">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Enter city name"
                      autoFocus="off"
                      autoComplete="off"
                      className="search-bar"
                      onChange={handleCityChange}
                    />
                    <input
                      type="submit"
                      value="Search"
                      className="search-button"
                    />
                    <input
                      type="submit"
                      value="Current Location"
                      id="current-location-button"
                    />
                  </form>
                </div>

                <div className="city-details">
                  <div className="list-details">
                    <ul>
                      <li>
                        <span className="berlin">{weatherData.city}</span>
                      </li>
                      <li id="day-time">
                        <FormattedDate date={weatherData.date} />
                      </li>
                      <li>
                        <span className="weather">
                          {weatherData.description}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="city-details2">
                  <div className="list-details2">
                    <ul>
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {Math.round(weatherData.wind)}km/hr</li>
                    </ul>
                  </div>
                </div>

                <div className="temp-container">
                  <img
                    src={weatherData.iconUrl}
                    className="iconImage"
                    alt={weatherData.description}
                  />
                  <WeatherTemperature celsius={weatherData.temperature} />
                </div>
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
            </div>
            <p className="open-source">
              This project was coded by Maya Barbir and is
              <a
                href="https://github.com/Mayadev3/weather-react"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                open-sourced on GitHub{" "}
              </a>
              and hosted on
              <a
                href="https://luxury-pudding-f10ac2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Netlify
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="lineWaves">
        <LineWave
          height="250"
          width="250"
          color="#191970"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor="#191970"
          middleLineColor="yellow"
          lastLineColor="#191970"
        />
      </div>
    );
  }
}
