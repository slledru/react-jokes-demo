import { API, UPDATE_JOKES } from './constants'

const getJokes = () => {
  return async (dispatch) => {
    const response = await fetch(API)
    const jokes = await response.json()
    dispatch({
      type: UPDATE_JOKES,
      payload: jokes
    })
  }
}

export default getJokes
