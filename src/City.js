import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1 class="local-city" id="city">
        {props.city}
      </h1>
    </div>
  );
}
