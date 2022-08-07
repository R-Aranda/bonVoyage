import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countryActions";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";

const CountryContainer = (props) => {
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchCountries = async () => {
    const response = await axios.get("/api/v1/countries.json").catch((err) => {
      console.log("Err", err);
    });
    dispatch(setCountries(response.data));
  };

  useEffect(() => {
    fetchCountries();
  }, [countries.length]);

  const countryList = countries.allCountries.countries.map((country) => {
    return (
      <CountryItem key={country.id} name={country.name} slug={country.slug} />
    );
  });

  return (
    <div className="grid-container">
      <div className="row">
        <MapContainer />
        {countryList}
      </div>
    </div>
  );
};

export default CountryContainer;
