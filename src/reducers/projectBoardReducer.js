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
      const {
        counter,
        score,
        answer,
        currentQuestion,
        answerStatus,
      } = action.payload
      console.log(counter + " this is the counter")
      console.log(score + " this is the score")
      console.log(answer + " this is answer")
      console.log(currentQuestion + " this is the current question")
      console.log(answerStatus + " this is the answerStatus")

      state = dotProp.set(state, "answerStatus", answerStatus)
      state = dotProp.set(state, "currentAnswer", answer)
      return dotProp.set(state, "score", score)
    default:
      return state
  }
}

export default projectBoardReducer
