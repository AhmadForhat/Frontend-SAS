import axios from 'axios'
import shuffle from './utils/shuffleArray'

const config = (numCategory, difficulty) => {
    return {
        url:'https://opentdb.com/api.php',
        params:{
            amount:'1',
            category:numCategory,
            difficulty,
            type:'multiple'
        }
    }
}

const fetch = (state) => {
    const run = async () => {
        const {setEndQuestions, setActive,categories, setArrayAnswers, setQuestion, setIsLoading, setDifficulty, setCorrectAnswer, setQuestionNumber} = state
        try {
            setActive('')
            const questionNumber = categories.question_response[0] ? categories.question_response.length + 1 : 1
            const category_num = categories.category_num
            let request
            if(!categories.question_response[0] || categories.question_response.length === 1){
                const newDifficulty = 'medium'
                request  = await axios(config(category_num, newDifficulty))
            }
            if(categories.question_response[0] && categories.question_response.length >= 2){
                const arrayQuetionsSize = categories.question_response.length
                const lastTwo = categories.question_response.slice(arrayQuetionsSize-2, arrayQuetionsSize)
                if(lastTwo[0].difficulty === lastTwo[1].difficulty){
                    const arrayDifficulty = ['easy', 'medium', 'hard']
                    if(lastTwo[0].got === lastTwo[1].got){
                        if(lastTwo[0].got){
                            const index = arrayDifficulty.indexOf(lastTwo[0].difficulty)
                            const newDifficulty = index !== 2 ? arrayDifficulty[index+1] : arrayDifficulty[index]
                            request  = await axios(config(category_num, newDifficulty))
                        }else{
                            const index = arrayDifficulty.indexOf(lastTwo[0].difficulty)
                            const newDifficulty = index !== 0 ? arrayDifficulty[index-1] : arrayDifficulty[index]
                            request  = await axios(config(category_num, newDifficulty))
                        }
                    }else{
                        const newDifficulty = lastTwo[1].difficulty
                        request  = await axios(config(category_num, newDifficulty))
                    }
                }else{
                    const newDifficulty = lastTwo[1].difficulty
                    request  = await axios(config(category_num, newDifficulty))
                }
            }
            const objResp = request.data.results[0]
            const {correct_answer, difficulty, incorrect_answers, question} = objResp
            setQuestion(question)
            setDifficulty(difficulty)
            setArrayAnswers(shuffle([correct_answer, ...incorrect_answers]))
            setCorrectAnswer(correct_answer)
            setQuestionNumber(questionNumber)
        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
    run();
}

export default fetch;