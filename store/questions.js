import questionsList from '../constants/questionsList'

function generateDailyQuestions(questionsList) {
    // from each category choose 2-3 questions and copy into format shown below
    // {
    //     question: 'question prompt',
    //     answer: boolean,
    //     type: 'social' 'mental' or 'physical',
    //     weight: number from 1 to 10,
    // }
    const dailyQuestions = []
    const categories = ['social', 'mental', 'physical']
    for (const category in categories) {
        const range = questionsList[category].length
        const first = Math.floor(Math.random() * range)
        let second = Math.floor(Math.random() * range)
        while (first === second && range > 1) {
            second = Math.floor(Math.random() * range)
        }
        dailyQuestions.push({
            question: first.prompt,
            answer: false,
            type: category,
            weight: first.weight,
        })
        dailyQuestions.push({
            question: second.prompt,
            answer: false,
            type: category,
            weight: second.weight,
        })
    }
    return dailyQuestions
}
const initialState = []
const SET_ANS = 'SET_ANS'

export const setAns = sliderId => ({ type: SET_ANS, sliderId })

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ANS:
            return state.map((q, idx) => {
                if (action.sliderId === idx) {
                    q.answer = !q.answer
                    return q
                } else {
                    return q
                }
            })
        default:
            return state
    }
}
