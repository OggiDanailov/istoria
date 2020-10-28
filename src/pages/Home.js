import React from 'react'
import { Grid, Box, Container, makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  link: {
    textDecoration: 'none',
  },
  boxes: {
    minHeight: '30px',
    border: '2px solid',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Grid style={{ textAlign: 'center' }}>
        <h2>Choose your History!</h2>
      </Grid>
      <Container className={classes.container}>
        <Link className={classes.link} href="/general">
          <Box className={classes.boxes}>General History</Box>
        </Link>
        <Box className={classes.boxes}>Ancient History</Box>
        <Box className={classes.boxes}>Medieval European History</Box>
        <Box className={classes.boxes}>American History</Box>
      </Container>
    </>
  )
}

export default Home
