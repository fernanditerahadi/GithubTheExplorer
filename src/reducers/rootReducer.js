import appReducer from './App'
import profileReducer from './Profile'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    appReducer,
    profileReducer
})

export default rootReducer
