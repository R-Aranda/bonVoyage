import { ActionTypes } from "../constants/actionTypes";

const initialPostsState = {
  posts: [],
};

export const postReducer = (
  state = initialPostsState.posts,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_POST:
      return { ...state, post: payload };
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    case ActionTypes.SET_POST_INPUTS:
      return { ...state, postInputs: payload };
    default:
      return state;
  }
};
