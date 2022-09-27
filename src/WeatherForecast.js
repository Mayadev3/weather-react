import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForescast(props) {
  const [loaded, setLoaded] = useState(false);
  const [foreCast, setForecast] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
    );
  }
  function search() {
    let apiKey = "8ffe8ebc319a3f920065447a31ce0df0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    console.log(foreCast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay icon={icon} data={foreCast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
