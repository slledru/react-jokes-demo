import React, { Component } from 'react';
import './App.css';
import Jokes from './containers/Jokes'

import AddJokeForm from './containers/AddJokeForm'

class App extends Component {
  async componentDidMount() {
    // const response = await fetch(API)
    // const json = await response.json()
    // console.log("jokes...", json)
    // this.setState({
    //   jokes: json })
  }

  render() {
    return (
      <div className="App">
        <h1>Jokes</h1>
        <Jokes />
        <AddJokeForm />
      </div>
    );
  }
}

export default App;
