import React from 'react'

export default class Component extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        <b>{this.props.question}</b>
        {this.props.answer}
      </li>
    )
  }

}
