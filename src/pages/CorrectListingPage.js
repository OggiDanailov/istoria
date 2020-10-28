import React from 'react'
import { useParams } from 'react-router-dom'
import ALL_QUESTIONS from '../components/questions/ALL_QUESTIONS'
import { Grid, Box, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    margin: 'auto',
  },
}))

const CorrectListingPage = () => {
  const param = useParams()
  const classes = useStyles()
  // const { currentAnswers, currentQuestions, answerStatus, id } = useSelector((state) => state.projectBoard)
  return (
    <Container className={classes.container}>
      <p className={classes.answers}>{ALL_QUESTIONS[param.id].synopsis}</p>
    </Container>
  )
}

export default CorrectListingPage
