import React from 'react'
import Joke from './Joke'

export default class Component extends React.Component {

  renderJokes() {
    return this.props.jokes.map((joke, i) => {
      return <Joke {...joke} key={i} />
    })
  }

  render() {
    return (
      <div className="joke-list">
        <h1>{this.props.title}</h1>
        <ul className="list-group">
          {this.renderJokes()}
        </ul>
      </div>
    )
  }

}

Component.defaultProps = {
  jokes: []
}
