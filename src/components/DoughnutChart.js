import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { Container, makeStyles } from '@material-ui/core'
import * as actions from '../actionTypes'

const DoughnutChart = () => {
  const { answerStatus } = useSelector((state) => state.projectBoard)
  const [chartData, setChartData] = useState({})
  const [sessionResult, setSessionResult] = useState(0)
  const trueArray = []
  const falseArray = []
  const dispatch = useDispatch()

  useEffect(() => {
    answerStatus.filter((status) => {
      if (status === true) {
        return trueArray.push(status)
      } else {
        return falseArray.push(status)
      }
    })
    setSessionResult(trueArray.length)

    setChartData({
      labels: ['CORRECT', 'INCORRECT'],
      datasets: [
        {
          data: [trueArray.length, falseArray.length],
          backgroundColor: ['green', 'red'],
        },
      ],
    })
    dispatch({
      type: actions.SESSION_RESULT,
      payload: {
        sessionResult,
      },
    })
  }, [sessionResult])

  

  return (
    <Container>
      <Doughnut data={chartData} />
      <div></div>
    </Container>
  )
}

export default DoughnutChart
