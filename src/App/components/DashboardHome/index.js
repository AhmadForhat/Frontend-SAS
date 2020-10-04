import React from 'react'
import Header from '../Header'
import CategoryCards from '../CategoryCards'
import {PrimaryTitle, ContainerHome} from './componentsStyled'

const DashboardHome = ({categories, setChoiceCategory}) => {
    return (
        <>
            <Header />
            <ContainerHome>
                <PrimaryTitle>Categorias</PrimaryTitle>
                <CategoryCards categories={categories} setCategory={setChoiceCategory}/>
            </ContainerHome>
        </>
    )
}

export default DashboardHome