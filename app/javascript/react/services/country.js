import { makeRequest } from "./makeRequest";

export const getCountries = () => {
  return makeRequest("/countries");
};
