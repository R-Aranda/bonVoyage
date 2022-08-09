import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const setPosts = (posts, country) => {
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

export const setPostInputs = (postInputs) => {
  axios.post("/api/v1/posts", postInputs).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
