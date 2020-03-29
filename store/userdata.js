/* eslint-disable complexity */
import { AsyncStorage } from 'react-native'

const SET_DATA = 'SET_DATA'
const ASKey = 'Covid19HealthCheckin'
const SET_ANS = 'SET_ANS'

// initial state
const blankData = {
    cumulative: {
        mental: 5,
        physical: 5,
        informational: 5,
        social: 5,
    },
    today: {
        mental: 5,
        physical: 5,
        informational: 5,
        social: 5,
    },
    count: 0,
    streak: 0,
    lastDay: new Date(),
}

// action creators
export const setData = data => ({ type: SET_DATA, data })
export const setAns = sliderId => ({ type: SET_ANS, sliderId })

export const ChangeSlider = sliderId => {
    return dispatch => {
        dispatch(setAns(!sliderId))
    }
}

export const editData = data => {
    return async dispatch => {
        try {
            const { StorageData } = await AsyncStorage.getItem(ASKey)
            if (StorageData) {
                console.log(StorageData)
                await AsyncStorage.mergeItem(ASKey, JSON.stringify(data))
                const newData = await AsyncStorage.getItem(ASKey)
                dispatch(setData(JSON.parse(newData)))
            } else {
                await AsyncStorage.setItem(ASKey, StorageData)
                const newData = await AsyncStorage.getItem(ASKey)
                dispatch(setData(JSON.parse(newData)))
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export const getData = () => {
    return async dispatch => {
        try {
            let { StorageData } = await AsyncStorage.getItem(ASKey)
            if (!StorageData) {
                const Obj = await AsyncStorage.setItem(ASKey, StorageData)
                StorageData = Obj.data
            }
            dispatch(setData(JSON.parse(StorageData)))
        } catch (err) {
            console.error(err)
        }
    }
}

export default function(state = blankData, action) {
    switch (action.type) {
        case SET_DATA:
            return action.data
        case SET_ANS:
            return action.sliderId
        default:
            return state
    }
}
