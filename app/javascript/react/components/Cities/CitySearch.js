import React, { useState } from "react";
import { useAsyncFn } from "../../hooks/useAsync";
import { createCity } from "../../services/city";
import { useCountry } from "../../contexts/CountryContext";
import { useNavigate } from "react-router-dom";

const CitySearch = () => {
  const [input, setInput] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const { loading, error, execute: createCityFn } = useAsyncFn(createCity);
  const { country, createNewCity, cityErrors } = useCountry();
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityCreate(input);
    setInput({
      name: "",
    });
  };

  const onCityCreate = (message) => {
    return createCityFn({ message, countryId: country.id }).then(createNewCity);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  return (
    <div className="city-form-container">
      <h4 className="city-form-header">Search for a city</h4>
      {cityErrors.length > 0 && <div className="error">{cityErrors}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          id="name"
          onChange={handleChange}
          className="city-form-input"
          placeholder="Enter a city..."
        />
        <input type="submit" className="city-form-btn" />
      </form>
    </div>
  );
};

export default CitySearch;
