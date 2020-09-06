import React, { useState } from "react";
import "./WeatherApp.css";
import Axios from "axios";

import City from "./City";
import Units from "./Units";
import Date from "./Date";
import DetailsWeather from "./DetailsWeather";
import Forecast from "./Forecast";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState ({ready:false});

  function getWeather(response){
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      details: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  
  }

  function handlecityChange(event){
    setCity(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function search(){
  let apiKey = "17d06d43acb662bf5676f18abd245c58";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
Axios.get(apiUrl).then(getWeather);   
  }

  if (weatherData.ready = true) 
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
          <Units />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Date />
          </div>
          <div className="col-8">
          <div className="City">
      <h1 class="local-city" id="city">
        <City city ={city}/>
      </h1>
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
          <Forecast hour="15:00" maxT={28} minT={27} />
          <Forecast hour="18:00" maxT={32} minT={31} />
          <Forecast hour="21:00" maxT={30} minT={29} />
          <Forecast hour="00:00" maxT={28} minT={27} />
          <Forecast hour="03:00" maxT={26} minT={25} />
        </div>
      </div>
    
  );
}
