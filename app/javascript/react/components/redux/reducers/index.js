import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { postReducer } from "./postReducer";
import { commentReducer } from "./commentReducer";

const allReducers = combineReducers({
  country: countryReducer,
  post: postReducer,
  comment: commentReducer,
});

export default allReducers;
