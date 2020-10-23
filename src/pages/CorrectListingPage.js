import React from 'react'
import {useParams} from 'react-router-dom'
import ALL_QUESTIONS from "../components/questions/ALL_QUESTIONS"

const CorrectListingPage = () => {
    const param = useParams();
    // const { currentAnswers, currentQuestions, answerStatus, id } = useSelector((state) => state.projectBoard)
    return (
    <div>{ALL_QUESTIONS[param.id].synopsis}</div>
    )
}

export default CorrectListingPage