import { makeRequest } from "./makeRequest";
import axios from "axios";

export const getUser = () => {
  return makeRequest(`/users/:id`);
};

export const signOut = () => {
  return axios.delete(`/users/sign_out`, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
