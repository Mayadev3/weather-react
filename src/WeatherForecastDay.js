import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="WeatherForecastDay">
      {" "}
      <p className=" day ms-2 mb-5">{day()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="sun"
        className="forecastImg ms-1"
      />
      <div className="tempExtremes">
        <span className="maxTemp me-2">{maxTemperature()}°</span>
        <span className="minTemp">{minTemperature()}°</span>
      </div>
    </div>
  );
}
