import { ActionTypes } from "../constants/actionTypes";

export const setComments = (comments) => {
  return {
    type: ActionTypes.SET_COMMENTS,
    payload: comments,
  };
};

export const setCommentInputs = (commentInputs) => {
  return {
    type: ActionTypes.SET_COMMENT_INPUTS,
    payload: commentInputs,
  };
};
