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

    //edit user
    case types.EDIT_USER:
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            username: action.data.username,
            phonenumber: action.data.phonenumber,
            country: action.data.country,
            email: action.data.email,
          };
        } else return user;
      });

    default:
      return state;
  }
}
