import * as actions from '../actionTypes'
import dotProp from 'dot-prop-immutable'

const initialState = {
  id: 0,
  counter: 0,
  score: 0,
  currentAnswers: [],
  currentQuestions: [],
  answerStatus: [],
  sessionResult: ''
}

const projectBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CORRECT_ANSWER:
      const { score, answer, id, currentQuestion, answerStatus  } = action.payload
      state = dotProp.set(state, 'score', score)
      state = dotProp.set(state, 'id', id)
      state = dotProp.merge(state, 'currentAnswers', answer)
      state = dotProp.merge(state, 'currentQuestions', currentQuestion)
      return dotProp.merge(state, 'answerStatus', answerStatus)
    case actions.SESSION_RESULT:
      const { sessionResult } = action.payload
      return dotProp.set(state, 'sessionResult', sessionResult)
    default:
      return state
  }
}

export default projectBoardReducer
