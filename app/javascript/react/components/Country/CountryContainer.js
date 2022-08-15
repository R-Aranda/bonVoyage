import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import SearchComponent from "../Search/SearchComponent";

const CountryContainer = () => {
  const [countries, setCountries] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/countries.json")
      .then((resp) => {
        setCountries(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  let countryList;
  {
    loaded &&
      (countryList = countries.map((country) => {
        return (
          <CountryItem
            key={country.id}
            name={country.name}
            slug={country.slug}
          />
        );
      }));
  }

  let tenCountries;

  {
    loaded &&
      (tenCountries = countryList.sort(() => 0.5 - Math.random()).slice(0, 10));
  }

  return (
    <div className="grid-container">
      <MapContainer />
      <SearchComponent />
      <div className="row aligned-middle">{tenCountries}</div>
    </div>
  );
};

export default CountryContainer;
