import React, { useState, useRef, useEffect } from "react";
import SearchAutoComplete from "./SearchAutoComplete";
import axios from "axios";

const SearchComponent = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Search for Country</h2>
          <p>Search Country by Name</p>
          <div className="d-flex justify-content-center">
            <div className="search-bar-container">
              <SearchAutoComplete
                data={countries}
                onSelect={(country) => setCountry(country)}
              />
            </div>
          </div>
          {console.log(country.name)}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
