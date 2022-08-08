import { ActionTypes } from "../constants/actionTypes";

const initialCommentsState = {
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
