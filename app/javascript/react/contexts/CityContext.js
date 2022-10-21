import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getCity } from "../services/city";

const Context = React.createContext();

export const useCity = () => {
  return useContext(Context);
};

export const CityProvider = ({ children }) => {
  const name = useParams();
  const { loading, error, value: city } = useAsync(() => getCity(name.city), [
    name.city,
  ]);
  const [errors, setErrors] = useState([]);

  return (
    <Context.Provider
      value={{
        city: { name, ...city },
        errors: errors,
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
