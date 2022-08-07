import { ActionTypes } from "../constants/actionTypes";

const initialPostsState = {
  posts: [],
  postInputs: {
    title: "",
    body: "",
  },
};

export const postsReducer = (
  state = initialPostsState.posts,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const postInputsReducer = (
  state = initialPostsState.postInputs,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_POST_INPUTS:
      return { ...state, postInputs: payload };
    default:
      return state;
  }
};
