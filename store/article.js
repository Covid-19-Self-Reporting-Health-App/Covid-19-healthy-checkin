import axios from 'axios'

const SET_ARTICLE = 'SET_ARTICLE'

// initial default article
initialState = {
    loaded: false,
    url: 'https://www.cdc.gov/',
    messageType: 'website',
}

// action creator
export const setArticle = article => ({ type: SET_ARTICLE, article })

// thunk

// still need to hook up Server Endpoint
export const getArticle = () => {
    return async dispatch => {
        try {
            // const { data } = await axios.get('OUR SERVER API ENDPOINT HERE')
            const data = {
                articleURL: 'https://www.reddit.com/r/CoronaVirus',
                messageType: 'website',
            }
            const article = {
                loaded: true,
                url: data.articleURL,
                // messageType: data.messageType,
                messageType: 'default',
            }
            dispatch(setArticle(article))
        } catch (err) {
            console.error(err)
            dispatch(
                setArticle({
                    loaded: true,
                    url: 'https://www.cdc.gov',
                    messageType: 'default',
                })
            )
        }
    }
}

// reducer
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ARTICLE:
            return action.article
        default:
            return state
    }
}
