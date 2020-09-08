import React, { useState } from "react";
import "./WeatherApp.css";
import Axios from "axios";


import DetailsWeather from "./DetailsWeather";
import Forecast from "./Forecast";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState ({ready:false});
  const [unit, setUnit] = useState("celsius");
  

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  function getWeather(response){
    let celTemp = Math.round(response.data.main.temp);
    let fahrTemp = (celTemp * 9) / 5 + 32;
    
    if (unit === "celsius") {
    setweatherData({
      ready: true,
      date: new Date (response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      details: response.data.weather[0].description,
      icon: response.data.weather[0].icon,      
    });
  } else {
    setweatherData({
      ready: true,
      date: new Date (response.data.dt * 1000),
      city: response.data.name,
      temperature: fahrTemp,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      details: response.data.weather[0].description,
      icon: response.data.weather[0].icon,      
    });
  }
}

  function handleSubmit(event){
    event.preventDefault();
    let apiKey = "17d06d43acb662bf5676f18abd245c58";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    Axios.get(apiUrl).then(getWeather);  
  }

  function handlecityChange(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="Search">
              <form className="search-city-bar" onSubmit={handleSubmit}>
                <input type="search" className="form-search"  autoFocus="on" placeholder="Enter a city..." onChange={handlecityChange}/>
                <button type="submit" className="search-button" value="Search">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-3">
          <div className="Units">
      <button className="weather-unit" id="celsius-btn" onClick={showCelsius}>
        <img
          src="\images\iconfinder_weather_21_2682830.png"
          alt="celcius"
          width="20px"
        />
      </button>
      <button className="weather-unit" id="far-btn" onClick={showFahrenheit}>
        <img
          src="\images\iconfinder_weather_22_2682829.png"
          alt="far"
          width="20px"
        />
      </button>
    </div>
          </div>
        </div>
        <DetailsWeather data={weatherData}/>
        <div className="row">
          <div className="w-100" />
          <div className="col more-info">
            <span className="forecastsection"> next hours : </span>
          </div>
          <div className="w-100" />
        </div>
        <div className="row justify-content-center">
         <Forecast city={weatherData.city} />
        </div>
      </div>
    
  );
} else {
  let apiKey = "17d06d43acb662bf5676f18abd245c58";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
  Axios.get(apiUrl).then(getWeather);
  return "Loading...";
}
  }