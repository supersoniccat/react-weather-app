import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="col-2 hourbox">
        <div className="hourforecast">
          {props.hour}
          <br />
          <img
            src="images/iconfinder_weather_2_2682849.png"
            alt="weather icon"
            width="30px;"
          />
          <p>
            <span className="MaxT">{props.maxT}</span>º |{" "}
            <span className="MinT">{props.minT}</span>º
          </p>
        </div>
      </div>
    </div>
  );
}
