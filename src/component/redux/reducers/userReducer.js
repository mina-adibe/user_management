// reducer : functon that accepts state and action - and returns a new state
//
//
import * as types from "../actions/actionTypes";
import data from "../../../data/usersData";

export default function userReducer(state = data, action) {
  switch (action.type) {
    case types.DETETE_USER:
      return state.filter((post) => post.id !== action.id);

    //

    default:
      return state;
  }
}
