import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [info, setInfo] = useState({});
  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setInfo({
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8ffe8ebc319a3f920065447a31ce0df0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let weatherData = {
    city: "Berlin",
    temperature: 21,
    date: "Wednesday 18:00",
    description: "Clear Sky",
    humidity: 51,
    wind: 3.6,
  };

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
                    onChange={handleChange}
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
                      <span className="berlin">{city}</span>
                    </li>
                    <li id="day-time">{weatherData.date}</li>
                    <li>
                      <span className="weather">{info.description}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="city-details2">
                <div className="list-details2">
                  <ul>
                    <li>Humidity: {info.humidity}%</li>
                    <li>Wind: {Math.round(info.wind)}km/hr</li>
                  </ul>
                </div>
              </div>

              <div className="temp-container">
                <p className="current-temp">
                  <img
                    src="images/sun.png"
                    className="sun-icon"
                    id="icon"
                    alt="sun"
                  />
                  <span className="degrees">
                    {Math.round(info.temperature)}
                    <sup>
                      <a href="/" id="temp-celsius" className="active">
                        °C
                      </a>
                      |
                      <a href="/" id="temp-fahrenheit">
                        °F
                      </a>
                    </sup>
                  </span>
                </p>
              </div>
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
}
