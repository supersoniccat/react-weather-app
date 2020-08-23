import React from "react";

import "./Search.css";

export default function() {
  return (
    <div className="Search">
      <div className="form-row justify-content-center">
        <form id="search-city-bar">
          <input id="city-search-input" type="text" placeholder="Search City" />
          <button type="submit" className="search-button">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
}
