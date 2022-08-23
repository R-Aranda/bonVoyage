import React, { Fragment } from "react";
import { useCity } from "../../contexts/CityContext";
import YelpIndex from "../Country/YelpIndex";
import Weather from "../Weather/Weather";
import SkyScannerFlight from "../SkyScanner/SkyScannerFlight";
import SkyScannerHotel from "../SkyScanner/SkyScannerHotel";

const CityShowPage = () => {
  const { city } = useCity();

  return (
    <Fragment>
      <div className="grid-x city-header ">
        <div className="cell small-9 city-header-name">{city.name}</div>
        <div className="cell small-3">
          <Weather weather={city.weather} />
        </div>
      </div>
      <div className="city-container grid-x">
        <YelpIndex yelpArray={city.yelp} />

        <div className="cell small-10 medium-6 large-6">
          <SkyScannerFlight city={city.name} />

          <SkyScannerHotel city={city.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default CityShowPage;
