import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addJoke from '../actions/actionAddJoke'

const AddJokeForm = ({ addJoke }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    let form = e.target

    let newJoke = {
      question: form.question.value.trim(),
      answer: form.answer.value.trim()
    }

    addJoke(newJoke)
    form.reset()
  }

  return (
    <form className="well" onSubmit={ onSubmit }>
      <fieldset className="form-group">
        <label htmlFor="question">Question</label>
        <input type="text" name="question" className="form-control" />
        <label htmlFor="answer">Answer</label>
        <input type="text" name="answer" className="form-control" />
        <button className="btn btn-success">Add</button>
      </fieldset>
    </form>
  )

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addJoke }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddJokeForm)
