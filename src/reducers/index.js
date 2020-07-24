import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";

export const Reducers = combineReducers({
  postsState: postsReducer,
  usersState: usersReducer,
});
