import React, { useState } from "react";
import Weather from "./Weather.js";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{Math.round(props.celsius)}</span>

        <sup className="degreeClickers">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{Math.round(fahrenheit)} </span>
        <sup className="degreeClickers">
          <a href="/" onclick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </sup>
      </div>
    );
  }
}
