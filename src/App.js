import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import getJokes from './actions/actionGetJokes'
import Jokes from './containers/Jokes'
import AddJokeForm from './containers/AddJokeForm'

class App extends Component {
  async componentDidMount() {
    this.props.getJokes()
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getJokes
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
