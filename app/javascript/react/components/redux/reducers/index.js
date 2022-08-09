import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postReducer } from "./postReducer";
import { commentInputsReducer } from "./commentReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  post: postReducer,
  commentInputs: commentInputsReducer,
});

export default allReducers;
