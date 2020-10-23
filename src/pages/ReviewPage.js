import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Grid, Box,  makeStyles } from "@material-ui/core"

import DoughnutChart from "../components/DoughnutChart"

const useStyles = makeStyles((theme) => ({
  allResults: {
    width: "90%",
    margin: "auto",
    fontSize: `1.125rem`
  },
  boxContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  p: {
    textAlign: `center`,

  }
}))

const ReviewPage = () => {
  const classes = useStyles()
  const { currentAnswers, currentQuestions, answerStatus, id } = useSelector((state) => state.projectBoard)
  console.log(currentAnswers)
  console.log(currentQuestions)
  console.log(answerStatus)
  return (
    <Container>
      <h2>Your Answers</h2>
      <DoughnutChart  />
      <Grid className={classes.allResults}>
        <h3>Check your answers</h3>
    {currentQuestions.map((question, index) => {
      return <Box key={question} className={classes.boxContainer}>
        <p className={classes.p}>{index+1}.  <Link to={`/review/${index}`}>{question}</Link><br />
          Your Answer: {currentAnswers[index]}<br />  
          {answerStatus[index] ? "Correct" : "Incorrect (Check the right one)"
        }</p>
        </Box>

    })}
      </Grid>

    </Container>
  )
}

export default ReviewPage
