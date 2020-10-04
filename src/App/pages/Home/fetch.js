import {db} from '../../../Firebase'

const fetch = (state) => {
    const run = async () => {
        const {setCategories, setIsLoading} = state
        const query = db.collection('categories')
        try {
            setIsLoading(true)
            await query.onSnapshot(
                async snapshot => {
                    const dataCategories = []
                    snapshot.forEach(doc => {
                        dataCategories.push(doc.data())
                    })
                    setIsLoading(false)
                    setCategories(dataCategories)
            })
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    run();
}

export default fetch;