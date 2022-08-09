import { ActionTypes } from "../constants/actionTypes";

export const setCommentInputs = (commentInputs) => {
  return {
    type: ActionTypes.SET_COMMENT_INPUTS,
    payload: commentInputs,
  };
};
