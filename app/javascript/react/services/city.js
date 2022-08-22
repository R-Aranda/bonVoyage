import { makeRequest } from "./makeRequest";

export const getCity = (name) => {
  return makeRequest(`/cities/${name}`);
};

export const createCity = ({ message, countryId }) => {
  message["country_id"] = countryId;
  return makeRequest("/cities", {
    method: "POST",
    data: message,
  });
};
