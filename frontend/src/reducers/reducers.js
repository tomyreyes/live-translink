import { REQUEST_COORDS, RECEIVE_COORDS } from "../actions/actions";
import { combineReducers } from 'redux'

const initialState = {
  latitude: 49.287,
  longitude: -123.1207
  //place default coordinates here? 
}
const mapCoordinates = (state = initialState, action) => {
  switch (action.type){
    case REQUEST_COORDS: 
    return //what do i return here? 
    case RECEIVE_COORDS:
    return // return a change to the coordinates state 
  default: 
    return state
  }
}

const rootReducer = combineReducers({
  mapCoordinates

})

export default rootReducer 

