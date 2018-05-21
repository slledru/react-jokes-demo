import { ADD_JOKE } from '../actions/constants'

const jokes = (state = [], action) => {
  switch (action.type) {
    case ADD_JOKE:
      console.log('action', action)
      return [
        ...state,
        action.payload
      ]

    default:
      return state
  }
}

export { jokes }
