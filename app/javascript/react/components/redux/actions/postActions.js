import { ActionTypes } from "../constants/actionTypes";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const setPostInputs = (postInputs) => {
  return {
    type: ActionTypes.SET_POST_INPUTS,
    payload: postInputs,
  };
};
