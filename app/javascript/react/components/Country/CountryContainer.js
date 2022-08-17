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
      <div class="marketing-site-hero">
        <div class="marketing-site-hero-content">
          <h1>Travel App</h1>
          <p class="subheader">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            omnis, maxime libero natus qui minus!
          </p>
          <a href="#" class="round button">
            learn more
          </a>
        </div>
      </div>
      <MapContainer />
      <SearchComponent />
      <div className="row aligned-middle">{tenCountries}</div>
    </div>
  );
};

export default CountryContainer;
