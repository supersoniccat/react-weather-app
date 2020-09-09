import React, { useState } from "react";
import "./Forecast.css";
import Axios from "axios";
import ForecastPreview from "./ForecastPreview";


export default function Forecast(props) {
  const [loaded, setloudedForecast] = useState (false);
  const [forecast, setForecast] = useState(null);


  function getForecast(response){
        setForecast (response.data);
        setloudedForecast (true);
  }

    if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastPreview  data={forecast.list[0]} unit={props.unit} />
        <ForecastPreview  data={forecast.list[1]} unit={props.unit}/>
        <ForecastPreview  data={forecast.list[2]} unit={props.unit}/>
        <ForecastPreview  data={forecast.list[3]} unit={props.unit}/>
        <ForecastPreview  data={forecast.list[4]} unit={props.unit}/>
      </div>);  
  } else {
    let apiKey = "17d06d43acb662bf5676f18abd245c58";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    Axios.get(apiUrl).then(getForecast);

  } return null;
}
