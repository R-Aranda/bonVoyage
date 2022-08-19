import React, { Fragment } from "react";
import CountryItem from "./CountryItem";
import MapContainer from "../Map/MapContainer";
import SearchComponent from "../Search/SearchComponent";
import { getCountries } from "../../services/country";
import { useAsync } from "../../hooks/useAsync";
import LandingHeader from "./LandingHeader";

const CountryContainer = () => {
  const { loading, error, value: countries } = useAsync(getCountries);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const countryList = countries.map((country) => {
    return (
      <div key={country.id} className="cell small-12 medium-6">
        <CountryItem name={country.name} slug={country.slug} />
      </div>
    );
  });

  const tenCountries = countryList.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <Fragment>
      <LandingHeader />
      <SearchComponent />
      <div className="grid-x">
        <MapContainer />
        {tenCountries}
      </div>
    </Fragment>
  );
};

export default CountryContainer;
