import { makeRequest } from "./makeRequest";

export const getCities = ({ message, country }) => {
  debugger;
  // message["country_id"] = "ESP";
  return makeRequest("/cities", {
    method: "POST",
    data: message,
  });
};
