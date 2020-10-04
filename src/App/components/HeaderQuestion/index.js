import React from 'react'
import {Container, CategoryTitle, LinkExit, ImgExit} from './componentsStyled'
import exitCircle from './image/exitCircle.png'

const HeaderQuestion = ({category, setCategory}) => {
    return(
        <Container>
            <CategoryTitle>{category}</CategoryTitle>
            <LinkExit onClick={() => setCategory('/')}><ImgExit src={exitCircle} />Fechar</LinkExit>
        </Container>
    )
}

export default HeaderQuestion