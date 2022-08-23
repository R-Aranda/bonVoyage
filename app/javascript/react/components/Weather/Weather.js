import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="weather-container grid-x">
      <div className="weather-temp">
        Current Temperature <br /> <div>{parseInt(weather.temp)}°</div>
      </div>
      <div className="max-temp cell small-4">
        High of <br />
        <div>{parseInt(weather.max)}°</div>
      </div>
      <div className="min-temp cell small-4">
        Low of <br />
        <div>{parseInt(weather.min)}°</div>
      </div>
      <div className="feels-like cell small-4">
        Feels Like <br /> <div>{parseInt(weather.feelsLike)}°</div>
      </div>
    </div>
  );
};

export default Weather;
