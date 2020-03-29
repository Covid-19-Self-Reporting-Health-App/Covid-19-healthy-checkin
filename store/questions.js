const initialState = [
    {
        question:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'social',
        weight: 2,
    },
    {
        question:
            'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'social',
        weight: 2,
    },
    {
        question:
            'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'physical',
        weight: 2,
    },
    {
        question:
            'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'physical',
        weight: 2,
    },
    {
        question:
            'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'mental',
        weight: 2,
    },
    {
        question:
            'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'mental',
        weight: 2,
    },
    {
        question:
            'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer: false,
        type: 'informational',
        weight: 2,
    },
]

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
