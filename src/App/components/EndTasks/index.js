import React from 'react'
import {useLocation} from 'wouter'
import {ContainerResults, ContainerMsg, ImageIcon, TextBox, Title, SubTitle, ContainerAllResults, BoxResume, BoxTextResume, NumberText, DescriptionText, BoxLevel, ContainerLevels, TitleLevel, TextLevel, LineDiv, BackButton} from './componentsStyled'
import happyIcon from './image/happyIcon.png'

const EndTasks = ({categories}) => {
    const [,setLocation] = useLocation()
    const arrayEasyGot = categories.question_response.filter(question => question.difficulty === 'easy' && question.got === true)
    const arrayEasyNotGot = categories.question_response.filter(question => question.difficulty === 'easy' && question.got === false)
    const arrayMediumGot = categories.question_response.filter(question => question.difficulty === 'medium' && question.got === true)
    const arrayMediumNotGot = categories.question_response.filter(question => question.difficulty === 'medium' && question.got === false)
    const arrayHardGot = categories.question_response.filter(question => question.difficulty === 'hard' && question.got === true)
    const arrayHardNotGot = categories.question_response.filter(question => question.difficulty === 'hard' && question.got === false)
    const accertsEasy = arrayEasyGot[0] ? arrayEasyGot.length : 0
    const wrongsEasy = arrayEasyNotGot[0] ? arrayEasyNotGot.length : 0
    const accertsMedium = arrayMediumGot[0] ? arrayMediumGot.length : 0
    const wrongsMedium = arrayMediumNotGot[0] ? arrayMediumNotGot.length : 0
    const accertsHard = arrayHardGot[0] ? arrayHardGot.length : 0
    const wrongsHard = arrayHardNotGot[0] ? arrayHardNotGot.length : 0
    const totalAccerts = accertsEasy + accertsMedium + accertsHard
    const totalWrongs = wrongsEasy + wrongsMedium + wrongsHard
    return (
        <ContainerResults>
            <ContainerMsg>
                <ImageIcon src={happyIcon} alt="Icone de bixinho feliz!"/>
                <TextBox>
                    <Title>Parabéns!</Title>
                    <SubTitle>Você finalizou o teste</SubTitle>
                </TextBox>
            </ContainerMsg>
            <ContainerAllResults>
                <BoxResume>
                    <BoxTextResume>
                        <NumberText>{totalAccerts}</NumberText>
                        <DescriptionText>acertos</DescriptionText>
                    </BoxTextResume>
                    <BoxTextResume>
                        <NumberText>{totalWrongs}</NumberText>
                        <DescriptionText>erros</DescriptionText>
                    </BoxTextResume>
                </BoxResume>
                <ContainerLevels>
                    <BoxLevel>
                        <TitleLevel>Facil</TitleLevel>
                        <TextLevel>Acertos: {accertsEasy}</TextLevel>
                        <TextLevel>Erros: {wrongsEasy}</TextLevel>
                    </BoxLevel>
                    <LineDiv />
                    <BoxLevel>
                        <TitleLevel>Médio</TitleLevel>
                        <TextLevel>Acertos: {accertsMedium}</TextLevel>
                        <TextLevel>Erros: {wrongsMedium}</TextLevel>
                    </BoxLevel>
                    <LineDiv />
                    <BoxLevel>
                        <TitleLevel>Difícil</TitleLevel>
                        <TextLevel>Acertos: {accertsHard}</TextLevel>
                        <TextLevel>Erros: {wrongsHard}</TextLevel>
                    </BoxLevel>
                </ContainerLevels>
                <BackButton onClick={() => setLocation('/')}>Voltar ao Início</BackButton>
            </ContainerAllResults>
        </ContainerResults>
    )
}

export default EndTasks