import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForescast(props) {
  function handleResponse(response) {}
  console.log(props);
  let apiKey = "8ffe8ebc319a3f920065447a31ce0df0";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  //axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <p className=" day ms-2 mb-5">Thu</p>
          <img src="/images/sun.png" alt="sun" className="forecastImg ms-1" />
          <div className="tempExtremes">
            <span className="maxTemp me-2">35°</span>
            <span className="minTemp">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
