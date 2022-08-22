import React, { useContext, useState, useEffect } from "react";
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
  const [currentUser, setCurrentUser] = useState();

  const createLocalCity = (city) => {
    if (city.status === 401) {
      window.location.href = "/users/sign_in";
    } else if (city.status === 400) {
      return setErrors(city.error);
    }
  };

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
