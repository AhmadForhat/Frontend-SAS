import React from 'react'
import {Container, ContainerCard} from './componentsStyled'

const ellipsistext = (str, size) => {
    if(str.length > size){
        return `${str.slice(0,size-3)}...`
    }else{
        return str
    }
}

const CategoryCards = ({categories, setCategory}) => {
    return (
        <Container>
            {categories.map((category, index) => {
                const {name, path} = category
                return (
                    <ContainerCard key={index}>
                        <a key={index} onClick={() => setCategory(path)}>{ellipsistext(name, 25)}</a>
                    </ContainerCard>
                )
            })}
        </Container>
    )
}

export default CategoryCards