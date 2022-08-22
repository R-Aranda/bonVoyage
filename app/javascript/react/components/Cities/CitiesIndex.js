import React from "react";
import { Link } from "react-router-dom";

const CitiesIndex = ({ cities }) => {
  const cityList = cities.map((city) => {
    return (
      <div>
        <Link to={`cities/${city.slug}`}>
          <h2>{city.name}</h2>
        </Link>
      </div>
    );
  });

  return <div>{cityList}</div>;
};

export default CitiesIndex;
