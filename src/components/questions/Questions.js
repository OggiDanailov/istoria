import React, { useState } from "react"
import ALL_QUESTIONS from "./ALL_QUESTIONS"

import clsx from "clsx"
import {
  Grid,
  Box,
  ButtonGroup,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core"

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
  const classes = useStyles()
  const [selectButton, setSelectButton] = useState("")
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [hidden, setHidden] = useState(true)
  const [disabledStatus, setDisabledStatus] = useState(true)

  const selectAnswer = (event) => {
    // setSelectButton(event.target.innerHTML)
    setDisabledStatus(false)
    if (event.target.innerHTML === ALL_QUESTIONS[index].correctAnswer) {
      setScore(score + 1)
      setAnswer(true)
    }
  }

  const nextQuestion = () => {
    setHidden(!hidden)
    if (answer) {
      setIndex(index + 1)
    }
  }

  return (
    <Container maxWidth='md' className={classes.container}>
      {hidden && (
        <>
          <div className={classes.questions}>
            {ALL_QUESTIONS[index].question}
          </div>
          <div className={classes.buttons}>
            <ButtonGroup
              variant='contained'
              aria-label='contained primary button group'
              className={classes.buttonsWrapper}
            >
              {ALL_QUESTIONS[index].options.map((option) => (
                <Button
                  key={option}
                  className={classes.buttons}
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
              onClick={() => nextQuestion()}
            >
              Next
            </Button>
          </ButtonGroup>
        </>
      )}
      {!hidden && (
        <Container className={classes.nextPage}>
          <Grid>
            {answer ? (
              <p>{ALL_QUESTIONS[index].synopsis}</p>
            ) : (
              <p>This is a wrong answer</p>
            )}
          </Grid>
        </Container>
      )}
    </Container>
  )
}

export default Questions
