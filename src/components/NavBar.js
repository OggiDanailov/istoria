import React from "react"
import { NavLink } from "react-router-dom"
import { Container, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: "10px auto 20px",
    display: "flex",
    justifyContent: "flex-end",
  },
  links: {
    margin: `0px 15px`,
    textDecoration: `none`,
    color: "black",
  },
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <NavLink className={classes.links} to='/'>
        Home
      </NavLink>
      <NavLink className={classes.links} to='/general'>
        General History
      </NavLink>
    </Container>
  )
}

export default NavBar
