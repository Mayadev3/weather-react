import "./Weather.css";

export default function Weather() {
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
                <form>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    autoFocus="off"
                    autoComplete="off"
                    className="search-bar"
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
                    <li id="day-time">{weatherData.date}</li>
                    <li>
                      <span className="weather" id="description">
                        {weatherData.description}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="city-details2">
                <div className="list-details2">
                  <ul>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span>km/hr
                    </li>
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
                    <span id="temp-number">{weatherData.temperature}</span>
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
