// where i store my actions
// action and action creator
//all actions must have type
import * as types from "./actionTypes";

export function deleteUser(id) {
  return {
    type: types.DETETE_USER,
    id: id,
  };
}

/**
 export function deleteUser(user) {
  return { type: types.DETETE_USER, user: user };
}
*/
