import React from "react";
import "./ForecastPreview.css";


export default function ForecastPreview(props) {

    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    let maxTemp = Math.round(props.data.main.temp_max);
    let minTemp = Math.round(props.data.main.temp_min);
   
  

  return (
      <div className="Forecast">
        <div className="col-2 hourbox">
        <div className="hourforecast">
            {hours}
             <br />
           <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="weather icon"
            width="30px;"
          />
           <p>
            <span className="MaxT">{maxTemp}º</span> |{" "}
            <span className="MinT"> {minTemp}</span>º
          </p>
        </div>
      </div>
    </div>
  );
} 