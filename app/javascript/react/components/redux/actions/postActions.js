import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const setPost = (post) => {
  return {
    type: ActionTypes.SET_POST,
    payload: post,
  };
};

export const setPostInputs = (postInputs, dispatch) => {
  axios.post("/api/v1/posts", postInputs).then((res) => {
    dispatch({
      type: ActionTypes.SET_POST_INPUTS,
      payload: res,
    });
  });
};
