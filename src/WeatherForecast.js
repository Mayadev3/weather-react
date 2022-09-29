import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForescast(props) {
  const [loaded, setLoaded] = useState(false);
  const [foreCast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
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
          {foreCast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col forecast-container" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null; //for the loop
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
