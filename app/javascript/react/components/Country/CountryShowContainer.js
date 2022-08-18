import React, { Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";

const CountryShowContainer = () => {
  const { country } = useCountry();
  const testPhoto =
    "https://images.unsplash.com/photo-1488158302608-a31885ac02ff?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTYxODJ8MHwxfHNlYXJjaHwxfHxaaW1iYWJ3ZXxlbnwwfHx8fDE2NjA2OTc0NTY&ixlib=rb-1.2.1&q=80&utm_source=ruperts_travel_app&utm_medium=referral&utm_campaign=api-credit";

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
      <PostIndexContainer />
    </Fragment>
  );
};

export default CountryShowContainer;
