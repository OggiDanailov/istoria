import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Container, Grid, makeStyles } from "@material-ui/core"

import DoughnutChart from "../components/DoughnutChart"

const ReviewPage = () => {

  return (
    <Container>
      <DoughnutChart  />
      <Grid></Grid>

    </Container>
  )
}

export default ReviewPage
