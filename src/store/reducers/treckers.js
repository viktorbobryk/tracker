import * as actionTypes from '../actionTypes/actionTypes'
const initialState = {
  list: [],
}

export const trackersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TRACKER:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            name: action.payload.name,
            time: action.payload.time,
          },
        ],
      }
    case actionTypes.REMOVE_TRACKER:
      let newList = [...state.list].filter(
        item => item.id !== action.payload.id
      )
      return {
        ...state,
        list: newList,
      }
    default:
      return state
  }
}
