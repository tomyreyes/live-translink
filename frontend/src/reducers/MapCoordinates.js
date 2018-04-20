import { CHANGE_CENTER } from "../actions/actions";
import { PlaceField } from "../components/PlaceField";
import { connect } from 'react-redux'
import changeCenter from '../actions/actions'

const initialState = {
  coordinates:{},
}

export const mapCoordinates = (state = initialState, action) => {
  switch (action) {
    case CHANGE_CENTER: 
    return {
      coordinates: action.coordinates //this is broken 
    } 
  default: 
    return state
  }
}