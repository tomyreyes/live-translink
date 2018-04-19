import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { PlaceField } from './PlaceField';



class Search extends Component {
  
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
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.mySubmit)}>
        <Field
          name="location"
          label={'Location'}
          component={ PlaceField }
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
