import React, { Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";
import YelpIndex from "./YelpIndex";
import PostForm from "../Post/PostForm";
import SkyScanner from "../SkyScanner/SkyScanner";

const CountryShowContainer = () => {
  const { country } = useCountry();
  const testPhoto =
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80";

  const testPhoto2 =
    "https://images.unsplash.com/photo-1517949908114-71669a64d885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTYxODJ8MHwxfHNlYXJjaHwxfHxDYW5hZGF8ZW58MHx8fHwxNjYwOTQ1MDA4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=ruperts_travel_app&utm_medium=referral&utm_campaign=api-credit";

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
      {/* <Weather country={country.country.name} /> */}

      <div className="grid-x">
        <div className="cell small-12 medium-8 large-8">
          <PostForm />
          <PostIndexContainer />
        </div>
        <div className="cell small-12 medium-4 large-4">
          <SkyScanner country={country.name} />
        </div>
        <YelpIndex yelpArray={country.yelp} />
      </div>
    </Fragment>
  );
};

export default CountryShowContainer;
