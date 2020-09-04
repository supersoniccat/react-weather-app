import React, { useState } from "react";
import Axios from "axios";

import "./Weather.css";


export default function Detailsweather(props) {
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [details, setDetails] = useState(null);
  let [icon, setIcon] = useState(null);


  function getWeather(response){
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDetails(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);


  }
  
  let apiKey = "630a779b896cbbb265d0e5f66fda7b06";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
  Axios.get(apiUrl).then(getWeather);
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <div className="details-weather">
            <p>
              Humidity: <span className="humidity"> {humidity}</span> %
            </p>
            <p>
              Wind: <span className="wind"> {wind}</span> km/h
            </p>
          </div>
        </div>
        <div className="col-4">
          <h2 className="current-temperature">{temperature}º</h2>
        </div>
        <div className="col-4">
          <img
            src= {`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            className="weather-icon"
            id="weather-icon"
          />
          <p className="weather-text weather-description" id="description">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}
