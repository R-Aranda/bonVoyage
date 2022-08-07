import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country}&units=imperial&appid=`
      )
      .then((resp) => {
        setWeatherData(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [weatherData.length]);
  console.log(weatherData);
  return (
    <div>
      {loaded && (
        <div>
          <div>Current Temperature: {parseInt(weatherData.main.temp)}°</div>
          <div>High of: {parseInt(weatherData.main.temp_max)}°</div>
          <div>Low of: {parseInt(weatherData.main.temp_min)}°</div>
          <div>Feels Like: {parseInt(weatherData.main.feels_like)}°</div>
          <div>Humidity: {weatherData.main.humidity}%</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
