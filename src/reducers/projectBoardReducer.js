import * as actions from "../actionTypes"
import dotProp from "dot-prop-immutable"

const initialState = {
  counter: 0,
  score: 0,
  currentAnswers: [],
  currentQuestions: [],
  answerStatus: [],
}

const projectBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CORRECT_ANSWER:
      const { score, answer, currentQuestion, answerStatus } = action.payload
      // state = dotProp.set(state, "counter", counter)
      state = dotProp.set(state, "score", score)
      state = dotProp.merge(state, "currentAnswers", answer)
      state = dotProp.merge(state, "currentQuestions", currentQuestion)
      return dotProp.merge(state, "answerStatus", answerStatus)
    default:
      return state
  }
}

export default projectBoardReducer
