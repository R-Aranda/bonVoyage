import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import SearchComponent from "../Search/SearchComponent";
import { getCountries } from "../../services/country";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  // debugger;

  const countryList = countries.map((country) => {
    return (
      <CountryItem key={country.id} name={country.name} slug={country.slug} />
    );
  });

  const tenCountries = countryList.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <div className="grid-container">
      <MapContainer />
      <SearchComponent />
      <div className="row aligned-middle">{tenCountries}</div>
    </div>
  );
};

export default CountryContainer;
