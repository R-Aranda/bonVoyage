import { makeRequest } from "./makeRequest";

export const getPost = (id) => {
  return makeRequest(`/posts/${id}`);
};
