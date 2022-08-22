import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { useCity } from "../../contexts/CityContext";
import YelpIndex from "../Country/YelpIndex";

const CityShowPage = () => {
  debugger;
  const { city } = useCity();
  console.log(city);
  return (
    <Fragment>
      <div>{city.name}</div>
      <div className="grid-x">
        <YelpIndex yelpArray={city.yelp} />
      </div>
    </Fragment>
  );
};

export default CityShowPage;
