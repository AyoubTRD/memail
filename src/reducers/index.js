import { combineReducers } from "redux";

const userReducer = (state = {}, action) => "Hello"

export default combineReducers({
  user: userReducer
});
