import React from "react";

import "./Weather.css";

export default function Detailsweather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <div className="details-weather">
            <p>
              Humidity: <span className="humidity"> 20</span> %
            </p>
            <p>
              Wind: <span className="wind">3</span> km/h
            </p>
          </div>
        </div>
        <div className="col-4">
          <h2 className="current-temperature">27º</h2>
        </div>
        <div className="col-4">
          <img
            src="images\iconfinder_weather_3_2682848.png"
            alt="sunny"
            className="weather-icon"
            id="weather-icon"
          />
          <p className="weather-text weather-description" id="description">
            Clear sky
          </p>
        </div>
      </div>
    </div>
  );
}
