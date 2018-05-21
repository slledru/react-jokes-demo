import { API, ADD_JOKE } from './constants'

const addJoke = (joke) => {
  return async (dispatch) => {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newJoke = await response.json()
    console.log('newJoke', newJoke)
    dispatch({
      type: ADD_JOKE,
      payload: newJoke
    })
  }
}

export default addJoke
