import React from 'react'
import arrowRigth from './image/arrow-right.png'
import cross from './image/cross.png'
import tick from './image/tick.png'
import {Container, BoxCorrect, BoxWrong, ContainerToBox, Button} from './componentsStyled'

const FeedbackBox = ({nextQuestion, categories, setNextQuestion}) => {
    if(nextQuestion){
        const lastGot = categories.question_response[categories.question_response.length-1].got
        return(
            <>
                <Container />
                {lastGot ? (
                    <ContainerToBox>
                        <BoxCorrect>
                            <img style={{marginTop:'30px'}} src={tick} alt='icone de certo'/>
                            <h2 style={{marginTop:'14px'}}>Você Acertou!</h2>
                            <Button onClick={() => setNextQuestion(false)}>Avançar <img src={arrowRigth} alt='seta de ir'/></Button>
                        </BoxCorrect>
                    </ContainerToBox>
                ): (
                    <ContainerToBox>
                        <BoxWrong>
                            <img style={{marginTop:'30px'}} src={cross} alt='icone de errado'/>
                            <h2 style={{marginTop:'14px'}}>Você Errou!</h2>
                            <Button onClick={() => setNextQuestion(false)}>Avançar <img src={arrowRigth} alt='seta de ir'/></Button>
                        </BoxWrong>
                    </ContainerToBox>
                )}
                
            </>
        )
    }else{
        return null
    }
}

export default FeedbackBox