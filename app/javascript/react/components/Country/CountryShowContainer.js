import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryShowContainer = (props) => {
  let slug = props.match.params.slug;
  const [country, setCountry] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slug}.json`)
      .then((resp) => {
        setCountry(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [country.length]);

  return (
    <div>
      <h2>{country.name}</h2>
    </div>
  );
};

export default CountryShowContainer;
