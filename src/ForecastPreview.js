import React from "react";
import "./ForecastPreview.css";


export default function ForecastPreview(props) {

    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if( hours<10) hours = `0${hours}`
    let maxTemp = Math.round(props.data.main.temp_max);
    let minTemp = Math.round(props.data.main.temp_min);
    if(props.unit !== "celsius" ){
    maxTemp = Math.round((props.data.main.temp_max*9)/5+32);
    minTemp = Math.round((props.data.main.temp_min*9)/5+32);
    }
    let icon = (props.data.weather[0].icon);     
   
  

  return (
      <div className="Forecast">
        <div className="col-2 hourbox">
        <div className="hourforecast">
            {hours}:00
             <br />
           <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
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