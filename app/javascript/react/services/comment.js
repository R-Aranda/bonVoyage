import { makeRequest } from "./makeRequest";

export const createComment = ({ message, postId }) => {
  message["post_id"] = postId;
  return makeRequest("/comments", {
    method: "POST",
    data: message,
  });
};

export const deleteComment = (id) => {
  return makeRequest(`/comments/${id}`, {
    method: "DELETE",
  });
};
