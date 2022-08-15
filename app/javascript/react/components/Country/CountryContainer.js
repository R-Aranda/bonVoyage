import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countryActions";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import CountrySearch from "../Search/CountrySearch";
import SearchComponent from "../Search/SearchComponent";

const CountryContainer = () => {
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/v1/countries.json")
      .then((resp) => {
        dispatch(setCountries(resp.data));
      })
      .catch((resp) => console.log(resp));
  }, [countries.length]);

  const countryList = countries.country.countries.map((country) => {
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
