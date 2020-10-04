import {db} from '../../../Firebase'

const sendToBackend = async (state) => {
    const {setNextQuestion, setIsLoading, categories, userAnswer, correctAnswer, difficulty, questionNumer} = state
    try {
        setIsLoading(true)
        const query = db.collection('categories').doc(categories.category_num)
        const questionResponse = categories.question_response
        const got = userAnswer === correctAnswer ? true : false
        const objUpdate = questionResponse[0] ? {question_response:[...questionResponse, {questionNumer, difficulty, got}]} : {question_response:[{questionNumer, difficulty, got}]} 
        console.log(objUpdate)
        await query.update(objUpdate)
        setIsLoading(false)
        setNextQuestion(true)
    } catch (error) {
        console.log(error)
        setIsLoading(false)
    }
}

export default sendToBackend