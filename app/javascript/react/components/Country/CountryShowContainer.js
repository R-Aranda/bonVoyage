import React, { Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";

const CountryShowContainer = () => {
  const { country } = useCountry();

  const testPhoto =
    "https://images.unsplash.com/photo-1555862092-70470c0c8df4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTYxODJ8MHwxfHNlYXJjaHwxfHwlMjMlM0NDb3VudHJ5JTNBMHgwMDAwMDAwMTBiNTY4M2Q4JTNFfGVufDB8fHx8MTY2MDY5NjAyNA&ixlib=rb-1.2.1&q=80&utm_source=ruperts_travel_app&utm_medium=referral&utm_campaign=api-credit";

  const headerPhoto = {
    background: "url(" + `${country.photo}` + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Fragment>
      <div className="country-header" style={headerPhoto}>
        <h2 className="country-header-text">{country.name}</h2>
      </div>
      {/* <Weather country={country.country.name} /> */}
      <PostIndexContainer />
    </Fragment>
  );
};

export default CountryShowContainer;
