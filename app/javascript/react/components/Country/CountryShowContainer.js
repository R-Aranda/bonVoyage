import React, { Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import { useCountry } from "../../contexts/CountryContext";
import PostForm from "../Post/PostForm";
import CitySearch from "../City/CitySearch";
import CitiesIndex from "../City/CitiesIndex";

const CountryShowContainer = () => {
  const { country } = useCountry();

  const headerPhoto = {
    background: "url(" + `${country.photo.photo}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Fragment>
      <div className="country-header" style={headerPhoto}>
        <h2 className="country-header-text">{country.name}</h2>
      </div>
      <div className="country-header-credit">
        Photo by{" "}
        <a href={country.photo.artist_url}>{country.photo.artist_name}</a> on{" "}
        <a href={country.photo.unsplash_url}>Unsplash</a>
      </div>
      <div className="grid-x">
        <div className="cell small-12 medium-8 large-8">
          <PostForm />
          <PostIndexContainer />
        </div>
        <div className="cell small-12 medium-4 large-4">
          <CitySearch country={country} cities={country.cities} />
          <div className="city-index">
            <h3 className="city-index-header">Popular Cities</h3>
            <CitiesIndex cities={country.cities} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CountryShowContainer;
