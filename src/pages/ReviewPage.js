import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Grid, Box,Badge, makeStyles } from '@material-ui/core'

import DoughnutChart from '../components/DoughnutChart'

const useStyles = makeStyles((theme) => ({
  allResults: {
    width: '90%',
    margin: 'auto',
    fontSize: `1.125rem`,
  },
  boxContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  p: {
    textAlign: `center`,
  },
  a: {
    textDecoration: 'none',
    color: '#00008B',
  },
}))

const ReviewPage = () => {
  const classes = useStyles()
  const { currentAnswers, currentQuestions, answerStatus, sessionResult } = useSelector(
    (state) => state.projectBoard
  )

  // const passingStatus = answerStatus.reduce((map, val) => {map[val] = (map[val] || 0)+1; return map}, {} ) 

  return (
    <Container>
      <h2>Your Answers</h2>
      <DoughnutChart />
      <Grid className={classes.allResults}>
        <h3>Check your answers</h3>
        {currentQuestions.map((question, index) => {
          return (
            <Box key={question} className={classes.boxContainer}>
              <p className={classes.p}>
                {index + 1}.{' '}
                <Link to={`/review/${index}`} className={classes.a}>
                  {question}
                </Link>
                <br />
                Your Answer: {currentAnswers[index]}
                <br />
                Status: {answerStatus[index] === true ? 'Correct' : 'Incorrect' }
                <br />
              </p>
            </Box>
          )
        })}
      </Grid>
      {sessionResult/answerStatus.length >= .8 ? 
        <div>
          <h3>Congratulations! You are passing to the next round</h3>
          <button>NEXT</button>
        </div>
         : 
        <div>
          <h3>Not a passing score of 80%; Please take the quiz again</h3>
          <button>Take Quiz Again </button>
        </div>
      }
    </Container>
  )
}

export default ReviewPage
