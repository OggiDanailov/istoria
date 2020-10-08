import * as actions from "../actionTypes"
import dotProp from "dot-prop-immutable"

const initialState = {
  counter: 0,
  correctAnswers: [],
  wrongAnswers: [],
  points: [],
}

const projectBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CORRECT_SCORE:
      const { counter } = action.payload
      return dotProp.set(state, "counter", counter + 1)
    default:
      return state
  }
}

export default projectBoardReducer
