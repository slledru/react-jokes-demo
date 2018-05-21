import React from 'react'
import Joke from '../components/Joke'
import { connect } from 'react-redux'

const Jokes = ({ title, jokes }) => {

  const renderJokes = () => {
    return jokes.map((joke, i) => {
      return <Joke {...joke} key={i} />
    })
  }

  return (
    <div className="joke-list">
      <h1>{ title }</h1>
      <ul className="list-group">
        { renderJokes() }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
    title: 'World\'s best Penguin jokes'
  }
}

export default connect(mapStateToProps)(Jokes)
