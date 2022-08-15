import { makeRequest } from "./makeRequest";

export const getCountries = () => {
  return makeRequest("/countries");
};

export const getCountry = (slug) => {
  return makeRequest(`/countries/${slug}`);
};
