import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="cell small-5 medium-4 large-4">
      <div className="weather-container">
        <div className="weather-temp">
          Current Temperature: {parseInt(weather.temp)}°
        </div>
        <div className="max-temp">High of: {parseInt(weather.max)}°</div>
        <div className="min-temp">Low of: {parseInt(weather.min)}°</div>
        <div className="feels-like">
          Feels Like: {parseInt(weather.feelsLike)}°
        </div>
        <div className="humidity">Humidity: {weather.humidity}%</div>
      </div>
    </div>
  );
};

export default Weather;
