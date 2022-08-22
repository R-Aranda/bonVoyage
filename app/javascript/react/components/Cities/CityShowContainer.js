import React from "react";
import { useAsync, useAsyncFn } from "../../hooks/useAsync";
import { getCities } from "../../services/city";

const CityShowContainer = () => {
  // const { value: cities } = useAsync(() => getCities("England"), []);

  const { loading, error, execute: getCityData } = useAsyncFn(
    getCities("Barcelona")
  );
  debugger;

  const handleClick = (e) => {
    e.preventDefault;
  };
  return (
    <div>
      <form action="">
        <input />
        <button className="search" />
      </form>
    </div>
  );
};

export default CityShowContainer;
