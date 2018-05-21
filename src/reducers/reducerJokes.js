const ADD_JOKE = 'ADD_JOKE'
const jokes = (state = [], action) => {
  switch (action.type) {
    case ADD_JOKE:
      console.log('action', action)
      return state

    default:
      return state
  }
}

export { jokes, ADD_JOKE }
