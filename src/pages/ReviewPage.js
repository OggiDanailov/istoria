import React from "react"
import { Line } from "react-chartjs-2"
import { Doughnut } from "react-chartjs-2"
import { Grid, Box, Container, makeStyles } from "@material-ui/core"

const ReviewPage = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Overview results",
        data: [1, 2, 1, 2],
      },
    ],
  }
  return (
    <Container>
      {/* <Line style={{ width: "300px" }} data={data} /> */}
      <Doughnut data={data} />
    </Container>
  )
}

export default ReviewPage
