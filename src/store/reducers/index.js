import {combineReducers} from 'redux'
import {timeReducer} from './time'

export const reducer = combineReducers({
  time: timeReducer,
})
