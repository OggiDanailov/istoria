import * as actions from "../actionTypes"
import dotProp from "dot-prop-immutable"

const initialState = {
  counter: 0,
  score: 0,
  currentQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
}

const projectBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CORRECT_SCORE:
      // console.log(action.payload)
      const { answer, score } = action.payload
      state = dotProp.set(state, "correctAnswers", answer)
      return dotProp.set(state, "score", score)
    default:
      return state
  }
}

export default projectBoardReducer
