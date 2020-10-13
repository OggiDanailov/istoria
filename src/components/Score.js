import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    height: "50px",
    margin: `20px auto`,
    border: `2px solid blue`,
  },
}))

const Score = () => {
  const classes = useStyles()
  const { score } = useSelector((state) => state.projectBoard)
  return <div className={classes.container}>{score === 0 ? " " : score}</div>
}

export default Score
