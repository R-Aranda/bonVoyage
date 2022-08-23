import React from "react";
import { Link } from "react-router-dom";
import { useCountry } from "../../contexts/CountryContext";

const CitiesIndex = () => {
  const { cities } = useCountry();
  const cityList = cities.map((city) => {
    return (
      <div key={city.id}>
        <Link to={`cities/${city.slug}`}>
          <h5>{city.name}</h5>
        </Link>
      </div>
    );
  });

  return <div>{cityList.sort()}</div>;
};

export default CitiesIndex;
