// i wil have multiple reducers - this to combine them together

import { combineReducers } from "redux";
import user from "./userReducer";

const rootReduces = combineReducers({
  user,
});

export default rootReduces;
