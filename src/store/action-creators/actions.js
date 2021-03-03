import {ADD_NEW_TRACKER, REMOVE_TRACKER} from '../actionTypes/actionTypes'
export const addNewTracker = (name, time, id) => {
  return {
    type: ADD_NEW_TRACKER,
    payload: {
      name: name,
      time: time,
      id: id,
    },
  }
}

export const removeTracker = id => {
  return {
    type: REMOVE_TRACKER,
    payload: {
      id: id,
    },
  }
}
