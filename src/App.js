import React from "react";
import "./App.css";

import Units from "./Units";
import Search from "./Search";
import Current from "./Current";
import Date from "./Date";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-3">
            <Units />
          </div>
          <div className="col-6">
            <Search />
          </div>
          <div className="col-3">
            <Current />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Date />
          </div>
          <div className="col-8">
            <City />{" "}
          </div>
        </div>
        <Weather />
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
      <p class="disclaimer">
        <a href="https://github.com/supersoniccat/Weather-app">
          Open-sourced code{" "}
        </a>
        by Cátia Santos 👩‍💻
      </p>
    </div>
  );
}
