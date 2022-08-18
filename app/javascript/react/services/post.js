import { makeRequest } from "./makeRequest";

export const getPost = (id) => {
  return makeRequest(`/posts/${id}`);
};

export const createPost = ({ message, countryId }) => {
  message["country_id"] = countryId;
  return makeRequest("/posts", {
    method: "POST",
    data: message,
  });
};
