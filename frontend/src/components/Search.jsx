import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'


class Search extends Component {
  renderField = ({ label, input, meta: { touched, error } }) => (
    <div className="input-row">
      <label>{label}</label>
      <input placeholder="Enter Location..." {...input} type="text" />
      {touched && error && <span className="error">{error}</span>}
    </div>
  )

  mySubmit = ({ location }, dispatch) => {
    return new Promise((resolve, reject)=> {
      dispatch({
        type: 'RECEIVE_COORDS',
        location,
        resolve,
        reject
      })
    })
  }
  
  render() {
    console.log(this.props)
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

export default connect()(Search)
