// reducer : functon that accepts state and action - and returns a new state
//
//
import * as types from "../actions/actionTypes";
import data from "../../../data/usersData";

export default function userReducer(state = data, action) {
  switch (action.type) {
    // delete user
    case types.DETETE_USER:
      return state.filter((post) => post.id !== action.id);

    //add user
    case types.ADD_USER:
      return state.concat([action.data]);

    default:
      return state;
  }
}
