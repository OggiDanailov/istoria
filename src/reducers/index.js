import { combineReducers } from "redux"

import projectBoardReducer from "./projectBoardReducer"

export default combineReducers({
  projectBoard: projectBoardReducer,
})
