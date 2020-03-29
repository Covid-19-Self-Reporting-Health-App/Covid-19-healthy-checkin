import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import userData from './userdata'
import todaysArticle from './article'
import questions from './questions'

const reducer = combineReducers({
    userData,
    todaysArticle,
    questions,
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
