import { CHANGE_CENTER } from '../actions/actions'

const initialState = {
  coordinates:{ latitude: 49, longitude: 100}
 
}

export const mapCoordinates = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CENTER:
      return Object.assign({}, state, {coordinates: action.payload})
    default:
      return state
  }
}

