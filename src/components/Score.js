import React from "react"
import { useDispatch, useSelector } from "react-redux"
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
  return <div className={classes.container}></div>
}

export default Score
