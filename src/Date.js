import React from "react";
import "./Date.css";

export default function Date(props) {


  return (
    <div className="Date">
      <img
        src="images\undraw_weather_app_i5sm (1).svg"
        alt="icon"
        class="weather-app-icon"
      />
      <p class="date" id="current-date">
        Sun, August 23
      </p>
      <p class="hours" id="current-hours">
        12:00
      </p>
    </div>
  );
}
