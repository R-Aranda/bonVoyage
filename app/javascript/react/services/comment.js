import axios from "axios";

export const createComment = ({ message, postId }) => {
  message["post_id"] = postId;
  return axios.post("/api/v1/comments", message).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
