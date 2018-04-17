import { REQUEST_COORDS, RECEIVE_COORDS } from "../actions/actions";
import { combineReducers } from 'redux'

const initialState = {
  latitude: 49.287,
  longitude: -123.1207,
  searchText: ''
  //place default coordinates here? 
}
const mapCoordinates = (state = initialState, action) => {
  switch (action.type){
    case REQUEST_COORDS: 
    return {
      ...state,
      searchText: action.payload 
    } 
    case RECEIVE_COORDS:
    return {
      ...state,
      latitude: action.payload,
      longitude: action.payload
    }
  default: 
    return state
  }
}

const rootReducer = combineReducers({
  mapCoordinates

})

export default rootReducer 

 