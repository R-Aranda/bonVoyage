import { ActionTypes } from "../constants/actionTypes";

const initialCommentsState = {
  comments: [],
  commentInputs: {
    body: "",
  },
};

export const commentInputsReducer = (
  state = initialCommentsState.commentInputs,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COMMENT_INPUTS:
      return { ...state, commentInputs: payload };
    default:
      return state;
  }
};

export const commentsReducer = (
  state = initialCommentsState.comments,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};
