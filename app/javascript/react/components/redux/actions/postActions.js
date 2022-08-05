import { ActionTypes } from "../constants/actionTypes";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};
