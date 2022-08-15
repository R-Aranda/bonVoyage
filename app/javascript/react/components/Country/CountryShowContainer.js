import React, { useState, useEffect, Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";

const CountryShowContainer = (props) => {
  const { country } = useCountry();

  return (
    <Fragment>
      <h2>{country.name}</h2>
      <img src={country.photo} />
      {/* <Weather country={country.country.name} /> */}
      <PostIndexContainer posts={country.posts} country={country} />
    </Fragment>
  );
};

export default CountryShowContainer;
