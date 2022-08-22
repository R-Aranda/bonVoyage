import React, { useState } from "react";
import axios from "axios";
import { addCity } from "../../services/city";

const CityShowContainer = () => {
  const [input, setInput] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity();
  };

  const addCity = async () => {
    axios
      .post("/api/v1/cities", {
        method: "POST",
        name: input,
      })
      .then((res) => console.log(res));
  };

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
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
