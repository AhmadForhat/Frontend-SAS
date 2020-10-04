import React, {useState, useEffect} from 'react'
import Spinner from '../Spinner'
import FeedbackBox from '../FeedbackBox'
import LevelCard from '../LevelCard'
import fetch from './fetch'
import sendToBackend from './sendToBackend'
import fixString from './utils/fixString'
import {Box, HeaderContainer, CardAnswer, BtnAnswer, BtnAnswerActive, CardAnswerActive, ContainerButton} from './componentsStyled'

const QuestionBox = ({categories}) => {
    const [active, setActive] = useState('')
    const [userAnswer, setUserAnswer] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [question, setQuestion] = useState('')
    const [questionNumer, setQuestionNumber] = useState('X')
    const [difficulty, setDifficulty] = useState('')
    const [nextQuestion, setNextQuestion] = useState(false)
    const [arrayAnswers, setArrayAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])
    const state = {setNextQuestion, setActive, categories, setArrayAnswers, setQuestion, setIsLoading, setDifficulty, setCorrectAnswer, setQuestionNumber, userAnswer, correctAnswer, difficulty, questionNumer}
    useEffect(() => fetch(state), [categories])
    if(isLoading) return <Spinner />
    return(
        <>
            <FeedbackBox nextQuestion={nextQuestion} categories={categories} setNextQuestion={setNextQuestion}/>
            <Box>
                <HeaderContainer>
                    <h3>{`Questão ${questionNumer}`}</h3>
                    <LevelCard difficulty={difficulty}/>
                </HeaderContainer>
                <p style={{marginBottom:'38px'}}>{fixString(question)}</p>
                {arrayAnswers.map((answer, index) => {
                    if(active === index+1) return (
                        <CardAnswerActive key={index} onClick={() => {
                            setActive('')
                            setUserAnswer('')
                            }}>
                            <p>{fixString(answer)}</p>
                        </CardAnswerActive>
                    )
                    return (
                        <CardAnswer key={index} onClick={() => {
                            setActive(index+1)
                            setUserAnswer(answer)
                            }}>
                            <p>{fixString(answer)}</p>
                        </CardAnswer>
                    )
                })}
                <ContainerButton>
                    {active ? <BtnAnswerActive onClick={() => sendToBackend(state)}>Responder</BtnAnswerActive> : <BtnAnswer>Responder</BtnAnswer>}
                </ContainerButton>
            </Box>
        </>
    )
}

export default QuestionBox