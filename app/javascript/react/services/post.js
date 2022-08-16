import { makeRequest } from "./makeRequest";
import axios from "axios";

export const getPost = (id) => {
  return makeRequest(`/posts/${id}`);
};

export const createPost = ({ message, countryId }) => {
  message["country_id"] = countryId;
  return axios.post("/api/v1/posts", message).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
