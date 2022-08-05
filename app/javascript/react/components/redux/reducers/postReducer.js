import { ActionTypes } from "../constants/actionTypes";

const initialPostsState = {
  posts: [],
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
