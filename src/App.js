import React from "react";
import "./App.css";

import WeatherApp from "./WeatherApp";


export default function App() {
  return (
    <div className="App">
      
      <WeatherApp defaultCity="Porto"/>
     

      <p className="disclaimer">
      <a href="https://github.com/supersoniccat">
          Open-sourced code{" "}
        </a>
        by Cátia Santos 👩‍💻
      </p>
    </div>
  );
}
