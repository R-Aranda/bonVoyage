import React, { useEffect, useState } from "react";

import axios from "axios";

const CountrySearch = (props) => {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get("/api/v1/countries");
      const countryList = response.data.map((object) => {
        return object.name;
      });
      setCountries(countryList);
    };
    getCountries();
  }, []);

  const handleSuggest = (text) => {
    setText(text);
    setSuggestions();
  };

  const handleChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter((ct) => {
        const regex = new RegExp(`${text}`, "gi");
        return ct.match(regex);
      });
    }

    setSuggestions(matches);
    setText(text);
  };
  return (
    <div>
      {text}
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={text}
        placeholder="Country..."
        className="country-input"
      />
      {suggestions &&
        suggestions.map((suggestion, i) => {
          return (
            <div
              key={i}
              onClick={() => handleSuggest(suggestion)}
              className="suggested-country"
            >
              {suggestion}
            </div>
          );
        })}
    </div>
  );
};

export default CountrySearch;
