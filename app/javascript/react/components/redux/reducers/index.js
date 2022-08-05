import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postsReducer } from "./postReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  posts: postsReducer,
});

export default allReducers;
