import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import clsx from "clsx"
import {
  Grid,
  Box,
  ButtonGroup,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core"

import Answers from "../Answers"
import Score from "../Score"
import ALL_QUESTIONS from "./ALL_QUESTIONS"
import * as actions from "../../actionTypes"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: "auto",
  },
  questions: {
    margin: "50px auto",
    textAlign: "center",
    fontSize: "1.5rem",
  },
  buttonsWrapper: {
    width: "90%",
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  buttons: {
    margin: "5px",
  },
  buttonsSelected: {
    backgroundColor: "red",
  },
  nextButton: {
    border: "2px solid",
    margin: "20px auto",
  },
}))

const Questions = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [counter, setCounter] = useState(0)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [answerStatus, setAnswerStatus] = useState(false)

  const [hidden, setHidden] = useState(true)
  const [disabledStatus, setDisabledStatus] = useState(true)
  const [activeButton, setActiveButton] = useState("")

  const { currentAnswers, currentQuestions } = useSelector(
    (state) => state.projectBoard
  )

  const selectAnswer = useCallback(
    (event) => {
      setDisabledStatus(false)
      const currentAnswer = event.target.innerHTML
      setActiveButton(currentAnswer)
      if (currentAnswer === ALL_QUESTIONS[counter].correctAnswer) {
        setAnswer(currentAnswer)
        setCurrentQuestion(ALL_QUESTIONS[counter].question)
        setAnswerStatus(true)
        setScore(score + 1)
      } else {
        setAnswerStatus(false)
      }
    },
    [counter, score]
  )

  const submit = useCallback(() => {
    // console.log(currentAnswers)
    setHidden(!hidden)
    dispatch({
      type: actions.CORRECT_ANSWER,
      payload: {
        score,
        answer,
        currentQuestion,
        answerStatus,
      },
    })
  }, [answer, answerStatus, currentQuestion, dispatch, hidden, score])

  const nextQuestion = () => {
    console.log(currentAnswers)
    if (counter === ALL_QUESTIONS.length - 1) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
      setHidden(!hidden)
    }
  }

  // useEffect(() => {

  // })

  return (
    <Container maxWidth='md' className={classes.container}>
      <Score />
      {hidden && (
        <>
          <div className={classes.questions}>
            {ALL_QUESTIONS[counter].question}
          </div>
          <div className={classes.buttons}>
            <ButtonGroup
              variant='contained'
              aria-label='contained primary button group'
              className={classes.buttonsWrapper}
            >
              {ALL_QUESTIONS[counter].options.map((option, index) => (
                <Button
                  key={option}
                  name={`button` + (index + 1)}
                  className={clsx(
                    classes.buttons,
                    activeButton === option && classes.buttonsSelected
                  )}
                  onClick={(e) => selectAnswer(e)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <ButtonGroup
            variant='contained'
            aria-label='contained primary button group'
            className={classes.buttonsWrapper}
          >
            <Button
              className={classes.nextButton}
              disabled={disabledStatus}
              onClick={() => submit()}
            >
              Submit
            </Button>
          </ButtonGroup>
        </>
      )}
      {!hidden && (
        <Container className={classes.nextPage}>
          <Grid>
            {answerStatus ? (
              <Box>
                <p>Correct!</p>
                <Answers answer={ALL_QUESTIONS[counter]} />
              </Box>
            ) : (
              <p>This is a wrong answer</p>
            )}
            <Button onClick={() => nextQuestion()}>Next Question</Button>
          </Grid>
        </Container>
      )}
    </Container>
  )
}

export default Questions
