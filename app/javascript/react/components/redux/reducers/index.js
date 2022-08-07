import { combineReducers } from "redux";
import { countriesReducer, countryReducer } from "./countryReducer";
import { postInputsReducer, postsReducer } from "./postReducer";

const allReducers = combineReducers({
  allCountries: countriesReducer,
  country: countryReducer,
  posts: postsReducer,
  postInputs: postInputsReducer,
});

export default allReducers;
