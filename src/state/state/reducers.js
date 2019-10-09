import * as types from "./actionTypes";

//slice of state
const initialFeatureState = [];

//reducer function
export function reducerFeature(state = initialFeatureState, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return state.concat(action.payload);
    case types.REMOVE_FEATURE:
      return state.filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
}
