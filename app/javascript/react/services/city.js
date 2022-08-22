import { makeRequest } from "./makeRequest";

export const addCity = (message) => {
  debugger;
  return makeRequest("/cities", {
    method: "POST",
    data: message,
  });
};

export const getCity = (message) => {
  return makeRequest("/cities");
};
