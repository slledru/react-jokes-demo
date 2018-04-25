import React from 'react'

export default class Component extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    let newJoke = {
      question: e.target.question.value.trim(),
      answer: e.target.answer.value.trim()
     }
     console.log("newJoke from form", newJoke)

    this.props.addJoke(newJoke)
  }

  render() {
    return (
      <form className="well" onSubmit={this.onSubmit}>
        <fieldset className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" name="question" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="answer">Answer</label>
          <input type="text" name="answer" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <button className="btn btn-success">Add Task</button>
        </fieldset>
      </form>
    )
  }

}
