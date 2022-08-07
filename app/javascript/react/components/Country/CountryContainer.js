import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countryActions";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";

const CountryContainer = (props) => {
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/countries.json")
      .then((resp) => {
        dispatch(setCountries(resp.data));
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [countries.length]);

  let countryList;
  if (countries.allCountries.countries) {
    countryList = countries.allCountries.countries.map((country) => {
      return (
        <CountryItem key={country.id} name={country.name} slug={country.slug} />
      );
    });
  }

  return (
    <div className="grid-container">
      <MapContainer />
      <div className="row">{countryList}</div>
    </div>
  );
};

export default CountryContainer;
