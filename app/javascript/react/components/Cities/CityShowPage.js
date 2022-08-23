import React, { Fragment, useEffect } from "react";
import { useCity } from "../../contexts/CityContext";
import YelpIndex from "../Country/YelpIndex";
import Weather from "../Weather/Weather";
import SkyScannerFlight from "../SkyScanner/SkyScannerFlight";
import SkyScannerHotel from "../SkyScanner/SkyScannerHotel";

const CityShowPage = () => {
  const { city } = useCity();

  return (
    <Fragment>
      <h1 className="city-header">{city.name}</h1>
      <div className="city-container grid-x">
        <YelpIndex yelpArray={city.yelp} />
        <Weather weather={city.weather} />
        <div className="cell small-10 medium-4 large-5">
          <h5 className="skyscanner-header">Find a Flight</h5>
          <SkyScannerFlight city={city.name} />
          <h5 className="skyscanner-header">Find a Hotel</h5>
          <SkyScannerHotel city={city.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default CityShowPage;
