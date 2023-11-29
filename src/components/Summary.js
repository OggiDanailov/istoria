import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    height: '50px',
    margin: `20px auto`,
    border: `12px solid blue`,
  },
}))

const Summary = () => {
  const classes = useStyles()

  return <div className={classes.container}>Summary of the round</div>
}

export default Summary
