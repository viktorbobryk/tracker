import {combineReducers} from 'redux';
import {trackersReducer} from './treckers';

export const reducer = combineReducers({
  trackers: trackersReducer,
});
