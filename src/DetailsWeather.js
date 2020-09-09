import React from "react";
import "./DetailsWeather.css";

import Date from "./Date";
import City from "./City";


export default function DetailsWeather(props) {
  
  
  if (props.unit === "celsius") {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <Date date={props.data.date}/>
        </div>
        <div className="col-8">
          <City city ={props.data.city}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="details-weather">
            <p>
              Humidity: <span className="humidity"> {props.data.humidity}</span> %
            </p>
            <p>
              Wind: <span className="wind"> {props.data.wind}</span> km/h
            </p>
          </div>
        </div>
        <div className="col-4">
          <h2 className="current-temperature">{props.data.temperature}º</h2>
        </div>
        <div className="col-4">
          <img
            src= {`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="Weather Icon"
            className="weather-icon"
            id="weather-icon"
          />
          <p className="weather-text weather-description" id="description">
            {props.data.details}
          </p>
        </div>
      </div>
    </div>
  );
} else {
  return(<div className="Weather">
  <div className="row">
    <div className="col-4">
      <Date date={props.data.date}/>
    </div>
    <div className="col-8">
      <City city ={props.data.city}/>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <div className="details-weather">
        <p>
          Humidity: <span className="humidity"> {props.data.humidity}</span> %
        </p>
        <p>
          Wind: <span className="wind"> {props.data.wind}</span> km/h
        </p>
      </div>
    </div>
    <div className="col-4">
      <h2 className="current-temperature"> {Math.round((props.data.temperature*9)/5+32)}º</h2>
    </div>
    <div className="col-4">
      <img
        src= {`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
        alt="Weather Icon"
        className="weather-icon"
        id="weather-icon"
      />
      <p className="weather-text weather-description" id="description">
        {props.data.details}
      </p>
    </div>
  </div>
</div>
);
}
}
