import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postReducer, singlePostReducer } from "./postReducer";
import { commentReducer } from "./commentReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  post: postReducer,
  comment: commentReducer,
});

export default allReducers;
