import { CHANGE_CENTER } from "../actions/actions";
import { PlaceField } from "../components/PlaceField";
import { connect } from 'react-redux'
import changeCenter from '../actions/actions'

const initialState = {
  coordinates:{},
}

export const mapCoordinates = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CENTER: 
    return action.payload
  default: 
    return state
  }
}