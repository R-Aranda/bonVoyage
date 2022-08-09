import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postReducer, singlePostReducer } from "./postReducer";
import { commentInputsReducer, commentsReducer } from "./commentReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  post: postReducer,
  comments: commentsReducer,
  commentInputs: commentInputsReducer,
});

export default allReducers;
