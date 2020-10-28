import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, makeStyles } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    height: '50px',
    margin: `20px auto`,
    border: `2px solid blue`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icons: {
    marginLeft: 10,
    padding: 5,
    borderRadius: '50%',
  },
}))

const Score = () => {
  const classes = useStyles()
  const { answerStatus } = useSelector((state) => state.projectBoard)
  return (
    <Grid className={classes.container}>
      {answerStatus.map((el, index) => {
        if (el) {
          return (
            <ThumbUpIcon key={index} className={classes.icons} style={{ background: 'green' }} />
          )
        } else {
          return (
            <ThumbDownIcon
              key={el + index}
              className={classes.icons}
              style={{ background: 'red' }}
            />
          )
        }
      })}
    </Grid>
  )
}

export default Score
