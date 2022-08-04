import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";

const allReducers = combineReducers({
  allCountries: countryReducer,
});

export default allReducers;
