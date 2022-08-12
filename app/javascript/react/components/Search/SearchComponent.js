import React, { useState, useEffect } from "react";
import SearchAutoComplete from "./SearchAutoComplete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const SearchComponent = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountries(data);
    };
    getCountries();
  }, []);

  const navigateCountry = (country) => {
    {
      country.name
        ? navigate(`/countries/${slugify(country.name.common)}`)
        : navigate(`/countries/${slugify(country)}`);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h3>Search Country by Name</h3>

          <div className="search-bar-container">
            <SearchAutoComplete
              data={countries}
              onSelect={(country) => {
                navigateCountry(country);
              }}
              navigateCountry={navigateCountry}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
