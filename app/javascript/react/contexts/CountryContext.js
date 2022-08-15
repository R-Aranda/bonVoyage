import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getCountry } from "../services/country";

const Context = React.createContext();

export const useCountry = () => {
  return useContext(Context);
};

export const CountryProvider = ({ children }) => {
  const slug = useParams();
  const { loading, error, value: country } = useAsync(
    () => getCountry(slug.slug),
    [slug]
  );
  return (
    <Context.Provider
      value={{
        country: { slug, ...country },
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
