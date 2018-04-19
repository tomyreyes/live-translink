import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

// const AutocompleteItem = ({ formattedSuggestion }) => (
//   <div>
//     <strong>{formattedSuggestion.mainText}</strong>{' '}
//     <small>{formattedSuggestion.secondaryText}</small>
//   </div>
// )
const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
  <div className="autocomplete-root">
    <input {...getInputProps()} />
    <div className="autocomplete-dropdown-container">
      {suggestions.map(suggestion => (
        <div {...getSuggestionItemProps(suggestion)}>
          <span>{suggestion.description}</span>
        </div>
      ))}
    </div>
  </div>
)

export const PlaceField = ({
  input,
  label,
  meta: { touched, error },
  ...rest
}) => {
  const hasError = touched && error
  const id = input.name

  return <div>
      <label>{label}</label>
      <PlacesAutocomplete id={id} {...input} {...rest} typeAhead={false} inputName={input.name}>
      {renderFunc}
      </PlacesAutocomplete>
    </div>
}
