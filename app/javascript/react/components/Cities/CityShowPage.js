import React, { Fragment, useEffect } from "react";
import { useCity } from "../../contexts/CityContext";
import YelpIndex from "../Country/YelpIndex";
import Weather from "../Weather/Weather";
import SkyScanner from "../SkyScanner/SkyScanner";

const CityShowPage = () => {
  const { city } = useCity();

  return (
    <Fragment>
      <h1 className="city-header">{city.name}</h1>
      <div className="city-container grid-x">
        <YelpIndex yelpArray={city.yelp} />
        <Weather weather={city.weather} />
        <SkyScanner city={city.name} />
      </div>
    </Fragment>
  );
};

export default CityShowPage;
