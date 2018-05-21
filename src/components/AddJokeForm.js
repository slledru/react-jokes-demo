import React from 'react'

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

export default AddJokeForm
