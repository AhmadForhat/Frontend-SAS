import React from 'react'
import Header from '../Header'
import QuestionBox from '../QuestionBox'
import EndTasks from '../EndTasks'
import HeaderQuestion from '../HeaderQuestion'
import {Container} from './componentsStyled'

const QuestionLayout = ({categoryPath, categories, setCategory}) => {
    if(!categories[0]) {
        window.location.replace('/')
        return null
    }else{
        const categoryName = categories.filter(item => item.path === categoryPath)[0].name
        const proprietesCategories = categories.filter(item => item.path === categoryPath)[0]
        if(proprietesCategories.question_response[0] && proprietesCategories.question_response.length === 10){
            return (
                <> 
                    <Header />
                    <EndTasks categories={proprietesCategories}/>
                </>
            )
        }else{
            return(
                <>
                    <Header />
                    <Container>
                        <HeaderQuestion category={categoryName} setCategory={setCategory} />
                        <QuestionBox categories={proprietesCategories}/>
                    </Container>
                </>
            )
        }
    }
}

export default QuestionLayout