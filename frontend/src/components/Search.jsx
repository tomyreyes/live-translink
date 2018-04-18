import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'


class Search extends Component {
  renderField = ({ label, input, meta: { touched, error } }) => (
    <div className="input-row">
      <label>{label}</label>
      <input placeholder='Enter Location...'{...input} type="text" />
      {touched && error && <span className="error">{error}</span>}
    </div>
  )

  mySubmit = ({ location }, dispatch) => {
    //return promise 
    console.log(location)
  }

  //will need lifecycle method with google autocomplete here

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.mySubmit)}>
        <Field
          name="location"
          label={'Location'}
          component={this.renderField}
          type="text"
        />
      </form>
    )
  }
}

const validate = ({ location = '' }) => {
  let error = {}
  let isError = false
  if (location.trim() === '') {
    error.location = 'Required'
    isError = true
  }
  if (isError) {
    return error
  }
}
Search = reduxForm({
  form: 'search', 
  validate 
})(Search)
export default Search
