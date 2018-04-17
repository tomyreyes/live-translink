import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'



class Search extends Component {
  
  searchText = () => {
    //api call get coordinates
    //from this send the coordinates to store to update state dispatch action
    
  }

  render() {
    return (
      <form>
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
