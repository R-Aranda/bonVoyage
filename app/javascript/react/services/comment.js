import { makeRequest } from "./makeRequest";

export const createComment = ({ message, postId }) => {
  message["post_id"] = postId;
  return makeRequest("/comments", {
    method: "POST",
    data: message,
  }).then((res) => {
    if (res.error) return alert(res.error);
  });
};
