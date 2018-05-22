import { ADD_JOKE, UPDATE_JOKES } from '../actions/constants'

const jokes = (state = [], action) => {
  switch (action.type) {
    case ADD_JOKE:
      return [
        ...state,
        action.payload
      ]

    case UPDATE_JOKES:
      return [
        ...state,
        ...action.payload
      ]
      
    default:
      return state
  }
}

export { jokes }
