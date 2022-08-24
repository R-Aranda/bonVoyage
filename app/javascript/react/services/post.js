import { makeRequest } from "./makeRequest";

export const getAllPosts = () => {
  return makeRequest(`/posts`);
};
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

export const deletePost = (id) => {
  return makeRequest(`/posts/${id}`, {
    method: "DELETE",
  });
};

export const likePost = (message) => {
  makeRequest("/post_likes", {
    method: "POST",
    data: message,
  });
};
