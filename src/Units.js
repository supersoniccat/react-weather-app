import React from "react";

import "./Units.css";

export default function Units() {
  return (
    <div className="Units">
      <button className="weather-unit" id="celsius-btn">
        <img
          src="\images\iconfinder_weather_21_2682830.png"
          alt="celcius"
          width="20px"
        />
      </button>
      <button className="weather-unit" id="far-btn">
        <img
          src="\images\iconfinder_weather_22_2682829.png"
          alt="far"
          width="20px"
        />
      </button>
    </div>
  );
}
