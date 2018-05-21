import React, { Component } from 'react';
import './App.css';
import Jokes from './components/Jokes'

import AddJokeForm from './containers/AddJokeForm'

// normally this comes from process.env.API
const API = 'https://powerful-beyond-70119.herokuapp.com/jokes'

class App extends Component {
  // set state here
  constructor(props) {
    super(props)
    this.state = { jokes: [] }
  }

  async componentDidMount() {
    // const response = await fetch(API)
    // const json = await response.json()
    // console.log("jokes...", json)
    // this.setState({
    //   jokes: json })
  }

  addJoke = async (joke) => {
    console.log("joke to send to API", joke)
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newJoke = await response.json()
    this.setState({jokes: [...this.state.jokes, newJoke]})
  }

  render() {
    return (
      <div className="App">
        <h1>Jokes</h1>
        <Jokes jokes={ this.state.jokes } title="World's best Penguin jokes"/>
        <AddJokeForm />
      </div>
    );
  }
}

export default App;
