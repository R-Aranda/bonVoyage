import React from "react";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import SearchComponent from "../Search/SearchComponent";
import { getCountries } from "../../services/country";
import { useAsync } from "../../hooks/useAsync";

const CountryContainer = () => {
  const { loading, error, value: countries } = useAsync(getCountries);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

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
