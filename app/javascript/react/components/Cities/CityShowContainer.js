import React, { useState } from "react";
import axios from "axios";
import { addCity } from "../../services/city";
import { useAsyncFn } from "../../hooks/useAsync";
import { createCity } from "../../services/city";

const CityShowContainer = ({ country }) => {
  const [input, setInput] = useState({
    name: "",
  });
  const { loading, error, execute: createCityFn } = useAsyncFn(createCity);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityCreate(input);
  };

  const onCityCreate = (message) => {
    return createCityFn({ message, countryId: country.id });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          id="name"
          onChange={handleChange}
          placeholder="Enter a city..."
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CityShowContainer;
