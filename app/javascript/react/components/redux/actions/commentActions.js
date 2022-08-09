import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const setComments = (comments) => {
  return {
    type: ActionTypes.SET_COMMENTS,
    payload: comments,
  };
};

export const setCommentInputs = (commentInputs) => {
  axios.post("/api/v1/comments", commentInputs).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
