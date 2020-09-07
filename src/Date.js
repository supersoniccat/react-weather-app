import React from "react";
import "./Date.css";

export default function Date(props) {
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = [props.date.getDate()];
  let hour = [props.date.getHours()];
  if (hour <10){ hour = `0${hour}`};
  let minutes = [props.date.getMinutes()] 
  if (minutes<10) { minutes = `0${minutes}`};



  return (
    <div className="Date">
      <img
        src="images\undraw_weather_app_i5sm (1).svg"
        alt="icon"
        class="weather-app-icon"
      />
      <p class="date" id="current-date">
        {day}, {month} {date}
      </p>
      <p class="hours" id="current-hours">
        {hour}:{minutes}
      </p>
    </div>
  );
}
