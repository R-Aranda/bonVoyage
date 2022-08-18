import React, { Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";
import YelpIndex from "./YelpIndex";
import PostForm from "../Post/PostForm";

const CountryShowContainer = () => {
  const { country } = useCountry();
  const testPhoto =
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80";

  const headerPhoto = {
    background: "url(" + `${testPhoto}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Fragment>
      <div className="country-header" style={headerPhoto}>
        <h2 className="country-header-text">{country.name}</h2>
      </div>
      <div className="country-header-credit">Photo Credit: Unsplash.com</div>
      {/* <Weather country={country.country.name} /> */}

      <div className="grid-x">
        <div className="cell small-8 medium-10">
          <PostForm />
          <PostIndexContainer />
        </div>
        <YelpIndex yelpArray={country.yelp} />
      </div>
    </Fragment>
  );
};

export default CountryShowContainer;
