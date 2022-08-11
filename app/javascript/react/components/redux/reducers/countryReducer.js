import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  countries: [],
};
export const countryReducer = (
  state = initialState.countries,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COUNTRIES:
      return { ...state, countries: payload };
    case ActionTypes.SET_COUNTRY:
      return { ...state, country: payload };
    default:
      return state;
  }
};
