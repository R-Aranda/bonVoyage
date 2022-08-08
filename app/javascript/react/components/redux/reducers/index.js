import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postInputsReducer, postsReducer } from "./postReducer";
import { commentInputsReducer } from "./commentReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  posts: postsReducer,
  postInputs: postInputsReducer,
  commentInputs: commentInputsReducer,
});

export default allReducers;
