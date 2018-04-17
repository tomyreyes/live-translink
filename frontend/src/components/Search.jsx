import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'



class Search extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit = {handleSubmit}>
        <label>Enter Location</label>
        <Field name="location" component="input" type="text"/>
        </form>
    )
  }
}
Search = reduxForm({
  form: 'search'
})(Search)
export default Search
