import React, { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
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
  const [answer, setAnswer] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [hidden, setHidden] = useState(true)
  const [disabledStatus, setDisabledStatus] = useState(true)
  const [activeButton, setActiveButton] = useState("")

  // const { counter } = useSelector((state) => state.projectBoard)

  const selectAnswer = useCallback(
    (event) => {
      setDisabledStatus(false)
      const currentAnswer = parseInt(event.target.innerHTML)
      setActiveButton(parseInt(event.target.innerHTML))
      if (currentAnswer === parseInt(ALL_QUESTIONS[counter].correctAnswer)) {
        setAnswer(currentAnswer)
        setCorrectAnswer(true)
      } else {
        setCorrectAnswer(false)
      }
    },
    [counter]
  )

  const submit = () => {
    setHidden(!hidden)
    if (correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setCounter(counter + 1)
    setHidden(!hidden)
  }

  useEffect(() => {
    dispatch({
      type: actions.CORRECT_SCORE,
      payload: { answer, score },
    })
  })

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
            {correctAnswer ? (
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
