import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countryActions";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import CountrySearch from "../Search/CountrySearch";

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

  return (
    <div className="grid-container">
      <div>Search for a Country</div>
      <CountrySearch />
      <MapContainer />
      <div className="row aligned-middle">{countryList}</div>
    </div>
  );
};

export default CountryContainer;
