import { createStore, combineReducers } from "redux";
import { themeReducer } from "../reducers/themeReducer";
const store = createStore(
  combineReducers({ myDarkMode: themeReducer })
)
export default store
