import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";

const CountryContainer = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/countries.json")
      .then((resp) => {
        setCountries(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, [countries.length]);

  const countryList = countries.map((country) => {
    return (
      <CountryItem key={country.id} name={country.name} slug={country.slug} />
    );
  });

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {countryList}
      </div>
    </div>
  );
};

export default CountryContainer;
