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
      <CountryItem key={country.id} name={country.name} slug={country.slug} />
    );
  });

  const tenCountries = countryList.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <Fragment>
      <LandingHeader />
      <div className="grid-container">
        <MapContainer />
        <SearchComponent />
        <div className="row aligned-middle">{tenCountries}</div>
      </div>
    </Fragment>
  );
};

export default CountryContainer;

<div className="fullscreen-image-slider">
  <div
    className="orbit"
    role="region"
    aria-label="FullScreen Pictures"
    data-orbit
  >
    <ul className="orbit-container">
      <button className="orbit-previous">
        <span className="show-for-sr">Previous Slide</span>
        <span className="nav fa fa-chevron-left fa-3x"></span>
      </button>
      <button className="orbit-next">
        <span className="show-for-sr">Next Slide</span>
        <span className="nav fa fa-chevron-right fa-3x"></span>
      </button>
      <li className="is-active orbit-slide">
        <img
          className="orbit-image"
          src="https://i.imgur.com/16z9ObN.jpg"
          alt="Space"
        />
        <figcaption className="orbit-caption">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </figcaption>
      </li>
      <li className="orbit-slide">
        <img
          className="orbit-image"
          src="https://i.imgur.com/JD4Caxa.jpg"
          alt="Space"
        />
        <figcaption className="orbit-caption">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </figcaption>
      </li>
      <li className="orbit-slide">
        <img
          className="orbit-image"
          src="https://i.imgur.com/rsTQbNV.jpg"
          alt="Space"
        />
        <figcaption className="orbit-caption">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </figcaption>
      </li>
    </ul>
  </div>
</div>;
