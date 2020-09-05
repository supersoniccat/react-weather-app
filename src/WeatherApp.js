import React, { useState } from "react";
import "./WeatherApp.css";

import Units from "./Units";
import Date from "./Date";
import DetailsWeather from "./DetailsWeather";
import Forecast from "./Forecast";

export default function WeatherApp(props) {
  let [city, setCity] = useState(props.defaultCity);

function handleSubmit(event){
event.preventdefault()

function changeCity(event){
 setCity(event.target.value);
}


}
  return (
       <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
          <div className="Search">
            <form className="search-city-bar" onSubmit={handleSubmit}>
              <input type="search" className="city-search-input"  placeholder="Search City" onChange={changeCity}/>
                <button type="submit" className="search-button" >
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
        {city}
      </h1>
    </div>
          </div>
        </div>
        <DetailsWeather defaultCity="Aveiro"/>
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
