import { ActionTypes } from "../constants/actionTypes";

export const setCountries = (countries) => {
  return {
    type: ActionTypes.SET_COUNTRIES,
    payload: countries,
  };
};

export const setCountry = (country) => {
  return {
    type: ActionTypes.SET_COUNTRY,
    payload: country,
  };
};
