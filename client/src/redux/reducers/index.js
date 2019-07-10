import { combineReducers } from "redux";
import myList from "./myList";
import recommendations from "./recommendations";

const reducers = combineReducers({
  myList,
  recommendations
});

export default reducers;
