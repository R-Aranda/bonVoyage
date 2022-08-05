import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  countries: [],
  country: [],
};
export const countriesReducer = (
  state = initialState.countries,
  { type, payload }
) => {
  // debugger;
  switch (type) {
    case ActionTypes.SET_COUNTRIES:
      return { ...state, countries: payload };
    default:
      return state;
  }
};

export const countryReducer = (
  state = initialState.country,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COUNTRY:
      // debugger;
      return { ...state, country: payload };
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload.posts };
    default:
      return state;
  }
};
