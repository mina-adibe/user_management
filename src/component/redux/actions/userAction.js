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

export function addUser(data) {
  return {
    type: types.ADD_USER,
    data: data,
  };
}

export function editUser(data) {
  return {
    type: types.EDIT_USER,
    data: data,
  };
}
