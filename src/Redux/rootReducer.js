import { combineReducers } from 'redux'
import { DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from './types'

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT: {
            return state + 1
        }
        case DECREMENT: {
            return state - 1
        }
        default: return state;
    }
}

const initialState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, value: action.payload }
        }
        case ENABLE_BUTTONS: {
            return { ...state, disabled: false }
        }
        case DISABLE_BUTTONS: {
            return { ...state, disabled: true }
        }
        default: return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})