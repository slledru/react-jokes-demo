import React from 'react'

const Joke = ({ question, answer }) => (
  <li className="list-group-item">
    <b>{ question }</b>
    { answer }
  </li>
)

export default Joke
